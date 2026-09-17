(() => {
  const data = (window.ENERGY_CASES || []).filter(x => x.status === 'published');
  const meta = window.CASE_MASTER_V33 || [];
  const byId = new Map(data.map(x => [x.id, x]));
  const rows = meta.map(m => ({...m, ...(byId.get(m.id) || {})}));
  const root = document.getElementById('case-filter-v331');
  const grid = document.getElementById('featured-cases');
  if (!root || !grid || !rows.length) return;
  const scopeBtns = [...root.querySelectorAll('[data-v331-scope]')];
  const catBtns = [...root.querySelectorAll('[data-v331-cat]')];
  let scope = '전체 CASE', category = '전체';
  const esc = s => String(s ?? '').replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const matches = (r, s=scope, c=category) => (s === '전체 CASE' || r.publicationStatus === s) && (c === '전체' || r.category === c);
  const count = (s,c) => rows.filter(r => matches(r,s,c)).length;
  const href = r => 'cases/' + String(r.caseLink || '').replace(/^\.\//,'').replace(/^cases\//,'');
  function labels(){
    scopeBtns.forEach(b => b.querySelector('span').textContent = `(${count(b.dataset.v331Scope,'전체')})`);
    catBtns.forEach(b => b.querySelector('span').textContent = `(${count(scope,b.dataset.v331Cat)})`);
  }
  function card(r){
    const expansion = r.publicationStatus === '홈페이지 확장';
    const badge = expansion ? '홈페이지 확장 CASE' : `저서 연계 CASE ${String(r.bookCaseNo || r.caseNo).padStart(2,'0')}`;
    const evidence = r.potentialLabel || 'CASE 분석';
    const metric = r.potential && r.potential !== '원자료 재확인 필요' ? r.potential : evidence;
    return `<article class="case-card live-case-card v331-case-card">
      <div class="case-top"><span>CASE ${String(r.caseNo).padStart(2,'0')} · ${esc(r.category)}</span><span class="case-state ${expansion?'v331-expansion':'live'}">${esc(badge)}</span></div>
      <div class="case-kpi"><small>${esc(evidence)}</small><strong>${esc(metric)}</strong><span>${esc(r.energyType || '')}</span></div>
      <p class="case-company">${esc(r.company || '')} · ${esc(r.equipment || '')}</p>
      <h3>${esc(r.title || 'CASE 상세')}</h3><p>${esc(r.short || '')}</p>
      <div class="case-meta">${(r.tags||[]).slice(0,5).map(t=>`<span>${esc(t)}</span>`).join('')}</div>
      <div class="case-card-foot"><span>${esc(r.verificationStatus || '')}</span><a href="${esc(href(r))}">사례 자세히 보기 <b>→</b></a></div>
    </article>`;
  }
  function render(){
    labels(); const shown=rows.filter(r=>matches(r));
    root.querySelector('[data-v331-visible-count]').textContent=shown.length;
    grid.innerHTML = shown.length ? shown.map(card).join('') : '<div class="case-empty-v331">해당 조건의 CASE가 없습니다.</div>';
  }
  scopeBtns.forEach(b=>b.addEventListener('click',()=>{scope=b.dataset.v331Scope;scopeBtns.forEach(x=>x.classList.toggle('active',x===b));render();}));
  catBtns.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.v331Cat;catBtns.forEach(x=>x.classList.toggle('active',x===b));render();}));
  render();
})();
