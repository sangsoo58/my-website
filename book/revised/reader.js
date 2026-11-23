(()=>{
'use strict';
const data=window.KO_REVISED_INDEX;
if(!data||!Array.isArray(data.chapters)||!Array.isArray(data.cases))return;
const total=Number(data.total)||582;
const $=id=>document.getElementById(id);
const sheet=$('sheet'), input=$('page');
let page=0; // cover is separate; manuscript page references remain 1–582.
const chapters=data.chapters;
const cases=data.cases;
function bounded(value){const n=Number(value);return Number.isFinite(n)?Math.min(total,Math.max(0,Math.trunc(n))):0}
function show(n,push=true){
 page=bounded(n);
 const img=new Image();img.decoding='async';img.draggable=false;
 img.alt=page===0?'한국어 개정 준비 원고 앞표지':'데이터로 찾는 산업·건물 에너지절감 PDF '+page+'페이지';
 img.onerror=()=>{const box=document.createElement('div');box.className='loading';box.textContent='페이지 이미지를 불러오지 못했습니다. 연결 상태를 확인해 주세요.';sheet.replaceChildren(box)};
 img.src=page===0?'cover.webp':'pages/p'+String(page).padStart(3,'0')+'.webp';
 sheet.replaceChildren(img);
 input.value=page||'';
 input.placeholder=page===0?'표지':'1';
 $('foot').textContent=(page===0?'표지':page)+' / '+total;
 $('prev').disabled=page===0;$('next').disabled=page===total;
 const active=[...cases].sort((a,b)=>a.page-b.page).filter(x=>x.page<=page).pop();
 const following=chapters.some(c=>c.page>(active?.page||0)&&c.page<=page);
 const link=$('related-case');
 if(page>0&&active&&!following&&active.webUrl){link.href=active.webUrl;link.textContent='웹 CASE'+String(active.number).padStart(2,'0')+' 보기';}
 else {link.href='/cases/';link.textContent='웹 CASE Library 보기';}
 if(push){const url=new URL(location.href);if(page===0)url.searchParams.delete('p');else url.searchParams.set('p',String(page));history.pushState(null,'',url)}
 window.scrollTo(0,0);
}
for(const ch of chapters){$('jump').add(new Option('Chapter '+ch.number+' · '+ch.title,ch.page));}
for(const c of [...cases].sort((a,b)=>a.number-b.number)){$('case-jump').add(new Option('CASE'+String(c.number).padStart(2,'0')+' · '+c.title,c.page));}
$('prev').onclick=()=>show(page-1);
$('next').onclick=()=>show(page+1);
input.onchange=()=>show(input.value||0);
$('jump').onchange=e=>{if(e.target.value)show(e.target.value)};
$('case-jump').onchange=e=>{if(e.target.value)show(e.target.value)};
document.addEventListener('keydown',e=>{if(e.target.closest('input,select,textarea')||e.ctrlKey||e.metaKey||e.altKey)return;if(e.key==='ArrowLeft'){e.preventDefault();show(page-1)}if(e.key==='ArrowRight'){e.preventDefault();show(page+1)}});
window.addEventListener('popstate',()=>show(new URLSearchParams(location.search).get('p')||0,false));
const requested=new URLSearchParams(location.search).get('p');show(requested===null?0:requested,false);
})();