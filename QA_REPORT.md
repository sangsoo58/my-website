# V3.3.1 QA

## 소스 검증 PASS
- 전체 CASE 51 / 저서 연계 41 / 홈페이지 확장 10
- 확장: 제조공장 4 / 데이터센터 2 / 건물 0 / 친환경건축 4 / 지역난방·공동주택 0
- HOME #cases에 1차/2차 필터 DOM 존재
- 필터 건수는 JS에서 CASE MASTER 기반 동적 계산
- CASE 42~51 `홈페이지 확장 CASE` 배지 렌더링
- 0건 선택 안내문 구현
- 공개 카드용 short 문구에서 LGD/LGU 내부 Source 명칭 제거
- CNAME/DNS/Pages/Supabase/BOOK 파일 미포함

## 확인 필요
- GitHub Pages 배포 후 실제 PC 브라우저 클릭 동작
- 실제 모바일 브라우저 레이아웃
- CASE 01~51 모든 상세 링크의 운영 도메인 HTTP 응답
- BOOK Reader와 Contact/Supabase 실제 동작(이번 패치에서 수정하지 않음)
