(() => {
  const form = document.getElementById('consulting-form');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const startedAt = form.querySelector('input[name="form_started_at"]');

  const setStatus = (message, type = '') => {
    if (!status) return;
    status.textContent = message;
    status.classList.remove('success', 'error');
    if (type) status.classList.add(type);
  };

  const trimValue = (fd, name) => String(fd.get(name) || '').trim();
  if (startedAt) startedAt.value = String(Date.now());

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const privacy = form.querySelector('input[name="privacy"]');
    if (privacy && !privacy.checked) {
      setStatus('개인정보 수집·이용 동의가 필요합니다.', 'error');
      return;
    }

    if (!window.energySupabaseReady || !window.energySupabase) {
      setStatus('온라인 상담 저장 설정을 확인할 수 없습니다. 이메일 또는 전화로 문의해 주세요.', 'error');
      return;
    }

    const fd = new FormData(form);

    // Honeypot: 일반 사용자는 보이지 않는 필드.
    if (trimValue(fd, 'website')) {
      setStatus('상담 요청이 접수되었습니다.', 'success');
      form.reset();
      return;
    }

    const begin = Number(fd.get('form_started_at') || 0);
    if (begin && Date.now() - begin < 1800) {
      setStatus('입력 내용을 확인한 후 다시 제출해 주세요.', 'error');
      return;
    }

    const payload = {
      company: trimValue(fd, 'company'),
      contact_name: trimValue(fd, 'name'),
      email: trimValue(fd, 'email'),
      phone: trimValue(fd, 'phone'),
      industry: trimValue(fd, 'industry'),
      topic: trimValue(fd, 'topic') || '공장 에너지 절감',
      message: trimValue(fd, 'message'),
      status: '신규',
      admin_note: '',
      source: 'website',
      privacy: Boolean(privacy && privacy.checked)
    };

    if (!payload.company || !payload.contact_name || !payload.email || !payload.message) {
      setStatus('필수 항목을 모두 입력해 주세요.', 'error');
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    const originalText = button ? button.textContent : '';
    if (button) {
      button.disabled = true;
      button.textContent = '접수 중...';
    }
    setStatus('상담 내용을 안전하게 저장하고 있습니다.');

    try {
      const { error } = await window.energySupabase.from('consultations').insert(payload);
      if (error) throw error;

      form.reset();
      if (startedAt) startedAt.value = String(Date.now());
      setStatus('상담 요청이 정상 접수되었습니다. 확인 후 연락드리겠습니다.', 'success');
    } catch (error) {
      console.error('[EO LAB] consultation insert failed:', error);
      setStatus('상담 저장 중 문제가 발생했습니다. 잠시 후 다시 시도하거나 이메일·전화로 문의해 주세요.', 'error');
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = originalText;
      }
    }
  });
})();
