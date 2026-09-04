<?php

declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';

if (!admin_password_exists()) {
    $pageTitle = '관리자 로그인';
    require __DIR__ . '/_header.php';
    echo '<section class="auth-card"><p class="admin-eyebrow">ADMIN LOGIN</p><h1>관리자 초기 설정이 필요합니다.</h1><p>README의 초기 설정 URL을 먼저 실행해 주세요.</p></section>';
    require __DIR__ . '/_footer.php';
    exit;
}

if (admin_logged_in()) {
    redirect('/admin/');
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = (string)($_POST['password'] ?? '');
    if (!csrf_check($_POST['csrf'] ?? null)) {
        $error = '보안 토큰이 만료되었습니다. 다시 시도해 주세요.';
    } elseif (admin_login($password)) {
        redirect('/admin/');
    } else {
        usleep(350000);
        $error = '비밀번호가 올바르지 않습니다.';
    }
}

$pageTitle = '관리자 로그인';
require __DIR__ . '/_header.php';
?>
<section class="auth-card">
  <p class="admin-eyebrow">ADMIN LOGIN</p>
  <h1>상담관리 로그인</h1>
  <p>고객이 제출한 에너지 절감 상담내용을 확인하고 진행상태를 관리합니다.</p>
  <?php if (isset($_GET['setup'])): ?><div class="admin-alert success">관리자 비밀번호 설정이 완료되었습니다.</div><?php endif; ?>
  <?php if ($error !== ''): ?><div class="admin-alert error"><?= h($error) ?></div><?php endif; ?>
  <form method="post" class="admin-form">
    <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>" />
    <label>관리자 비밀번호<input type="password" name="password" required autofocus autocomplete="current-password" /></label>
    <button type="submit" class="admin-button primary">로그인</button>
  </form>
</section>
<?php require __DIR__ . '/_footer.php'; ?>
