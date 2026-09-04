<?php

declare(strict_types=1);
require_once __DIR__ . '/common.php';

function consultation_headers(): array {
    return [
        'id', 'received_at', 'company', 'name', 'email', 'phone',
        'industry', 'topic', 'message', 'privacy', 'status',
        'admin_note', 'updated_at', 'mail_sent'
    ];
}

function ensure_storage_dir(): void {
    if (!is_dir(STORAGE_DIR)) {
        if (!mkdir(STORAGE_DIR, 0755, true) && !is_dir(STORAGE_DIR)) {
            throw new RuntimeException('상담 저장 폴더를 생성할 수 없습니다.');
        }
    }
}

function storage_lock(int $mode) {
    ensure_storage_dir();
    $fp = fopen(CONSULTATION_LOCK, 'c');
    if ($fp === false || !flock($fp, $mode)) {
        if (is_resource($fp)) { fclose($fp); }
        throw new RuntimeException('상담 저장소 잠금에 실패했습니다.');
    }
    return $fp;
}

function storage_unlock($fp): void {
    if (is_resource($fp)) {
        flock($fp, LOCK_UN);
        fclose($fp);
    }
}

function ensure_csv_unlocked(): void {
    if (!file_exists(CONSULTATION_CSV)) {
        $fp = fopen(CONSULTATION_CSV, 'w');
        if ($fp === false) {
            throw new RuntimeException('상담 저장 파일을 만들 수 없습니다.');
        }
        fputcsv($fp, consultation_headers());
        fflush($fp);
        fclose($fp);
    }
}

function append_consultation(array $row): void {
    $lock = storage_lock(LOCK_EX);
    try {
        ensure_csv_unlocked();
        $fp = fopen(CONSULTATION_CSV, 'a');
        if ($fp === false) {
            throw new RuntimeException('상담 내용을 저장할 수 없습니다.');
        }
        $values = [];
        foreach (consultation_headers() as $header) {
            $values[] = $row[$header] ?? '';
        }
        if (fputcsv($fp, $values) === false) {
            fclose($fp);
            throw new RuntimeException('상담 내용을 기록할 수 없습니다.');
        }
        fflush($fp);
        fclose($fp);
    } finally {
        storage_unlock($lock);
    }
}

function read_consultations_unlocked(): array {
    ensure_csv_unlocked();
    $fp = fopen(CONSULTATION_CSV, 'r');
    if ($fp === false) {
        return [];
    }
    $headers = fgetcsv($fp);
    if (!is_array($headers)) {
        fclose($fp);
        return [];
    }
    $rows = [];
    while (($values = fgetcsv($fp)) !== false) {
        if (count($values) === 0) { continue; }
        $values = array_pad($values, count($headers), '');
        $row = array_combine($headers, array_slice($values, 0, count($headers)));
        if (is_array($row) && !empty($row['id'])) {
            $rows[] = $row;
        }
    }
    fclose($fp);
    return $rows;
}

function read_consultations(): array {
    $lock = storage_lock(LOCK_SH);
    try {
        return read_consultations_unlocked();
    } finally {
        storage_unlock($lock);
    }
}

function find_consultation(string $id): ?array {
    foreach (read_consultations() as $row) {
        if (($row['id'] ?? '') === $id) {
            return $row;
        }
    }
    return null;
}

function rewrite_consultations_unlocked(array $rows): void {
    ensure_csv_unlocked();
    $tmp = CONSULTATION_CSV . '.tmp';
    $fp = fopen($tmp, 'w');
    if ($fp === false) {
        throw new RuntimeException('임시 저장 파일을 만들 수 없습니다.');
    }
    $headers = consultation_headers();
    fputcsv($fp, $headers);
    foreach ($rows as $row) {
        $values = [];
        foreach ($headers as $header) {
            $values[] = $row[$header] ?? '';
        }
        fputcsv($fp, $values);
    }
    fflush($fp);
    fclose($fp);
    if (!rename($tmp, CONSULTATION_CSV)) {
        @unlink($tmp);
        throw new RuntimeException('상담 저장 파일을 갱신할 수 없습니다.');
    }
}

function update_consultation(string $id, array $changes): bool {
    $lock = storage_lock(LOCK_EX);
    try {
        $rows = read_consultations_unlocked();
        $found = false;
        foreach ($rows as &$row) {
            if (($row['id'] ?? '') === $id) {
                foreach ($changes as $key => $value) {
                    if (in_array($key, consultation_headers(), true)) {
                        $row[$key] = $value;
                    }
                }
                $row['updated_at'] = date('Y-m-d H:i:s');
                $found = true;
                break;
            }
        }
        unset($row);
        if ($found) {
            rewrite_consultations_unlocked($rows);
        }
        return $found;
    } finally {
        storage_unlock($lock);
    }
}

function delete_consultation(string $id): bool {
    $lock = storage_lock(LOCK_EX);
    try {
        $rows = read_consultations_unlocked();
        $before = count($rows);
        $rows = array_values(array_filter($rows, static function (array $row) use ($id): bool {
            return ($row['id'] ?? '') !== $id;
        }));
        if (count($rows) === $before) {
            return false;
        }
        rewrite_consultations_unlocked($rows);
        return true;
    } finally {
        storage_unlock($lock);
    }
}

function admin_password_exists(): bool {
    if (!file_exists(ADMIN_CONFIG_FILE)) {
        return false;
    }
    $json = json_decode((string)file_get_contents(ADMIN_CONFIG_FILE), true);
    return is_array($json) && !empty($json['password_hash']);
}

function save_admin_password(string $password): void {
    ensure_storage_dir();
    $payload = [
        'password_hash' => password_hash($password, PASSWORD_DEFAULT),
        'updated_at' => date('Y-m-d H:i:s'),
    ];
    $encoded = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if ($encoded === false || file_put_contents(ADMIN_CONFIG_FILE, $encoded, LOCK_EX) === false) {
        throw new RuntimeException('관리자 비밀번호를 저장할 수 없습니다.');
    }
}

function verify_admin_password(string $password): bool {
    if (!admin_password_exists()) {
        return false;
    }
    $json = json_decode((string)file_get_contents(ADMIN_CONFIG_FILE), true);
    $hash = is_array($json) ? (string)($json['password_hash'] ?? '') : '';
    return $hash !== '' && password_verify($password, $hash);
}
