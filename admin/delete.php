<?php

declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !csrf_check($_POST['csrf'] ?? null)) {
    http_response_code(400);
    exit('잘못된 요청입니다.');
}
$id = clean_text((string)($_POST['id'] ?? ''), 40);
delete_consultation($id);
redirect('/admin/?deleted=1');
