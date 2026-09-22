# CASE 80 | 응용사례 — 냉방부하·냉동기 가동대수 분석을 통한 부분부하 과다운전 진단 및 냉동기 운전조합 최적화

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** B/C · Field Data / Optimization Direction  
**Web:** /cases/case80.html

## 현장 질문
Cooling Load가 낮은데 여러 냉동기가 저부하로 운전된다면 실제 필요대수와 최적 Chiller Combination을 어떻게 결정할 것인가?

## 진단
센터별 냉방능력·평균 냉방부하·설치대수·필요가동대수를 비교한다.

**Operating Margin = Actual Running Units − Required Units**

관련 실시간 운전가이드는 예시로 8대 운전, 필요 7대 상태에서 1대 OFF Action으로 연결하는 구조를 갖는다.

## 판단
설치대수에는 Redundancy가 포함될 수 있으므로 설치대수 자체를 과잉으로 보지 않는다. 실제 부하·신뢰성 조건에서 Required Units를 계산한다.

가동대수를 줄인 뒤 개별 Chiller COP/UPI와 전체 Plant kW/RT를 확인한다. Chiller, CHW Pump, CW Pump, Cooling Tower까지 포함한 조합별 Power를 비교한다.

## Test
Cooling Load와 IT Load가 유사한 구간에서 1대씩 단계적으로 OFF하고 냉수온도·Flow·Room/Rack 조건·Plant Power를 검증한다.

## Evidence Boundary
Actual/Required Units 비교와 OFF Action 구조는 실제 원자료에서 확인되나 CASE80 독립 최종 절감률·량·금액은 현재 확정하지 않는다.

## Consultant's Point
목표는 최소 대수가 아니라 **Redundancy를 만족하면서 Plant kW/RT가 가장 낮은 Chiller Combination**이다.
