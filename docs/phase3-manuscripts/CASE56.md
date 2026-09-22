# CASE 56 | DEEP DIVE 후보 — 냉동기 교체운전 Test를 통한 호기별 kW/RT 비교

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 3 · Chapter 11 · 냉동기 Plant 최적화  
**Evidence:** A · Field Test  
**Web:** /cases/case56.html

## 현장 질문
동일·유사 용량의 냉동기 중 실제 부하조건에서 어느 호기를 우선 가동해야 가장 효율적인가?

## Field Test
운전호기를 실제로 교체하고 냉수유량·ΔT로 RT를 계산한 뒤 Chiller kW를 연결해 kW/RT를 비교했다.

- **#10 → #9** 교체운전: kW/RT 약 **6.6% 감소**
- **#4 → #3** 교체운전: kW/RT 약 **15% 감소**, 5℃ 구간 전력 약 **150 kW 감소**

첫 번째 Test에서는 효율(kW/RT)은 좋아졌지만 부하가 증가하여 총 kW는 증가했다. 따라서 kW만 보면 판단이 뒤집힐 수 있다.

## KPI
**전력(kW) = 처리부하(RT) × kW/RT**

호기 비교에서는 냉동부하, 냉수 Set Point, 냉각수조건을 최대한 맞추고 Part-load 구간별 효율곡선을 축적한다.

## 운전 Priority
고정된 설비번호 순서가 아니라 **현재 부하에서 가장 낮은 kW/RT를 만드는 호기/조합**을 우선가동한다.

## Evidence Boundary
위 6.6%, 15%, 약 150 kW는 실제 교체운전 Test 결과다. 반면 Utility 전체의 1.20→0.88 kW/RT, 27% 개선은 여러 최적화 활동이 포함된 상위 프로그램 성과이므로 CASE56 단독효과로 귀속하지 않는다.

## Consultant's Point
‘어느 냉동기가 좋은가’를 추정하지 않고 **실제 교체운전으로 확인한다**는 점이 이 사례의 핵심이다.
