(()=>{const t=document.querySelector('.nav-toggle'),n=document.querySelector('.primary-nav');if(t&&n){const close=()=>{n.classList.remove('open');t.setAttribute('aria-expanded','false')};t.onclick=()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',String(o));t.setAttribute('aria-label',o?'메뉴 닫기':'메뉴 열기')};n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}const y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear()})();


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
  const host=main&&main.querySelector('.container');
  if(!host) return;
  const textContent=(main.innerText||'');
  let insight='../insights/mes-ems-energy-data-analysis.html', insightLabel='에너지 데이터 분석 Insight';
  if(/AI|머신러닝|예측모델/i.test(textContent)){ insight='../insights/energy-ai-practical-optimization.html'; insightLabel='Energy AI 활용 Insight'; }
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
      style.textContent='.knowledge-link-panel{margin:28px 0;padding:28px;border:1px solid #dbe4e8;border-radius:20px;background:#fff}.knowledge-link-panel h2{margin:0 0 18px}.knowledge-link-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.knowledge-link-grid a{display:grid;gap:5px;padding:16px;border:1px solid #dbe4e8;border-radius:14px;background:#f7faf9;text-decoration:none}.knowledge-link-grid strong{color:#0f6b5a}.knowledge-link-grid span{font-size:13px;color:#65717d}@media(max-width:700px){.knowledge-link-grid{grid-template-columns:1fr}.knowledge-link-panel{padding:20px}}';
      document.head.appendChild(style);
    }
  };
  fetch('../data/web-book-mapping.json',{cache:'no-store'})
    .then(r=>r.ok?r.json():null)
    .then(rows=>{ const item=Array.isArray(rows)?rows.find(x=>x.caseId===caseId):null; render(Boolean(item&&item.bookIncluded)); })
    .catch(()=>render(no<=41));
})();
