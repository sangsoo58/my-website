# CASE 70 | 응용사례 — 데이터센터 PUE 이상분석을 통한 냉방기 Fan 단독운전 문제 진단

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** B · Field Data / Root-cause Finding  
**Web:** /cases/case70.html

## 현장 질문
PUE가 높은 전산실에서 실제로 어떤 냉방설비 운전상태가 Facility Overhead를 만들고 있는가?

## Root-cause Drill-down
센터 평균 PUE는 약 **1.576**, 특정 전산실 PUE는 **1.848**로 관찰되었다.

**PUE → Floor/Room → Cooling Power → Unit Status → Root Cause**

세부 운전상태를 확인한 결과 일부 냉방기에서 실제 냉각 없이 **Fan만 운전되는 상태**가 확인되었다.

## 해석 주의
1.576과 1.848의 차이는 절감률이 아니다. IT Load가 달라지면 PUE도 변할 수 있으므로 Total Power, IT Power, Cooling Power와 실제 설비상태를 함께 본다.

Fan ON + Cooling Output≈0 상태도 무조건 비효율로 단정하지 않고 Room/Rack 조건, Schedule, Override, Control Sequence를 확인한다.

## M&V
개선 후에는 Fan kWh, Cooling kWh, IT kWh, Rack/Room 환경조건과 PUE를 함께 비교한다.

## Evidence Boundary
Fan-only 상태 제거만의 독립 최종 절감률·금액은 현재 확보자료에서 확인되지 않는다.

## Consultant's Point
PUE는 결론이 아니라 **원인을 찾아 설비 수준으로 내려가기 위한 Screening KPI**다.
