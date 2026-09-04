(() => {
  const config = window.ENERGY_SUPABASE_CONFIG || {};
  const isPlaceholder = !config.url || !config.key ||
    config.url.includes('YOUR_PROJECT_REF') ||
    config.key.includes('YOUR_SUPABASE');

  window.energySupabaseReady = false;

  if (isPlaceholder) {
    console.warn('[Energy AI] Supabase 설정값이 아직 입력되지 않았습니다. assets/supabase-config.js를 확인하세요.');
    return;
  }

  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error('[Energy AI] supabase-js를 불러오지 못했습니다.');
    return;
  }

  window.energySupabase = window.supabase.createClient(config.url, config.key, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
  window.energySupabaseReady = true;
})();
