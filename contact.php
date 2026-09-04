<?php

declare(strict_types=1);
require_once __DIR__ . '/includes/storage.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect('/#contact');
}

// Honeypot spam field
if (!empty($_POST['website'] ?? '')) {
    redirect('/?sent=1#contact');
}

// Basic one-minute session rate limit
$now = time();
$last = (int)($_SESSION['last_contact_submit'] ?? 0);
if ($last > 0 && ($now - $last) < 60) {
    redirect('/?sent=0&reason=rate#contact');
}
$_SESSION['last_contact_submit'] = $now;

$company = clean_text((string)($_POST['company'] ?? ''), 100);
$name = clean_text((string)($_POST['name'] ?? ''), 60);
$emailRaw = trim((string)($_POST['email'] ?? ''));
$email = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
$phone = clean_text((string)($_POST['phone'] ?? ''), 40);
$industry = clean_text((string)($_POST['industry'] ?? ''), 150);
$topic = clean_text((string)($_POST['topic'] ?? ''), 100);
$message = clean_message((string)($_POST['message'] ?? ''), 3000);
$privacy = (string)($_POST['privacy'] ?? '');

if ($company === '' || $name === '' || !$email || $message === '' || $privacy !== 'yes') {
    redirect('/?sent=0&reason=validation#contact');
}

$receivedAt = date('Y-m-d H:i:s');
$id = new_consultation_id();

$row = [
    'id' => $id,
    'received_at' => $receivedAt,
    'company' => $company,
    'name' => $name,
    'email' => (string)$email,
    'phone' => $phone,
    'industry' => $industry,
    'topic' => $topic,
    'message' => $message,
    'privacy' => '동의',
    'status' => '신규',
    'admin_note' => '',
    'updated_at' => $receivedAt,
    'mail_sent' => '0',
];

try {
    // 1) 상담내용을 먼저 서버 CSV에 저장합니다.
    append_consultation($row);
} catch (Throwable $e) {
    error_log('[Energy Consultation Save Error] ' . $e->getMessage());
    redirect('/?sent=0&reason=storage#contact');
}

// 2) 저장 성공 후 이메일 알림을 시도합니다. 이메일 실패와 상담 저장 성공은 분리합니다.
$subject = '=?UTF-8?B?' . base64_encode('[웹 상담] ' . $company . ' - ' . $topic) . '?=';
$body = "에너지 절감 사전상담 문의\n\n";
$body .= "접수번호: {$id}\n";
$body .= "접수일시: {$receivedAt}\n";
$body .= "회사명: {$company}\n";
$body .= "담당자: {$name}\n";
$body .= "이메일: {$email}\n";
$body .= "연락처: {$phone}\n";
$body .= "업종/공정: {$industry}\n";
$body .= "상담 분야: {$topic}\n\n";
$body .= "문의 내용:\n{$message}\n\n";
$body .= "관리자 상담관리: " . SITE_URL . "/admin/\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Energy AI Optimization <no-reply@energy-ai-optimization.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$mailOk = @mail(CONTACT_EMAIL, $subject, $body, implode("\r\n", $headers));
if ($mailOk) {
    try {
        update_consultation($id, ['mail_sent' => '1']);
    } catch (Throwable $e) {
        error_log('[Energy Consultation Mail Flag Error] ' . $e->getMessage());
    }
}

redirect('/?sent=1&mail=' . ($mailOk ? '1' : '0') . '#contact');
