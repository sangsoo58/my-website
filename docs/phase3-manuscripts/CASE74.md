# CASE 74 | DEEP DIVE 후보 — 다중 데이터센터 PUE·냉방효율 실시간 진단 및 IPOS 성능최적화 플랫폼 구축

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** C · Multi-site Platform / Performance Optimization Proposal  
**Web:** /cases/case74.html

## 현장 질문
여러 데이터센터의 PUE·냉방효율·설비성능을 하나의 데이터체계에서 관리하고, 이상진단을 반복 가능한 운전최적화 Cycle로 만들 수 있는가?

## Architecture
**Meter/BMS → Data Quality → KPI/Benchmark → Diagnosis/FDD → Optimization → M&V**

PUE를 상위 KPI로 두되 Cooling Power, CRAH/CRAC, Chiller, Pump, Cooling Tower와 Free Cooling 상태까지 Drill-down한다.

## Multi-site 목표
2017년 제안자료의 출발점은 PUE 약 **1.77**이었다.

- 24개월 1차 목표: **PUE 1.70**
- 예상 전력절감량: **6.5 GWh/년**
- 예상 절감금액: 약 **7.53억원/년**

이 값은 실행 전 목표·예상효과다.

## 플랫폼 핵심
Site 간 비교에서는 Measurement Boundary, IT Load, 기후, Cooling Architecture, Redundancy와 Data Quality를 함께 관리한다.

KPI와 함께 Completeness, Quality Flag, Meter Configuration Version을 저장하여 숫자의 신뢰도를 관리한다.

## Evidence Boundary
PUE 1.77→1.70과 6.5 GWh/년, 7.53억원/년은 목표·예상효과이지 검증된 실적이 아니다.

## Consultant's Point
플랫폼의 가치는 Dashboard가 아니라 **계측 → 진단 → Action → 검증 → 재학습**의 지속적인 성능관리 Cycle에 있다.

## Source Note

저자 보유 프로젝트 자료와 비식별 공개사례를 바탕으로 재구성했다. 수치·성과의 성격은 본문의 Evidence Boundary를 따른다.
