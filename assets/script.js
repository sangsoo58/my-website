(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  const year = document.getElementById('year');
  const form = document.getElementById('consulting-form');
  const status = document.querySelector('.form-status');

  if (year) year.textContent = new Date().getFullYear();

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  function setFormStatus(message, type = '') {
    if (!status) return;
    status.textContent = message;
    status.classList.remove('success', 'error');
    if (type) status.classList.add(type);
  }

  function trimValue(formData, name) {
    return String(formData.get(name) || '').trim();
  }

  if (form) {
    const startedAt = form.querySelector('input[name="form_started_at"]');
    if (startedAt) startedAt.value = String(Date.now());

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const privacy = form.querySelector('input[name="privacy"]');
      if (privacy && !privacy.checked) {
        alert('개인정보 수집·이용 동의가 필요합니다.');
        return;
      }

      if (!window.energySupabaseReady || !window.energySupabase) {
        setFormStatus('온라인 상담 저장 설정이 아직 완료되지 않았습니다. 이메일 또는 전화로 문의해 주세요.', 'error');
        return;
      }

      const formData = new FormData(form);

      // Honeypot: 일반 사용자는 보이지 않는 필드입니다.
      if (trimValue(formData, 'website')) {
        setFormStatus('상담 요청이 접수되었습니다.', 'success');
        form.reset();
        return;
      }

      // 매우 빠른 자동 제출을 조금 줄이기 위한 기본 방어입니다.
      const begin = Number(formData.get('form_started_at') || 0);
      if (begin && Date.now() - begin < 1800) {
        setFormStatus('입력 내용을 확인한 후 다시 제출해 주세요.', 'error');
        return;
      }

      const payload = {
        company: trimValue(formData, 'company'),
        contact_name: trimValue(formData, 'name'),
        email: trimValue(formData, 'email'),
        phone: trimValue(formData, 'phone'),
        industry: trimValue(formData, 'industry'),
        topic: trimValue(formData, 'topic') || '공장 에너지 절감',
        message: trimValue(formData, 'message'),
        privacy: Boolean(privacy && privacy.checked)
      };

      if (!payload.company || !payload.contact_name || !payload.email || !payload.message) {
        setFormStatus('필수 항목을 모두 입력해 주세요.', 'error');
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton ? submitButton.textContent : '';
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = '접수 중...';
      }
      setFormStatus('상담 내용을 안전하게 저장하고 있습니다.');

      try {
        const { error } = await window.energySupabase
          .from('consultations')
          .insert(payload);

        if (error) throw error;

        form.reset();
        if (startedAt) startedAt.value = String(Date.now());
        setFormStatus('상담 요청이 정상 접수되었습니다. 확인 후 연락드리겠습니다.', 'success');
      } catch (error) {
        console.error('[Energy AI] consultation insert failed:', error);
        setFormStatus('상담 저장 중 문제가 발생했습니다. 잠시 후 다시 시도하거나 이메일·전화로 문의해 주세요.', 'error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    });
  }
})();
