<?php

declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !csrf_check($_POST['csrf'] ?? null)) {
    http_response_code(400);
    exit('잘못된 요청입니다.');
}
$id = clean_text((string)($_POST['id'] ?? ''), 40);
$status = clean_text((string)($_POST['status'] ?? ''), 20);
$note = clean_message((string)($_POST['admin_note'] ?? ''), 5000);
if (!in_array($status, consultation_statuses(), true)) {
    http_response_code(400);
    exit('유효하지 않은 상태입니다.');
}
update_consultation($id, ['status' => $status, 'admin_note' => $note]);
redirect('/admin/view.php?id=' . urlencode($id) . '&updated=1');
