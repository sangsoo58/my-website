# V3.3 GitHub Desktop 배포

1. 현재 `my-website` 폴더 전체를 먼저 백업합니다.
2. 이 Patch ZIP을 풀어 나온 파일을 `my-website` 루트에 **같은 폴더 구조로 덮어쓰기** 합니다.
3. 특히 `index.html`, `data/cases-data.js`, `cases/index.html`은 교체됩니다. `assets/`의 V3.3 파일과 `data/case-master-v33.js`, CASE 상세페이지는 추가됩니다.
4. `book/`, Supabase 설정파일, 기존 Insight, 이미지 파일은 삭제하거나 교체하지 않습니다.
5. GitHub Desktop에서 변경파일을 확인하고 Summary에 `V3.3 51-case master and two-axis filters`를 입력해 Commit to main → Push origin 합니다.
6. 배포 후 `/cases/`에서 `전체 CASE (51) / 저서 연계 (41) / 홈페이지 확장 (10)`과 확장 분야 `4/2/0/4/0`을 확인합니다.
7. Contact Form과 BOOK Reader는 기존 파일을 유지했으므로 실제 운영사이트에서 최종 회귀테스트합니다.
