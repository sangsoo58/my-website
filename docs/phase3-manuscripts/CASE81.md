# CASE 81 | 응용사례 — 외기조건 보정 기반 데이터센터 냉각탑 성능열위 진단

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Chapter 23 · 데이터센터 PUE와 냉방 최적화  
**Evidence:** B/C · Field Diagnosis / Optimization Direction  
**Web:** /cases/case81.html

## 현장 질문
같은 외기조건에서 특정 냉각탑만 높은 냉각수온도를 보인다면 실제 설비 성능열위인지 어떻게 판단할 것인가?

## KPI
냉각탑은 외기 습구온도의 영향을 크게 받으므로 단순 Leaving Water Temperature보다 Approach를 사용한다.

**Approach = Leaving Condenser Water Temperature − Outdoor Wet-bulb**

또한 Range, Cooling Load, Water Flow, Fan Status/Power를 함께 본다.

## 진단
동일 Wet-bulb·유사 Cooling Load에서 Tower별 Approach와 Range를 비교하여 반복적으로 열위인 설비를 점검대상으로 선별한다.

원인후보:
- Fan 운전상태
- Fill 오염/스케일
- 노즐·수분배
- Air Recirculation
- 유량 불균형

## 성능열위와 Set Point를 구분
성능열위 개선은 설비 자체의 열교환 성능을 회복시키는 활동이고, Set Point Optimization은 정상설비를 어떤 냉각수온도로 운전할지 정하는 제어문제다.

## M&V
개선 전후 Wet-bulb, Cooling Load, Flow, Fan 상태를 보정한 뒤 Approach·Range·Tower Power를 비교한다.

## Evidence Boundary
원자료에서 냉각탑 성능진단, 열위설비 개선 검토, 계절별 Set Point Test가 확인되지만 CASE81만의 독립 최종 절감성과는 확정하지 않는다.

## Consultant's Point
냉각탑은 **같은 외기와 같은 부하에서 얼마나 Wet-bulb에 가깝게 냉각하는가**로 비교해야 한다.
