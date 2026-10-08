CASE85~88 정식 CASE MASTER 통합 배포 패치 (2026-10-09)

기준: 사용자가 제공한 data/cases-data.js(84건), data/case-master-v33.js(84건),
data/case-library-short.js, assets/case-library-v33.js,
cases/index.html 및 sitemap.xml.

업데이트:
- CASE01~84 원본 데이터 보존, CASE85~88을 CASE MASTER에 정식 추가
- CASE 전체 88건, 기존 POD 저서 연계 82건, 홈페이지 확장 6건
- 건물: CASE85, CASE86, CASE88 / 지역난방·공동주택: CASE87
- CASE85~88 상세 페이지(그래프 포함) 수록
- 목록 HTML의 84→88 및 확장 범위 수정, JS 캐시 버전 v3.7
- sitemap.xml 85~88 추가
- 별도 수동 카드 삽입 코드는 제거하고 공식 카드 렌더러 구조 사용

저장소 루트(my-website)에 ZIP 내부 폴더 구조 그대로 덮어쓰기:
  cases/index.html
  cases/case85.html
  cases/case86.html
  cases/case87.html
  cases/case88.html
  data/cases-data.js
  data/case-master-v33.js
  data/case-library-short.js
  assets/case-library-v33.js
  sitemap.xml

주의:
- assets/case-library-v33.js는 기존 원본과 내용 동일하며 동봉은 완전한 배포 패키지 목적.
- 이전 'CASE85-88_GitHub_Desktop_FINAL_PATCH.zip'의 임시 카드 방식 index.html은 사용하지 마세요.
- 첫 화면 index.html / 기타 집계 파일은 이번에 제공되지 않아 별도 변경하지 않았습니다.
- GitHub push와 운영사이트 변경은 사용자가 수행해야 합니다.

GitHub Desktop:
  1. my-website 선택 → Repository → Show in Explorer
  2. ZIP 내부 cases, data, assets 폴더와 sitemap.xml을 저장소 루트에 복사
  3. Changes에서 실제 수정 파일 확인 (renderer는 무변경일 수 있음)
  4. Summary: Integrate CASE85-88 into official case master
  5. Commit to main → Push origin
  6. 페이지 강력 새로고침(Ctrl+F5) 후 전체/확장/건물/지역난방 필터 확인

예상 필터 분포:
  전체 88, 저서 연계 82, 홈페이지 확장 6
  제조공장 52, 데이터센터 17, 친환경건축 8, 건물 8, 지역난방·공동주택 3

Evidence: CASE85~88은 과거 기상자료 기반 Simulation/Potential.
실측 Verified Saving으로 표시하지 않습니다.
