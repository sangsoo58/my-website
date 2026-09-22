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
        status: '신규',
        admin_note: '',
        source: 'website',
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
        const code = String(error?.code || '');
        const msg = String(error?.message || '');
        if (code === '42501' || /row-level security|policy/i.test(msg)) {
          setFormStatus('상담 저장 권한 설정을 확인하고 있습니다. 잠시 후 다시 시도하거나 이메일·전화로 문의해 주세요.', 'error');
        } else {
          setFormStatus('상담 저장 중 문제가 발생했습니다. 잠시 후 다시 시도하거나 이메일·전화로 문의해 주세요.', 'error');
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    });
  }
})();


/* PHASE 2 knowledge-platform navigation + cross-link panel */
(()=>{
  document.querySelectorAll('.primary-nav a, .site-footer a, .case-detail-cta a').forEach(a=>{
    const t=(a.textContent||'').trim();
    const map={
      '에너지 절감 컨설팅':'전문영역',
      '절감 사례':'CASE STUDIES',
      'Energy Insight':'Insight',
      '전문가 소개':'Expert',
      '에너지 절감 상담':'전문 상담·협력',
      '에너지 절감 상담하기':'전문 상담·협력 문의',
      '에너지 절감 상담 요청하기':'전문 상담·협력 문의'
    };
    if(map[t]) a.textContent=map[t];
  });
  const m=location.pathname.match(/\/cases\/case(\d{2})\.html$/i);
  if(!m || document.querySelector('.knowledge-link-panel')) return;
  const no=Number(m[1]), caseId='CASE'+String(no).padStart(2,'0');
  const main=document.querySelector('main');
  const host=main;
  if(!host) return;
  const textContent=(main.innerText||'');
  const focusText=[document.title,document.querySelector('h1')?.innerText||'',...[...document.querySelectorAll('.tag,.detail-tags span')].map(x=>x.innerText||'')].join(' ');
  let insight='../insights/mes-ems-energy-data-analysis.html', insightLabel='에너지 데이터 분석 Insight';
  if(/AI|머신러닝|예측모델/i.test(focusText)){ insight='../insights/energy-ai-practical-optimization.html'; insightLabel='Energy AI 활용 Insight'; }
  else if(/Baseline|M&V|절감성과/i.test(focusText)){ insight='../insights/baseline-mv-normalization.html'; insightLabel='Baseline & M&V Insight'; }
  else if(/AI|머신러닝|예측모델/i.test(textContent)){ insight='../insights/energy-ai-practical-optimization.html'; insightLabel='Energy AI 활용 Insight'; }
  else if(/Baseline|M&V|절감성과/i.test(textContent)){ insight='../insights/baseline-mv-normalization.html'; insightLabel='Baseline & M&V Insight'; }
  const render=(bookIncluded)=>{
    const section=document.createElement('section');
    section.className='knowledge-link-panel';
    section.innerHTML='<p class="eyebrow">KNOWLEDGE CONNECTION</p><h2>이 CASE에서 더 이어서 보기</h2><div class="knowledge-link-grid">'
      +(bookIncluded?'<a href="../book/"><strong>관련 저서</strong><span>'+caseId+' · 현재 출간본 연계</span></a>':'')
      +'<a href="'+insight+'"><strong>관련 Insight</strong><span>'+insightLabel+'</span></a>'
      +'<a href="../cases/"><strong>CASE Library</strong><span>82개 사례에서 유사 사례 탐색</span></a>'
      +'<a href="../#contact"><strong>전문 상담·협력</strong><span>자문 · 연구 · 교육 · R&D 협력</span></a>'
      +'</div>';
    host.appendChild(section);
    if(!document.getElementById('phase2-knowledge-links-style')){
      const style=document.createElement('style'); style.id='phase2-knowledge-links-style';
      style.textContent='.knowledge-link-panel{width:min(calc(100% - 40px),1120px);margin:32px auto;padding:28px;border:1px solid #dbe4e8;border-radius:20px;background:#fff}.knowledge-link-panel h2{margin:0 0 18px}.knowledge-link-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.knowledge-link-grid a{display:grid;gap:5px;padding:16px;border:1px solid #dbe4e8;border-radius:14px;background:#f7faf9;text-decoration:none}.knowledge-link-grid strong{color:#0f6b5a}.knowledge-link-grid span{font-size:13px;color:#65717d}@media(max-width:700px){.knowledge-link-grid{grid-template-columns:1fr}.knowledge-link-panel{padding:20px}}';
      document.head.appendChild(style);
    }
  };
  fetch('../data/web-book-mapping.json',{cache:'no-store'})
    .then(r=>r.ok?r.json():null)
    .then(rows=>{ const item=Array.isArray(rows)?rows.find(x=>x.caseId===caseId):null; render(Boolean(item&&item.bookIncluded)); })
    .catch(()=>render(no<=41));
})();
