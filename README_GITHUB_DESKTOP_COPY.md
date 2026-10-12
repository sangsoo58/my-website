# GitHub Desktop 직접 복사용 Cloudflare D1 패치

이 패치는 PowerShell 스크립트를 사용하지 않습니다.

## 적용 위치

GitHub Desktop에서:

`my-website` → `Repository` → `Show in Explorer`

열린 `C:\Users\enene\Downloads\my-website` 폴더에
이 ZIP의 내용물을 그대로 복사해서 **덮어쓰기**하십시오.

## 들어 있는 파일

- `admin/index.html`
- `assets/admin.js`
- `assets/contact-api-config.js`
- `assets/supabase-config.js`
- `assets/supabase-client.js`
- `js/contact-form.js`
- `privacy.html`

## 왜 supabase-config.js / supabase-client.js 파일명이 남아 있나요?

현재 홈페이지의 `index.html`에는 기존 Supabase script 태그가 아직 있습니다.
홈페이지 전체 `index.html`을 통째로 덮어써서 다른 최신 수정사항을 잃는 위험을 피하기 위해,
두 파일을 **호환용 shim**으로 바꿨습니다.

중요:
- 이 파일들은 더 이상 Supabase에 연결하지 않습니다.
- 상담 저장은 `https://energy-ai-contact-api.energy-ai-sangsoo58.workers.dev` → Cloudflare D1만 사용합니다.
- `assets/supabase-client.js`는 실제 Supabase client를 생성하지 않습니다.
- 기존 Supabase 프로젝트가 Pause되어도 상담폼은 D1으로 작동합니다.

즉 이번 단계에서 **DB 기능은 Supabase에서 완전히 분리**됩니다.
다만 `index.html`에 남아 있는 Supabase CDN script 한 줄은 사용되지 않는 dead load입니다.
기능 테스트가 끝난 뒤 원하면 별도의 소규모 cleanup으로 그 script 태그까지 삭제할 수 있습니다.

## 적용 후

1. GitHub Desktop `Changes` 확인
2. 아직 Commit/Push하지 말고 변경파일 화면 확인
3. 확인 후 Commit:
   `Switch consultation storage to Cloudflare D1`
4. Push origin
5. 웹 배포 후 상담폼 테스트
6. `/admin/`에서 ADMIN_TOKEN으로 관리자 로그인 테스트

## Worker

https://energy-ai-contact-api.energy-ai-sangsoo58.workers.dev

Health:
https://energy-ai-contact-api.energy-ai-sangsoo58.workers.dev/api/health
