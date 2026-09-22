# CASE 66 | 응용사례 — 보일러 부하율과 연료 원단위 상관분석을 통한 가동대수 및 고효율 운전영역 최적화

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**편집 배치안 (Expanded Edition Proposal):** PART 4 · Proposed Chapter 15 · 보일러 시스템 운전최적화
**Evidence:** A/C · Field Analysis / Test Plan  
**Web:** /cases/case66.html

## 현장 질문
Steam Demand가 낮을 때 여러 보일러를 저부하로 운전하는 것보다 현재 수요에 맞는 용량조합과 가동대수를 선택하면 System N㎥/ton을 낮출 수 있는가?

## Field Observation
UT 운전최적화 완료자료에는 **부하율 40% 이하 운전 시 원단위 상승**이 명시되어 있다.

운전조합도 실제로 변경해 비교했다.

- ~10/20: 2호기 **30 ton/h**
- 10/20~21: 3호기 **30 ton/h**
- 10/21~23: 1호기 + 5호기 **15 ton/h × 2대**

핵심은 설치용량이 충분한지가 아니라 현재 Steam Demand에서 각 보일러가 어떤 부하율로 운전되는가이다.

## KPI
System Load Factor는 Steam Production과 Online Rated Capacity를 연결해 보고, Fuel Gas와 Steam Flow로 System N㎥/ton을 계산한다.

**Steam Demand → Available Boilers → Capacity Combination → Load Factor → System N㎥/ton**

## Test 원칙
30 ton/h 1대와 15 ton/h 2대를 비교할 때 Steam Demand·Pressure·Feed-water 조건이 크게 다르면 용량조합 효과와 외부조건이 섞인다. 가능한 유사부하 구간에서 충분히 안정화한 뒤 비교한다.

## 운전 Rule
단일 40% Threshold를 보편적 기준으로 쓰지 않는다. Low / Medium / High Demand Band별 가능한 조합을 비교하고 Steam Pressure, 최소운전시간, 예비력을 만족하는 범위에서 System N㎥/ton이 가장 낮은 조합을 선택한다.

## Evidence Boundary
40% 이하는 해당 현장에서 관찰된 원단위 상승 구간이다. 다른 Boiler의 보편적 한계값으로 사용하지 않는다. CASE66은 Field Analysis와 Test Plan 성격이며 독립 최종 절감금액을 임의로 부여하지 않는다.

## Consultant's Point
CASE65가 **어느 호기인가**를 묻는다면 CASE66은 **몇 대를 어떤 용량조합으로 운전할 것인가**를 묻는다.

## Source Note

저자 보유 프로젝트 자료와 비식별 공개사례를 바탕으로 재구성했다. 수치·성과의 성격은 본문의 Evidence Boundary를 따른다.
