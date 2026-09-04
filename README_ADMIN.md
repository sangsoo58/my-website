# Energy AI Optimization · 상담관리 V3

이 배포본은 홈페이지 상담폼을 **CSV에 먼저 저장**하고, 그 다음 관리자 이메일 알림을 시도합니다.
이메일 발송이 실패하더라도 상담 접수내용은 관리자 페이지에 남습니다.

## 1. 업로드 위치

ZIP 안의 파일/폴더 **내용물 전체**를 현재 `index.html`이 있는 웹루트에 업로드합니다.

최종 구조:

```text
웹루트/
├── index.html
├── contact.php
├── photo.jpg
├── robots.txt
├── sitemap.xml
├── Sangsoo_Lee_Korean_Resume.pdf
├── Sangsoo_Lee_English_Resume.pdf
├── assets/
│   ├── styles.css
│   ├── script.js
│   ├── admin.css
│   └── ...
├── cases/
├── data/
├── admin/
│   ├── index.php
│   ├── login.php
│   ├── setup.php
│   ├── view.php
│   ├── update.php
│   ├── delete.php
│   ├── export.php
│   └── logout.php
├── includes/
└── storage/        # 웹루트 밖 저장이 불가능할 때만 실제 데이터 저장에 사용
```

## 2. 최초 관리자 비밀번호 설정

업로드 직후 브라우저에서 아래 URL을 **한 번만** 엽니다.

```text
https://www.energy-ai-optimization.com/admin/setup.php?key=-qFHfhSxPkJFLJeoCpm-_YYCiObjRNjo
```

여기에서 관리자 비밀번호를 10자 이상으로 설정합니다.
비밀번호가 설정되면 같은 setup URL은 더 이상 비밀번호를 바꿀 수 없습니다.

> 중요: 이 초기 설정 URL은 외부에 공유하지 마십시오.

## 3. 상담내용 확인

이후 관리자 주소는 아래입니다.

```text
https://www.energy-ai-optimization.com/admin/
```

관리자 기능:

- 상담 접수목록 확인
- 회사명/담당자/상담내용 검색
- 신규 / 확인중 / 상담중 / 완료 / 보류 상태 관리
- 고객의 상세 상담내용 확인
- 관리자 메모 기록
- 전체 상담목록 CSV 다운로드
- 상담내역 삭제
- 이메일 알림 성공 여부 확인

## 4. 상담 저장 방식

고객이 상담폼을 제출하면:

1. 입력값 검증
2. 상담 내용을 서버 CSV에 저장
3. 관리자 이메일(`sangsoo58@gmail.com`) 알림 발송 시도
4. 관리자 페이지에서 즉시 조회 가능

이메일 `mail()`이 작동하지 않더라도 2번 저장에 성공하면 고객에게 정상 접수 메시지가 표시됩니다.

## 5. 실제 저장 파일 위치

보안을 위해 PHP가 웹루트 상위 폴더에 쓸 수 있으면 자동으로 다음과 같은 별도 폴더를 만들어 사용합니다.

```text
웹루트의 상위폴더/energy_ai_private/consultations.csv
```

웹루트 상위폴더에 쓸 권한이 없는 호스팅에서는 다음으로 자동 대체됩니다.

```text
웹루트/storage/consultations.csv
```

Apache용 `/storage/.htaccess`와 `/includes/.htaccess`가 포함되어 직접 웹 접근을 막습니다.
Nginx를 직접 운영한다면 `/storage/`와 `/includes/` URL 접근 차단을 서버 설정에도 추가하십시오.

## 6. 권한

일반적으로 폴더 755 / 파일 644에서 동작합니다. PHP가 상담 저장 폴더에 쓸 수 있어야 합니다.
무조건 777 권한을 주는 방식은 권장하지 않습니다.

## 7. 운영 전 필수 테스트

1. 본인이 홈페이지에서 테스트 상담 1건 제출
2. `/admin/` 로그인
3. 방금 제출한 내용이 목록에 나타나는지 확인
4. 상세보기 → 상태를 `확인중`으로 변경하고 메모 저장
5. CSV 내려받기 테스트
6. Gmail 알림 수신 여부 확인

## 8. 백업

관리자 페이지의 `CSV 내려받기`를 이용하여 정기적으로 상담내역을 백업하십시오.
