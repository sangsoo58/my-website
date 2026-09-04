<?php

declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';
require_admin();

$id = clean_text((string)($_GET['id'] ?? ''), 40);
$row = find_consultation($id);
if (!$row) {
    http_response_code(404);
    $pageTitle = '상담내역 없음';
    require __DIR__ . '/_header.php';
    echo '<section class="auth-card"><h1>상담내역을 찾을 수 없습니다.</h1><p><a href="/admin/">상담목록으로 돌아가기</a></p></section>';
    require __DIR__ . '/_footer.php';
    exit;
}

$pageTitle = ($row['company'] ?? '상담') . ' 상담상세';
require __DIR__ . '/_header.php';
?>
<div class="breadcrumb"><a href="/admin/">상담목록</a><span>›</span><strong><?= h($row['company'] ?? '') ?></strong></div>

<section class="detail-head">
  <div>
    <p class="admin-eyebrow">CONSULTATION DETAIL</p>
    <h1><?= h($row['company'] ?? '') ?></h1>
    <p>접수번호 <?= h($row['id'] ?? '') ?> · <?= h($row['received_at'] ?? '') ?></p>
  </div>
  <span class="status-badge large status-<?= h($row['status'] ?? '신규') ?>"><?= h($row['status'] ?? '신규') ?></span>
</section>

<div class="detail-grid">
  <section class="detail-card">
    <h2>고객 정보</h2>
    <dl class="detail-list">
      <div><dt>회사명</dt><dd><?= h($row['company'] ?? '') ?></dd></div>
      <div><dt>담당자</dt><dd><?= h($row['name'] ?? '') ?></dd></div>
      <div><dt>이메일</dt><dd><a href="mailto:<?= h($row['email'] ?? '') ?>"><?= h($row['email'] ?? '') ?></a></dd></div>
      <div><dt>연락처</dt><dd><?= h($row['phone'] ?? '') ?: '-' ?></dd></div>
      <div><dt>업종/공정</dt><dd><?= h($row['industry'] ?? '') ?: '-' ?></dd></div>
      <div><dt>상담분야</dt><dd><?= h($row['topic'] ?? '') ?></dd></div>
      <div><dt>메일알림</dt><dd><?= ($row['mail_sent'] ?? '') === '1' ? '발송 성공' : '발송 실패 또는 미지원 · 상담내용은 정상 저장됨' ?></dd></div>
    </dl>
  </section>

  <section class="detail-card message-card">
    <h2>현재 고민되는 에너지 문제</h2>
    <div class="message-box"><?= nl2br(h($row['message'] ?? '')) ?></div>
  </section>
</div>

<section class="detail-card manage-card">
  <h2>상담 진행 관리</h2>
  <form method="post" action="/admin/update.php" class="admin-form manage-form">
    <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>" />
    <input type="hidden" name="id" value="<?= h($row['id'] ?? '') ?>" />
    <label>진행 상태
      <select name="status">
        <?php foreach (consultation_statuses() as $status): ?>
          <option value="<?= h($status) ?>" <?= ($row['status'] ?? '') === $status ? 'selected' : '' ?>><?= h($status) ?></option>
        <?php endforeach; ?>
      </select>
    </label>
    <label>관리자 메모
      <textarea name="admin_note" rows="7" maxlength="5000" placeholder="통화내용, 후속조치, 다음 연락 예정일 등을 기록하세요."><?= h($row['admin_note'] ?? '') ?></textarea>
    </label>
    <div class="manage-actions">
      <button class="admin-button primary" type="submit">상태·메모 저장</button>
      <span>최종 갱신: <?= h($row['updated_at'] ?? '') ?></span>
    </div>
  </form>
</section>

<section class="danger-zone">
  <div><strong>상담내역 삭제</strong><p>삭제하면 CSV 상담목록에서도 제거되며 되돌릴 수 없습니다.</p></div>
  <form method="post" action="/admin/delete.php" onsubmit="return confirm('이 상담내역을 정말 삭제하시겠습니까? 삭제 후 복구할 수 없습니다.');">
    <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>" />
    <input type="hidden" name="id" value="<?= h($row['id'] ?? '') ?>" />
    <button class="admin-button danger" type="submit">삭제</button>
  </form>
</section>
<?php require __DIR__ . '/_footer.php'; ?>
