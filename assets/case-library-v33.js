(() => {
 const all=(window.ENERGY_CASES||[]).filter(x=>x.status==='published'); const meta=window.CASE_MASTER_V33||[];
 const byId=new Map(all.map(x=>[x.id,x])); const rows=meta.map(m=>({...m,...(byId.get(m.id)||{})}));
 const scopeBtns=[...document.querySelectorAll('[data-scope]')], catBtns=[...document.querySelectorAll('[data-cat]')];
 let scope='전체 CASE', category='전체'; const grid=document.getElementById('case-archive-v33');
 const esc=s=>String(s??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 function subset(){return rows.filter(r=>(scope==='전체 CASE'||r.publicationStatus===scope)&&(category==='전체'||r.category===category));}
 function count(scopeName,catName){return rows.filter(r=>(scopeName==='전체 CASE'||r.publicationStatus===scopeName)&&(catName==='전체'||r.category===catName)).length}
 function updateLabels(){scopeBtns.forEach(b=>b.querySelector('span').textContent=count(b.dataset.scope,'전체'));catBtns.forEach(b=>b.querySelector('span').textContent=count(scope,b.dataset.cat));}
 function render(){updateLabels(); const data=subset(); document.querySelector('[data-visible-count]').textContent=data.length; grid.innerHTML=data.map(r=>`<article class="v33-case-card"><div class="v33-case-head"><b>CASE ${String(r.caseNo).padStart(2,'0')}</b><span>${esc(r.publicationStatus)}</span></div><small>${esc(r.category)}</small><h2>${esc(r.title||'CASE 상세')}</h2><p>${esc(r.short||'Source 기반 CASE 상세정보')}</p><div class="v33-tags">${(r.tags||[]).slice(0,5).map(t=>`<i>${esc(t)}</i>`).join('')}</div><a href="${esc(r.caseLink)}">상세보기 →</a></article>`).join('');}
 scopeBtns.forEach(b=>b.addEventListener('click',()=>{scope=b.dataset.scope;scopeBtns.forEach(x=>x.classList.toggle('active',x===b));render()}));
 catBtns.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.cat;catBtns.forEach(x=>x.classList.toggle('active',x===b));render()})); render();
})();