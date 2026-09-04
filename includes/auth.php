<?php

declare(strict_types=1);
require_once __DIR__ . '/storage.php';

function admin_logged_in(): bool {
    if (empty($_SESSION[ADMIN_SESSION_KEY])) {
        return false;
    }
    $last = (int)($_SESSION['admin_last_activity'] ?? 0);
    if ($last > 0 && time() - $last > SESSION_LIFETIME) {
        admin_logout();
        return false;
    }
    $_SESSION['admin_last_activity'] = time();
    return true;
}

function require_admin(): void {
    if (!admin_logged_in()) {
        redirect('/admin/login.php');
    }
}

function admin_login(string $password): bool {
    if (!verify_admin_password($password)) {
        return false;
    }
    session_regenerate_id(true);
    $_SESSION[ADMIN_SESSION_KEY] = true;
    $_SESSION['admin_last_activity'] = time();
    return true;
}

function admin_logout(): void {
    unset($_SESSION[ADMIN_SESSION_KEY], $_SESSION['admin_last_activity'], $_SESSION['csrf_token']);
    session_regenerate_id(true);
}
