# Chapter 24 확장 원고 — 데이터센터 PUE와 냉방 최적화

**편집상태:** ROUND 2 BOOK-STYLE DRAFT  
**Expanded Edition Chapter 24 / 기존 Chapter 23에서 +1 이동**  
**CASE46,47,70~74,77,79~82 추가**

## DUPLICATION CONTROL

현재 출간본 CASE38·39는 데이터센터 프로젝트의 Umbrella CASE다. CASE46·47·70~74·81은 동일 프로젝트 계열의 세부 분석 또는 확장 Story가 포함된다.

- CASE38 → CASE46·70·71·72·73·81: PUE 이상, Fan, Free Cooling, Cooling Tower를 세부 Sub-case로 분해.
- CASE39 → CASE47·74: IPOS 제안을 운전지원과 Platform Architecture로 각각 확장.

따라서 CASE38·39의 PUE 수치·목표·개선대안을 확장 CASE마다 반복하지 않고, 필요한 경우 “CASE38/39 참조”로 Cross-reference한다.

## CHAPTER 24
# 데이터센터 PUE와 냉방 최적화

**IT 서비스 안정성을 유지하면서 PUE 이상을 실제 설비·운전 원인으로 어떻게 연결할 것인가?**

PUE는 데이터센터의 Facility Overhead를 보여주는 상위 KPI지만 원인을 직접 설명하지는 않는다. 따라서 IT Load·Cooling Power·Equipment KPI·운전상태로 단계적으로 Drill-down해야 한다.

**CHAPTER LENS |** Rack 환경·가용성·Redundancy를 유지하면서 Air-side, Chiller Plant, Heat Rejection과 Support Load를 최적화하고 실제 성과를 M&V로 검증할 수 있는가?

---

## CASE 46 | 응용사례 — PUE 이상에서 냉방설비까지 추적

특정 전산실 PUE **1.848**, 같은 시점 센터 평균 **1.576**의 차이를 발견한 뒤 냉방기 운전상태로 범위를 좁혔다.

일부 냉방기에서 냉각 없이 Fan만 운전되는 상태가 확인되었다.

EC Fan 시범 Test에서는 Fan 소비동력 **63.5% 감소**가 확인되었으나, 약 400대 확대안의 약 55%·11억원/년은 예상효과다. 외기냉방 약 4.26억원/년 역시 투자검토 단계 예상효과다.

**EVIDENCE LADDER |** Test Result ≠ Expansion Potential.

---

## CASE 47 | 응용사례 — 계층형 KPI와 실시간 운전지원

PUE를 냉방효율과 개별 냉방기효율로 분해하고, KPI 이탈 시 조사항목과 Action을 연결하는 IPOS 기반 체계를 설계했다.

출발점 PUE 약 **1.77**, 24개월 목표 **1.70**, 중장기 **1.65**가 제안되었다.

- PUE 1.70 목표: 약 **6.5 GWh/년**, 약 **7.53억원/년**
- PUE 1.65 목표: 약 **11.3 GWh/년**, 약 **13.10억원/년**

**EVIDENCE C |** 목표·예상효과이며 실제 달성성과가 아니다.

---

## CASE 70 | 응용사례 — Fan-only Root Cause

센터 평균 PUE 1.576과 특정 전산실 PUE 1.848의 Gap을 설비상태까지 Drill-down하여 Fan-only 운전을 확인했다.

PUE Gap 자체를 절감률로 해석하지 않고 IT Load와 Cooling Power, Rack 환경조건을 함께 본다.

---

## CASE 71 | 응용사례 — EC Fan Retrofit

기존 Fan의 Input Power, Airflow/Pressure, Speed, Cooling Demand와 IT Load를 Baseline으로 만들고 EC Fan Retrofit을 검토한다.

목표함수는:

**Minimum Fan kW subject to Safe IT Thermal Conditions**

이다.

현재 확보 Source에서 EC Fan 교체만의 독립 최종 절감성과는 확정하지 않는다.

---

## CASE 72 | 응용사례 — Economizer / Free Cooling

Economizer Enable은 Dry-bulb 하나가 아니라 Dew Point, Enthalpy, IT Load, Rack Inlet Condition, 외기질을 함께 본다.

Air-side, Indirect Air-side, Water-side Economizer를 구분하고 Weather Bin으로 적용 가능시간을 산정한다.

**EVIDENCE C |** 외기냉방 단독 최종 실측성과는 현재 확인되지 않는다.

---

## CASE 73 | 응용사례 — Cooling Tower Set Point

Cooling Tower Set Point는 가장 낮은 냉각수온도를 목표로 하지 않는다.

**Approach = Leaving Condenser Water Temperature − Outdoor Wet-bulb**

Wet-bulb와 Cooling Load에 따라 Set Point를 조정하고:

**Chiller kW + Tower Fan kW + Pump kW**

의 합이 최소가 되는 운전점을 찾는다.

---

## CASE 74 | DEEP DIVE — Multi-site IPOS

여러 센터의 Total Power, IT Power, Cooling Power와 냉방기·냉동기·냉각탑 데이터를 하나의 성능관리 Layer로 통합한다.

구조:

**Meter/BMS → Data Quality → KPI/Benchmark → FDD/Model → Optimization → M&V**

24개월 1차 목표는 PUE 1.77→1.70, 예상 6.5 GWh/년·7.53억원/년이다.

**EVIDENCE C | Proposal Target**

---

## CASE 77 | 응용사례 — 지원시설 Base Load

24시간 지속되는 지원시설 부하를 다음처럼 분류한다.

- Essential Continuous Load
- Scheduled Load
- Standby Load
- Avoidable Continuous Load

Base Load를 모두 낭비로 간주하지 않고 설비목록·Schedule·Submetering으로 회피 가능한 Always-on 부하만 선별한다.

---

## CASE 79 | 응용사례 — 냉수펌프 Actual vs Required Units

5℃·13℃ 냉수펌프 시스템에서 Flow, kW, m³/kWh, 실제·필요 가동대수를 관리한다.

**Operating Gap = Actual Running Units − Required Units**

Gap이 지속적으로 양(+)이면 단계적인 Pump OFF Test와 ΔP·ΔT·냉방서비스 검증으로 연결한다.

---

## CASE 80 | DEEP DIVE — Chiller Staging

Cooling Load 대비 Actual Running Units와 Required Units를 비교하고, 개별 Chiller Part-load Efficiency와 Auxiliary Power를 포함해 가능한 조합을 평가한다.

목표는 최소 대수가 아니라:

**Minimum Plant kW/RT subject to Redundancy and IT Cooling Constraints**

이다.

CASE80 단독의 최종 절감성과는 현재 확정하지 않는다.

---

## CASE 81 | 응용사례 — Cooling Tower 성능열위

동일 Wet-bulb와 유사 Cooling Load에서 Tower별 Approach·Range·Fan 상태를 비교한다.

열위설비의 원인을 Fan, Fill, Nozzle, Water Distribution, Air Recirculation 등에서 점검하고, 개선 후 외기조건을 보정해 M&V한다.

---

## CASE 82 | DEEP DIVE — Peak·Load Factor와 계약전력

대표 분석센터는:
- 계약전력 **20,000 kW**
- 요금적용전력 **6,000 kW**
- Peak **4,328 kW**
- Peak/Contract **22%**
- Load Factor **37%**
- 기본요금 비중 **31%**

계약전력 **20,000 → 12,000 kW** 시나리오의 예상 비용효과는 약 **167백만원/년(1.67억원/년)**이었다.

**CRITICAL READING |** 이는 kWh 절감이 아니라 계약조건 조정에 따른 **Cost Saving Scenario**다.

---

## CHAPTER 24 SYNTHESIS

데이터센터 성능최적화의 기본 흐름은 다음과 같다.

**Measurement Boundary → PUE Screening → Equipment Drill-down → Air/Water-side Optimization → Staging/Set Point → Continuous Monitoring → M&V**

서비스 제약조건:
- Rack Inlet Temperature/Humidity
- IT Availability
- Redundancy / N+1
- Cooling Capacity
- Equipment Alarm / Safety

## CHAPTER 24 REVIEW

- PUE는 상위 Screening KPI로 사용한다.
- IT Load 차이를 보정하지 않은 센터 간 PUE 비교를 피한다.
- Airflow와 Cooling Capacity를 실제 Rack 환경조건에 맞춘다.
- 냉동기·펌프·냉각탑은 Plant 전체 전력으로 본다.
- 실제·필요 가동대수를 지속 비교한다.
- Proposal Target과 Verified Saving을 분리한다.
- 계약전력 Cost Saving과 Energy Saving을 구분한다.
