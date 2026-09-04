<?php

declare(strict_types=1);
require_once __DIR__ . '/config.php';

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_name(ADMIN_SESSION_NAME);
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function h($value): string {
    return htmlspecialchars((string)$value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function safe_substr(string $value, int $max): string {
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max, 'UTF-8');
    }
    return substr($value, 0, $max);
}

function clean_text(string $value, int $max = 3000): string {
    $value = trim(strip_tags($value));
    $value = preg_replace('/[\r\n]+/', ' ', $value) ?? '';
    return safe_substr($value, $max);
}

function clean_message(string $value, int $max = 3000): string {
    $value = trim(strip_tags($value));
    $value = preg_replace("/\r\n?|\n/", "\n", $value) ?? '';
    return safe_substr($value, $max);
}

function redirect(string $location): void {
    header('Location: ' . $location);
    exit;
}

function csrf_token(): string {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(24));
    }
    return (string)$_SESSION['csrf_token'];
}

function csrf_check(?string $token): bool {
    return is_string($token)
        && !empty($_SESSION['csrf_token'])
        && hash_equals((string)$_SESSION['csrf_token'], $token);
}

function new_consultation_id(): string {
    return date('YmdHis') . '-' . bin2hex(random_bytes(4));
}

function consultation_statuses(): array {
    return ['신규', '확인중', '상담중', '완료', '보류'];
}
