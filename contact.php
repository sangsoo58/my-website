<?php
// 간단한 PHP 메일 전송 예제입니다.
// 서버에서 PHP mail() 사용이 가능한 경우에만 동작합니다.
// 운영 전 SPF/DKIM 설정 및 SMTP 기반 전송도 검토하십시오.

declare(strict_types=1);
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /#contact');
    exit;
}

// Honeypot spam field
if (!empty($_POST['website'] ?? '')) {
    header('Location: /?sent=1#contact');
    exit;
}

// Basic one-minute session rate limit
$now = time();
$last = (int)($_SESSION['last_contact_submit'] ?? 0);
if ($last > 0 && ($now - $last) < 60) {
    header('Location: /?sent=0#contact');
    exit;
}
$_SESSION['last_contact_submit'] = $now;

function clean_text(string $value, int $max = 3000): string {
    $value = trim(strip_tags($value));
    $value = preg_replace('/[\r\n]+/', ' ', $value) ?? '';
    return mb_substr($value, 0, $max, 'UTF-8');
}

function clean_message(string $value, int $max = 3000): string {
    $value = trim(strip_tags($value));
    $value = preg_replace("/\r\n?|\n/", "\n", $value) ?? '';
    return mb_substr($value, 0, $max, 'UTF-8');
}

$company = clean_text((string)($_POST['company'] ?? ''), 100);
$name = clean_text((string)($_POST['name'] ?? ''), 60);
$email = filter_var(trim((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$phone = clean_text((string)($_POST['phone'] ?? ''), 40);
$industry = clean_text((string)($_POST['industry'] ?? ''), 150);
$topic = clean_text((string)($_POST['topic'] ?? ''), 100);
$message = clean_message((string)($_POST['message'] ?? ''), 3000);
$privacy = (string)($_POST['privacy'] ?? '');

if ($company === '' || $name === '' || !$email || $message === '' || $privacy !== 'yes') {
    header('Location: /?sent=0#contact');
    exit;
}

$to = 'sangsoo58@gmail.com';
$subject = '=?UTF-8?B?' . base64_encode('[웹 상담] ' . $company . ' - ' . $topic) . '?=';

$body = "에너지 절감 사전상담 문의\n\n";
$body .= "회사명: {$company}\n";
$body .= "담당자: {$name}\n";
$body .= "이메일: {$email}\n";
$body .= "연락처: {$phone}\n";
$body .= "업종/공정: {$industry}\n";
$body .= "상담 분야: {$topic}\n\n";
$body .= "문의 내용:\n{$message}\n";

// From 주소는 실제 도메인 메일 계정으로 바꾸는 것을 권장합니다.
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Energy AI Optimization <no-reply@energy-ai-optimization.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$ok = @mail($to, $subject, $body, implode("\r\n", $headers));
header('Location: /?sent=' . ($ok ? '1' : '0') . '#contact');
exit;
