<?php
// Energy AI Optimization 상담관리 설정

declare(strict_types=1);

define('SITE_NAME', '글로벌 에너지 최적화 연구소');
define('SITE_URL', 'https://www.energy-ai-optimization.com');
define('CONTACT_EMAIL', 'sangsoo58@gmail.com');

// 최초 관리자 비밀번호 설정 시에만 사용하는 키입니다.
define('ADMIN_SETUP_KEY', '-qFHfhSxPkJFLJeoCpm-_YYCiObjRNjo');

// 상담 데이터는 가능하면 웹루트 바깥에 자동 저장합니다.
// 서버 환경에서 웹루트 상위 폴더에 쓸 수 없을 때만 /storage/를 사용합니다.
$webRoot = dirname(__DIR__);
$preferredStorage = getenv('ENERGY_STORAGE_DIR');
if (!is_string($preferredStorage) || trim($preferredStorage) === '') {
    $preferredStorage = dirname($webRoot) . '/energy_ai_private';
}
$preferredParent = dirname($preferredStorage);
$canUsePreferred = (is_dir($preferredStorage) && is_writable($preferredStorage))
    || (!is_dir($preferredStorage) && is_dir($preferredParent) && is_writable($preferredParent));

define('STORAGE_DIR', $canUsePreferred ? $preferredStorage : $webRoot . '/storage');
define('CONSULTATION_CSV', STORAGE_DIR . '/consultations.csv');
define('CONSULTATION_LOCK', STORAGE_DIR . '/consultations.lock');
define('ADMIN_CONFIG_FILE', STORAGE_DIR . '/admin.json');

define('ADMIN_SESSION_KEY', 'energy_admin_authenticated');
define('ADMIN_SESSION_NAME', 'ENERGYAIADMIN');
define('SESSION_LIFETIME', 60 * 60 * 4); // 4시간

date_default_timezone_set('Asia/Seoul');
