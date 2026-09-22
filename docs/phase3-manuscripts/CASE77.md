# CASE 77 | 응용사례 — 데이터센터 지원시설 Base Load와 소비패턴 진단

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** B/C · Field Diagnosis / Optimization Direction  
**Web:** /cases/case77.html

## 현장 질문
IT·냉방 외 지원시설에서 24시간 지속되는 부하 가운데 반드시 필요한 Base Load와 피할 수 있는 Always-on Load를 어떻게 구분할 것인가?

## 분석
2017년 IDC 컨설팅에서 지원시설의 부하리스트·설비용량·소비패턴·센터별 소비지수를 독립 개선항목으로 분석했다.

부하를 다음처럼 분류한다.

- Essential Continuous Load
- Scheduled Load
- Standby Load
- Avoidable Continuous Load

## 진단방법
부하리스트와 시간대별 kW Pattern을 연결하고, 운영시간·점유·지원업무 Schedule과 맞지 않는 지속부하를 선별한다.

필요하면 Submetering을 우선하고, 충분한 데이터가 있는 경우 NILM·FDD 등 부하분해 기술을 보조적으로 사용할 수 있다.

## 개선
Schedule Drift, Manual Override, Standby 운전, 불필요한 24시간 가동을 찾아 운전시간과 Set Point를 재설정한다.

## Evidence Boundary
CASE77 지원시설 개선만의 독립 최종 절감률·절감량·금액은 현재 확인자료에서 확정하지 않는다.

## Consultant's Point
Base Load는 모두 낭비가 아니다. 먼저 **필수 상시부하와 회피 가능한 상시부하를 구분**해야 한다.
