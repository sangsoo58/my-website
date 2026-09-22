# CASE 78 | 응용사례 — 냉각수펌프별 소비전력·운전상태 비교를 통한 성능열위 펌프 진단 및 운전 최적화

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 3 · Chapter 11 · 냉동기 Plant 최적화  
**Editorial Note:** Web sector metadata는 데이터센터이나 원 CASE 내용은 반도체·디스플레이 제조시설. 출간 배치는 원문 맥락에 따라 PART 3로 확정 제안.  
**Evidence:** B/C · Field Data Structure / Optimization Direction  
**Web:** /cases/case78.html

## 현장 질문
다수 냉각수펌프의 성능편차와 실제/필요 가동대수를 동시에 관리하면 어떤 펌프를 우선운전하고 몇 대를 가동해야 하는지 판단할 수 있는가?

## 데이터 구조
현장에는 5℃ 계통 #01~#14, 13℃ 계통 #15~#23 냉각수펌프가 별도 Unit으로 관리되었다.

개별 Pump:
- kW
- On/Off
- 가동율
- Flow
- m³/kWh
- Load Factor

System:
- Total Flow / kW
- 원단위
- Actual Running Units
- Required Units
- Online Rated Flow
- Load Factor

## 진단
동일 계통·유사 부하에서 Running kW와 m³/kWh를 비교해 성능열위 후보를 선별한다. 이후 실제유량·부하율을 확인하여 펌프 자체 문제와 운전조건 차이를 구분한다.

또한 **Running Units − Required Units**를 관리해 과다운전 구간을 찾는다.

## 개선방향
- 고효율 Pump 우선운전
- 적정 가동대수
- VSD / Variable Flow
- Rotation 정책
- 정비 후 성능회복 검증

## M&V
동일 유량·부하에서 kW, m³/kWh, Load Factor와 Actual/Required Units Gap을 비교한다.

## Evidence Boundary
CASE78만의 독립 절감률·절감량·금액은 현재 확인자료에서 확정하지 않는다.

## Consultant's Point
개별 Pump 성능과 System 가동대수를 분리하지 않고 **Unit Benchmark + Required Units**를 함께 관리하는 것이 강점이다.
