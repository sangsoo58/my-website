(()=>{'use strict';
const form=document.getElementById('prediag-form');if(!form)return;
const isEn=document.documentElement.lang==='en';const $=n=>form.elements.namedItem(n);const status=document.getElementById('pd-status');const preview=document.getElementById('pd-preview');const button=form.querySelector('button[type=submit]');
const words=isEn?{required:'Please complete all required fields and consent.',tooLong:'The detailed description is too long. Please shorten it and retry.',loading:'Sending your request securely…',success:'Your request has been received. We will review it and contact you.',error:'Could not submit. Please try again or email us directly.',rate:'Too many requests. Please try again later.',api:'The contact API is not configured. Please use email instead.',slow:'Please review the details and try again.',send:'Submit pre-assessment request',honeypot:'Request received.'}:{required:'필수 항목과 개인정보 동의를 확인해 주세요.',tooLong:'접수 내용이 너무 깁니다. 일부 문장을 줄여 다시 제출해 주세요.',loading:'상담 신청을 안전하게 접수하고 있습니다…',success:'사전진단 신청이 접수되었습니다. 검토 후 연락드리겠습니다.',error:'접수 중 오류가 발생했습니다. 다시 시도하거나 이메일로 문의해 주세요.',rate:'요청이 일시적으로 많습니다. 잠시 후 다시 시도해 주세요.',api:'상담 접수 서버 설정을 확인할 수 없습니다. 이메일로 문의해 주세요.',slow:'입력 내용을 검토한 후 다시 제출해 주세요.',send:'사전진단 신청하기',honeypot:'신청이 접수되었습니다.'};
const text=n=>String($(n)?.value||'').trim();const value=(name,label)=>`${label}: ${text(name)||'-'}`;
const checked=(name)=>[...form.querySelectorAll(`input[name="${name}"]:checked`)].map(x=>x.value).join(', ');
const compose=()=>{
const title=isEn?'[MES/EMS Preliminary Energy Assessment]':'[MES·EMS 에너지 분석 사전진단]';
return [title,value('sector',isEn?'Facility type':'업종/건물 유형'),value('facility_size',isEn?'Facility scale':'사업장 규모'),value('system',isEn?'Target system':'분석 대상설비'),(isEn?'Available data':'보유 데이터')+': '+(checked('data_types')||'-'),value('data_period',isEn?'Historical data period':'보유 데이터 기간'),value('time_resolution',isEn?'Data time interval':'데이터 시간간격'),value('goal',isEn?'Main objective':'진단 목적'),(isEn?'Preferred services':'희망 서비스')+': '+(checked('interests')||'-'),value('expected_start',isEn?'Expected start':'희망 시작시기'),'',(isEn?'Current issue and expected outcome':'현장 문제 및 기대 결과')+': '+text('details'),'',(isEn?'Source':'접수 유형')+': '+(isEn?'English pre-assessment':'한국어 사전진단')].join('\n');};
function setStatus(msg,type){status.textContent=msg;status.className='pd-status '+(type?'pd-'+type:'');}
const refresh=()=>{const msg=compose();preview.textContent=msg;preview.hidden=false;return msg;};
document.getElementById('pd-preview-button').addEventListener('click',refresh);
form.addEventListener('submit',async(ev)=>{ev.preventDefault();if(!form.reportValidity()||!$('privacy').checked){setStatus(words.required,'error');return;}
const msg=refresh();if(msg.length>2900){setStatus(words.tooLong,'error');return;}
const begin=Number(text('form_started_at'));if(Date.now()-begin<1800){setStatus(words.slow,'error');return;}
if(text('website')){setStatus(words.honeypot,'ok');return;}
const raw=String(window.ENERGY_CONTACT_API?.baseUrl||'').trim();if(!raw||raw.includes('REPLACE-WITH-YOUR-WORKER')){setStatus(words.api,'error');return;}
const payload={company:text('company'),contact_name:text('name'),email:text('email'),phone:text('phone'),industry:text('sector'),topic:isEn?'Energy Data Pre-assessment':'MES·EMS 데이터 사전진단',message:msg,source:'website',source_page:location.pathname,privacy:true,website:'',form_started_at:begin};
button.disabled=true;button.textContent=words.loading;setStatus(words.loading);
try{const res=await fetch(raw.replace(/\/+$/,'')+'/api/consultations',{method:'POST',mode:'cors',credentials:'omit',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)});if(!res.ok){const err=new Error('Submission failed');err.status=res.status;throw err;}form.reset();$('form_started_at').value=String(Date.now());preview.hidden=true;setStatus(words.success,'ok');}catch(e){setStatus(e.status===429?words.rate:words.error,'error');}finally{button.disabled=false;button.textContent=words.send;}
});
$('form_started_at').value=String(Date.now());
})();