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

  const params = new URLSearchParams(window.location.search);
  if (status && params.get('sent') === '1') {
    status.textContent = '상담 요청이 접수되었습니다. 확인 후 연락드리겠습니다.';
  } else if (status && params.get('sent') === '0') {
    status.textContent = '전송 중 문제가 발생했습니다. 이메일 또는 전화로 문의해 주세요.';
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      const privacy = form.querySelector('input[name="privacy"]');
      if (privacy && !privacy.checked) {
        event.preventDefault();
        alert('개인정보 수집·이용 동의가 필요합니다.');
      }
    });
  }
})();
