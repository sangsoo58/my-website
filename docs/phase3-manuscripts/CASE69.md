# CASE 69 | 응용사례 — Steam Supply Pressure Pattern과 적정 증기압력 운전

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 4 · Proposed Chapter 15 · 보일러 시스템 운전최적화
**Evidence:** B/C · Field Pattern / Optimization Direction  
**Web:** /cases/case69.html

## 현장 질문
공정 사용처가 요구하는 Pressure와 Distribution Loss를 만족하면서 Boiler Header Pressure를 어디까지 낮출 수 있는가?

## Field Pattern
2008년 Utility 운전특성 분석자료에서는 **보일러 원단위 패턴**과 **Steam Supply Pressure Pattern**을 별도 항목으로 관리했다. 후속 정리자료도 원단위가 낮은 보일러 우선운전과 함께 **적정 압력·배기가스 조건 관리**를 개선방향으로 제시한다.

## 진단 로직
Boiler Set Point는 사용처 요구압력만으로 결정하지 않는다.

**Required Header Pressure ≈ Critical User Minimum Pressure + Distribution ΔP + 안정운전 Margin**

따라서 Boiler Header, Critical User Pressure, Steam Flow와 Distribution Pressure Drop을 같은 시간축에서 본다.

## 단계별 Pressure Test
1. Current Set Point Baseline
2. Steam Demand / Peak Pattern 확인
3. 작은 압력 Step으로 하향
4. 시스템 안정화
5. Critical User Pressure와 생산조건 확인
6. Gas/Steam KPI 재계산
7. Minimum Safe Pressure 확정

Pressure Test 전·후 Fuel Gas만 비교하면 Demand 차이가 섞일 수 있으므로 유사한 Steam Load에서 N㎥/ton을 비교하거나 Baseline으로 보정한다.

## System Boundary
압력 최적화는 Boiler Room에만 국한되지 않는다. Distribution 방열, 누설, Trap·Valve·PRV, Condensate/Flash Steam의 조건까지 연결될 수 있다.

## Evidence Boundary
현재 확보자료에서는 Steam Pressure Set Point 변경만으로 달성한 독립 최종 절감률·절감금액은 확인되지 않는다. Pattern 분석과 Optimization Direction으로 유지한다.

## Consultant's Point
목표는 가장 낮은 Pressure가 아니라 **가장 불리한 사용처까지 필요한 서비스를 안정적으로 전달할 수 있는 최소 충분 Pressure**다.
