/*
 * COMPATIBILITY SHIM
 * 기존 index.html이 아직 이 파일명을 로드하기 때문에 유지합니다.
 * Supabase 설정은 제거되었으며 Cloudflare D1 Worker 주소만 정의합니다.
 */
window.ENERGY_CONTACT_API = {
  baseUrl: 'https://energy-ai-contact-api.energy-ai-sangsoo58.workers.dev'
};
