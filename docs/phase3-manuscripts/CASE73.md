# CASE 73 | 응용사례 — 데이터센터 냉각탑 설정온도 최적화를 통한 냉동기·냉각탑 통합 냉방전력 저감

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** C · Field Diagnosis / Heat-rejection Alternative  
**Web:** /cases/case73.html

## 현장 질문
냉각수 공급온도를 낮추면 Chiller 전력은 줄지만 Tower Fan 전력은 증가할 수 있다. 어느 운전점에서 Cooling Plant 전체전력이 최소가 되는가?

## 핵심 KPI
- Outdoor Wet-bulb
- Condenser-water Leaving Temperature
- Cooling Tower Approach
- Range
- Tower Fan kW
- Chiller kW
- Cooling Load

**Approach = Leaving CW Temperature − Outdoor Wet-bulb**

## 최적화
고정 Set Point보다 Wet-bulb와 Cooling Load에 따라 Condenser-water Set Point를 Reset한다. Tower Cell 수와 Fan Speed도 함께 검토한다.

목표는:

**Minimum (Chiller kW + Tower Fan kW + 필요 시 Pump kW)**

이다.

## Test
기존 Set Point → 단계 변경 → 안정화 → Chiller/Tower Power 측정 → IT 냉방서비스 확인 → System kW/RT 비교.

## Evidence Boundary
현재 확보 Source에서는 냉각탑 설정온도 변경만의 독립 최종 실측 절감률·금액은 확인되지 않는다. 예상 잠재량을 실제성과로 표현하지 않는다.

## Consultant's Point
가장 낮은 냉각수온도가 아니라 **냉동기와 열방출설비의 Trade-off가 최소가 되는 온도**가 최적 Set Point다.
