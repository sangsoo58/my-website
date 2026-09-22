# CASE 65 | DEEP DIVE 후보 — 보일러 호기별 에너지원단위 비교 및 고효율 호기 우선운전을 통한 시스템 효율개선

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**편집 배치안 (Expanded Edition Proposal):** PART 4 · Proposed Chapter 15 · 보일러 시스템 운전최적화
**Evidence:** A · Field Test / Verified Saving  
**Web:** /cases/case65.html

## 현장 질문
동일한 Steam Demand를 공급하는 여러 보일러 가운데 실제로 어느 호기를 먼저 운전해야 Boiler System의 연료 원단위를 최소화할 수 있는가?

## KPI
보일러 효율비교는 총 가스사용량이 아니라 Steam 생산량으로 정규화한다.

**Boiler Energy KPI = Fuel Gas(N㎥) ÷ Steam Production(ton) = N㎥/ton**

## Field Test
동일 30 ton/h급 보일러의 교체운전 결과:

- 2호기: **66.62 N㎥/ton**
- 3호기: **70.12 N㎥/ton**
- 차이: **3.5 N㎥/ton**
- #3 → #2 교체운전 시 원단위 약 **5% 감소**

완료자료에는 부하율 **40% 이하**에서 원단위가 상승하는 경향도 기록되어 있다. 따라서 호기선택만이 아니라 가동대수와 Loading을 함께 봐야 한다.

## 경제성
완료자료는 평균 증발량 약 **25 ton/h**, 적용시간 약 **3,600 h/년**, 당시 가스단가 약 **595.5원/N㎥**를 적용하여 약 **187.6백만원/년**, 즉 약 **1.8억원/년**의 비용절감 효과를 산정했다.

## System Logic
**Selection → Staging → Loading → Minimum System N㎥/ton**

효율이 좋은 호기를 찾는 것이 출발점이지만 Steam Demand가 낮을 때는 대형 보일러 한 대도 저부하 비효율에 들어갈 수 있으므로 용량조합까지 함께 판단한다.

## Evidence Boundary
66.62 vs 70.12 N㎥/ton, 약 5% 개선과 약 1.8억원/년은 완료자료에 제시된 프로젝트 값이다. 당시 Steam Load·운전시간·가스단가에 종속되며 다른 현장에 그대로 적용하지 않는다.

## Consultant's Point
정격효율표가 아니라 **실제 Steam 1 ton을 생산하는 데 필요한 연료량**으로 운전 Priority를 결정한다.
