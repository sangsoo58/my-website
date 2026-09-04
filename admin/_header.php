<?php
/** @var string $pageTitle */
if (!isset($pageTitle)) { $pageTitle = '상담관리'; }
?>
<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow,noarchive" />
  <title><?= h($pageTitle) ?> | 글로벌 에너지 최적화 연구소</title>
  <link rel="stylesheet" href="/assets/admin.css" />
</head>
<body class="admin-body">
<header class="admin-header">
  <div class="admin-container admin-header-inner">
    <a class="admin-brand" href="/admin/"><span>EO</span><strong>상담관리</strong></a>
    <?php if (function_exists('admin_logged_in') && admin_logged_in()): ?>
      <nav>
        <a href="/admin/">상담목록</a>
        <a href="/admin/export.php">CSV 내려받기</a>
        <a href="/" target="_blank" rel="noopener">홈페이지 ↗</a>
        <a href="/admin/logout.php">로그아웃</a>
      </nav>
    <?php endif; ?>
  </div>
</header>
<main class="admin-main">
  <div class="admin-container">
