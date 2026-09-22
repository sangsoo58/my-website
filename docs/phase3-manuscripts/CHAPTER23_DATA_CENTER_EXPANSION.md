# Chapter 23 확장 초안 — 데이터센터 PUE와 냉방 최적화

**편집상태:** PHASE 3 CHAPTER EXPANSION DRAFT  
**기존 Chapter:** PART 5 · Chapter 23  
**확장 CASE:** CASE46, 47, 70~74, 77, 79~82

## Chapter Lens

IT 서비스 안정성을 유지하면서 **PUE 이상을 실제 설비 원인으로 Drill-down하고, 냉방설비·제어·전력계약까지 어떻게 최적화할 것인가?**

## 확장 흐름

1. **PUE Screening**
   - CASE46 · 다중 IDC PUE·냉방설비 진단
   - CASE70 · PUE 이상에서 Fan-only 운전상태 추적

2. **Air-side Improvement**
   - CASE71 · EC Fan Retrofit
   - CASE72 · 외기냉방 / Economizer

3. **Heat Rejection**
   - CASE73 · 냉각탑 Set Point / Wet-bulb Reset
   - CASE81 · 냉각탑 성능열위 / Approach 진단

4. **Plant Operation**
   - CASE79 · 냉수펌프 Actual vs Required Units
   - CASE80 · Chiller Staging / Combination Optimization

5. **Continuous Performance Management**
   - CASE47 · 계층형 KPI 기반 실시간 성능최적화
   - CASE74 · Multi-site IPOS Platform
   - CASE77 · 지원시설 Base Load / Always-on 진단

6. **Cost Optimization**
   - CASE82 · Peak·Load Factor·Contract Power
   - Energy KPI와 Cost KPI를 분리

## KPI Hierarchy

**Site PUE → Cooling Index → Equipment KPI → Operating State → Action**

주요 KPI:
- PUE
- IT Load
- Cooling Power
- Chiller COP / kW/RT
- Pump m³/kWh
- Cooling Tower Approach
- Fan kW / Airflow
- Actual vs Required Units
- Peak / Load Factor
- Contract Power / Base Charge

## Evidence 보호

- CASE46: 확인된 Fan Test와 확대 예상효과 분리
- CASE47/74: 목표 PUE와 예상효과를 실적으로 표현 금지
- CASE70: PUE Gap 자체를 절감률로 해석 금지
- CASE71~73: Retrofit/Alternative 단계
- CASE79~81: 독립 최종 절감성과 미확정
- CASE82: 1.67억원/년은 계약변경 시나리오의 Cost Saving이며 kWh Saving이 아님

## Chapter Synthesis

데이터센터 에너지최적화의 핵심은 PUE 숫자를 낮추는 것 자체가 아니다.

**Measurement Boundary 정합성 → PUE 이상 탐지 → 하위 냉방설비 Drill-down → Air/Water-side 개선 → 가동대수·Set Point 최적화 → 지속 Monitoring → M&V**

의 흐름으로 운영해야 한다.

## 서비스 제약조건

- Rack Inlet Temperature / Humidity
- IT Availability
- Redundancy / N+1
- Cooling Capacity
- Airflow
- Water / Condenser Conditions
- Equipment Alarm / Safety

최소에너지 운전은 이 조건을 만족하는 범위 안에서만 의미가 있다.

## Cost Layer

CASE82는 Chapter 23의 마지막에 별도 Box 또는 응용사례로 배치한다.

**Energy Saving**과 **Energy Cost Saving**을 구분한다.

- 냉방효율·PUE·펌프·Fan 최적화 → Energy KPI 중심
- 계약전력 적정화 → Cost KPI 중심

이 구분을 명시하면 ‘전기요금 절감 = kWh 절감’이라는 오해를 방지할 수 있다.
