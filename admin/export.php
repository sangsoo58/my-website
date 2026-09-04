<?php

declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';
require_admin();

function csv_safe(string $value): string {
    // Excel/Spreadsheet formula injection 방지
    if ($value !== '' && preg_match('/^[=+\-@]/', $value)) {
        return "'" . $value;
    }
    return $value;
}

$rows = read_consultations();
usort($rows, static function (array $a, array $b): int {
    return strcmp((string)($b['received_at'] ?? ''), (string)($a['received_at'] ?? ''));
});

$filename = 'energy-consultations-' . date('Ymd-His') . '.csv';
header('Content-Type: text/csv; charset=UTF-8');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('Cache-Control: no-store, no-cache, must-revalidate');

$out = fopen('php://output', 'w');
// Excel 한글 호환용 UTF-8 BOM
fwrite($out, "\xEF\xBB\xBF");
$headers = [
    '접수번호','접수일시','회사명','담당자','이메일','연락처','업종/주요공정',
    '상담분야','상담내용','개인정보동의','상태','관리자메모','최종갱신','이메일알림'
];
fputcsv($out, $headers);
foreach ($rows as $row) {
    $values = [
        $row['id'] ?? '', $row['received_at'] ?? '', $row['company'] ?? '', $row['name'] ?? '',
        $row['email'] ?? '', $row['phone'] ?? '', $row['industry'] ?? '', $row['topic'] ?? '',
        $row['message'] ?? '', $row['privacy'] ?? '', $row['status'] ?? '', $row['admin_note'] ?? '',
        $row['updated_at'] ?? '', ($row['mail_sent'] ?? '') === '1' ? '성공' : '실패/미지원'
    ];
    fputcsv($out, array_map(static function ($v): string { return csv_safe((string)$v); }, $values));
}
fclose($out);
exit;
