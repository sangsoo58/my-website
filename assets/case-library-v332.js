(() => {
  const data = (window.ENERGY_CASES || []).filter(x => x.status === 'published');
  const meta = window.CASE_MASTER_V33 || [];
  const byId = new Map(data.map(x => [x.id, x]));

  // V3.3.2: CASE MASTER is authoritative for category/publication status.
  // V3.3.1 used {...master, ...caseData}, allowing the detailed case-data
  // category (e.g. "열처리 · M&V") to overwrite the master category ("제조공장").
  const rows = meta.map(m => ({ ...(byId.get(m.id) || {}), ...m }));

  const root = document.getElementById('case-filter-v331');
  const grid = document.getElementById('featured-cases');
  if (!root || !grid || !rows.length) return;

  const scopeBtns = [...root.querySelectorAll('[data-v331-scope]')];
  const catBtns = [...root.querySelectorAll('[data-v331-cat]')];
  let scope = '전체 CASE';
  let category = '전체';

  const esc = s => String(s ?? '').replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  // Defensive fallback only. Normal operation uses CASE_MASTER_V33 category.
  const categoryFromCaseNo = no => {
    const n = Number(no);
    if ((n >= 1 && n <= 28) || (n >= 42 && n <= 45)) return '제조공장';
    if ((n >= 38 && n <= 39) || (n >= 46 && n <= 47)) return '데이터센터';
    if (n >= 30 && n <= 34) return '건물';
    if (n === 29 || (n >= 35 && n <= 37) || (n >= 48 && n <= 51)) return '친환경건축';
    if (n >= 40 && n <= 41) return '지역난방·공동주택';
    return '';
  };

  const canonicalCategory = r => {
    const master = meta.find(m => m.id === r.id);
    return (master && master.category) || categoryFromCaseNo(r.caseNo) || '';
  };

  const canonicalPublicationStatus = r => {
    const master = meta.find(m => m.id === r.id);
    if (master && master.publicationStatus) return master.publicationStatus;
    return Number(r.caseNo) <= 41 ? '저서 연계' : '홈페이지 확장';
  };

  const matches = (r, s = scope, c = category) => {
    const publicationStatus = canonicalPublicationStatus(r);
    const caseCategory = canonicalCategory(r);
    return (s === '전체 CASE' || publicationStatus === s) && (c === '전체' || caseCategory === c);
  };

  const count = (s, c) => rows.filter(r => matches(r, s, c)).length;
  const href = r => 'cases/' + String(r.caseLink || '').replace(/^\.\//, '').replace(/^cases\//, '');

  function labels() {
    scopeBtns.forEach(b => b.querySelector('span').textContent = `(${count(b.dataset.v331Scope, '전체')})`);
    catBtns.forEach(b => b.querySelector('span').textContent = `(${count(scope, b.dataset.v331Cat)})`);
  }

  function card(r) {
    const caseCategory = canonicalCategory(r);
    const publicationStatus = canonicalPublicationStatus(r);
    const expansion = publicationStatus === '홈페이지 확장';
    const badge = expansion ? '홈페이지 확장 CASE' : `저서 연계 CASE ${String(r.bookCaseNo || r.caseNo).padStart(2, '0')}`;
    const badgeTitle = expansion ? '저서 수록 사례와 별도로 홈페이지에서 추가 공개한 실무 사례' : '현재 저서에 수록된 연계 CASE';
    const evidence = r.potentialLabel || 'CASE 분석';
    const metric = r.potential && r.potential !== '원자료 재확인 필요' ? r.potential : evidence;
    return `<article class="case-card live-case-card v331-case-card">
      <div class="case-top"><span>CASE ${String(r.caseNo).padStart(2, '0')} · ${esc(caseCategory)}</span><span class="case-state ${expansion ? 'v331-expansion' : 'live'}" title="${esc(badgeTitle)}" aria-label="${esc(badgeTitle)}">${esc(badge)}</span></div>
      <div class="case-kpi"><small>${esc(evidence)}</small><strong>${esc(metric)}</strong><span>${esc(r.energyType || '')}</span></div>
      <p class="case-company">${esc(r.company || '')} · ${esc(r.equipment || '')}</p>
      <h3>${esc(r.title || 'CASE 상세')}</h3><p>${esc(r.short || '')}</p>
      <div class="case-meta">${(r.tags || []).slice(0, 5).map(t => `<span>${esc(t)}</span>`).join('')}</div>
      <div class="case-card-foot"><span>${esc(r.verificationStatus || '')}</span><a href="${esc(href(r))}">사례 자세히 보기 <b>→</b></a></div>
    </article>`;
  }

  function render() {
    labels();
    const shown = rows.filter(r => matches(r));
    root.querySelector('[data-v331-visible-count]').textContent = shown.length;
    grid.innerHTML = shown.length ? shown.map(card).join('') : '<div class="case-empty-v331">해당 조건의 CASE가 없습니다.</div>';
  }

  scopeBtns.forEach(b => b.addEventListener('click', () => {
    scope = b.dataset.v331Scope;
    scopeBtns.forEach(x => x.classList.toggle('active', x === b));
    render();
  }));

  catBtns.forEach(b => b.addEventListener('click', () => {
    category = b.dataset.v331Cat;
    catBtns.forEach(x => x.classList.toggle('active', x === b));
    render();
  }));

  render();
})();
