<?php

declare(strict_types=1);
require_once __DIR__ . '/../includes/auth.php';

if (admin_password_exists()) {
    redirect('/admin/login.php?setup=done');
}

$key = (string)($_GET['key'] ?? $_POST['key'] ?? '');
if ($key === '' || !hash_equals(ADMIN_SETUP_KEY, $key)) {
    http_response_code(403);
    $pageTitle = '관리자 초기 설정';
    require __DIR__ . '/_header.php';
    echo '<section class="auth-card"><p class="admin-eyebrow">ADMIN SETUP</p><h1>초기 설정 키가 필요합니다.</h1><p>배포 패키지의 README에 기재된 초기 설정 URL을 사용해 주세요.</p></section>';
    require __DIR__ . '/_footer.php';
    exit;
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = (string)($_POST['password'] ?? '');
    $confirm = (string)($_POST['confirm'] ?? '');
    if (!csrf_check($_POST['csrf'] ?? null)) {
        $error = '보안 토큰이 만료되었습니다. 다시 시도해 주세요.';
    } elseif (strlen($password) < 10) {
        $error = '비밀번호는 10자 이상으로 설정해 주세요.';
    } elseif ($password !== $confirm) {
        $error = '비밀번호 확인이 일치하지 않습니다.';
    } else {
        try {
            save_admin_password($password);
            redirect('/admin/login.php?setup=1');
        } catch (Throwable $e) {
            $error = '비밀번호를 저장하지 못했습니다. storage 폴더의 쓰기 권한을 확인해 주세요.';
        }
    }
}

$pageTitle = '관리자 초기 설정';
require __DIR__ . '/_header.php';
?>
<section class="auth-card">
  <p class="admin-eyebrow">FIRST SETUP</p>
  <h1>관리자 비밀번호 설정</h1>
  <p>최초 1회만 실행됩니다. 상담관리 페이지에서 사용할 비밀번호를 설정해 주세요.</p>
  <?php if ($error !== ''): ?><div class="admin-alert error"><?= h($error) ?></div><?php endif; ?>
  <form method="post" class="admin-form">
    <input type="hidden" name="key" value="<?= h($key) ?>" />
    <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>" />
    <label>새 비밀번호<input type="password" name="password" minlength="10" required autocomplete="new-password" /></label>
    <label>비밀번호 확인<input type="password" name="confirm" minlength="10" required autocomplete="new-password" /></label>
    <button type="submit" class="admin-button primary">관리자 비밀번호 저장</button>
  </form>
</section>
<?php require __DIR__ . '/_footer.php'; ?>
