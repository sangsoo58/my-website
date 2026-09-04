<?php

declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';
require_admin();

$rows = read_consultations();
usort($rows, static function (array $a, array $b): int {
    return strcmp((string)($b['received_at'] ?? ''), (string)($a['received_at'] ?? ''));
});

$statusFilter = clean_text((string)($_GET['status'] ?? ''), 20);
$q = trim((string)($_GET['q'] ?? ''));

$counts = array_fill_keys(consultation_statuses(), 0);
foreach ($rows as $row) {
    $st = (string)($row['status'] ?? '신규');
    if (isset($counts[$st])) { $counts[$st]++; }
}

$filtered = array_values(array_filter($rows, static function (array $row) use ($statusFilter, $q): bool {
    if ($statusFilter !== '' && ($row['status'] ?? '') !== $statusFilter) {
        return false;
    }
    if ($q !== '') {
        $haystack = implode(' ', [
            $row['company'] ?? '', $row['name'] ?? '', $row['email'] ?? '',
            $row['phone'] ?? '', $row['industry'] ?? '', $row['topic'] ?? '', $row['message'] ?? ''
        ]);
        if (function_exists('mb_stripos')) {
            return mb_stripos($haystack, $q, 0, 'UTF-8') !== false;
        }
        return stripos($haystack, $q) !== false;
    }
    return true;
}));

$pageTitle = '상담목록';
require __DIR__ . '/_header.php';
?>
<section class="admin-page-head">
  <div>
    <p class="admin-eyebrow">CONSULTATION CRM</p>
    <h1>에너지 절감 상담관리</h1>
    <p>홈페이지를 통해 접수된 상담내용을 확인하고 진행상태를 관리합니다.</p>
  </div>
  <a class="admin-button secondary" href="/admin/export.php">전체 CSV 내려받기</a>
</section>

<section class="stat-grid">
  <a href="/admin/" class="stat-card"><small>전체</small><strong><?= count($rows) ?></strong></a>
  <?php foreach ($counts as $label => $count): ?>
    <a href="/admin/?status=<?= urlencode($label) ?>" class="stat-card <?= $statusFilter === $label ? 'active' : '' ?>"><small><?= h($label) ?></small><strong><?= $count ?></strong></a>
  <?php endforeach; ?>
</section>

<form method="get" class="filter-bar">
  <input type="search" name="q" value="<?= h($q) ?>" placeholder="회사명, 담당자, 이메일, 상담내용 검색" />
  <select name="status">
    <option value="">전체 상태</option>
    <?php foreach (consultation_statuses() as $status): ?>
      <option value="<?= h($status) ?>" <?= $statusFilter === $status ? 'selected' : '' ?>><?= h($status) ?></option>
    <?php endforeach; ?>
  </select>
  <button class="admin-button primary" type="submit">검색</button>
  <a class="admin-button ghost" href="/admin/">초기화</a>
</form>

<?php if (isset($_GET['updated'])): ?><div class="admin-alert success">상담 상태와 관리자 메모를 저장했습니다.</div><?php endif; ?>
<?php if (isset($_GET['deleted'])): ?><div class="admin-alert success">상담내역을 삭제했습니다.</div><?php endif; ?>

<div class="table-card">
  <div class="table-meta"><strong><?= count($filtered) ?>건</strong><span>최근 접수순</span></div>
  <div class="table-scroll">
    <table class="admin-table">
      <thead><tr><th>접수일</th><th>회사명</th><th>담당자</th><th>상담분야</th><th>상태</th><th>알림</th><th></th></tr></thead>
      <tbody>
      <?php if (!$filtered): ?>
        <tr><td colspan="7" class="empty-cell">조건에 맞는 상담내역이 없습니다.</td></tr>
      <?php else: ?>
        <?php foreach ($filtered as $row): ?>
          <tr>
            <td class="nowrap"><?= h($row['received_at'] ?? '') ?></td>
            <td><strong><?= h($row['company'] ?? '') ?></strong><small><?= h($row['industry'] ?? '') ?></small></td>
            <td><?= h($row['name'] ?? '') ?><small><?= h($row['email'] ?? '') ?></small></td>
            <td><?= h($row['topic'] ?? '') ?></td>
            <td><span class="status-badge status-<?= h($row['status'] ?? '신규') ?>"><?= h($row['status'] ?? '신규') ?></span></td>
            <td><?= ($row['mail_sent'] ?? '') === '1' ? '<span class="mail-ok">메일✓</span>' : '<span class="mail-fail">저장만</span>' ?></td>
            <td><a class="detail-link" href="/admin/view.php?id=<?= urlencode((string)$row['id']) ?>">상세보기 →</a></td>
          </tr>
        <?php endforeach; ?>
      <?php endif; ?>
      </tbody>
    </table>
  </div>
</div>
<?php require __DIR__ . '/_footer.php'; ?>
