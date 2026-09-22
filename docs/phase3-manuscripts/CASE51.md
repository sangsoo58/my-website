# CASE 51 | DEEP DIVE 후보 — ASHRAE 90.1 Appendix G Baseline과 설계안을 비교한 대형 복합건물 LEED 에너지모델링

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**편집 배치안 (Expanded Edition Proposal):** PART 5 · Chapter 23 · 신축건물 Energy Modeling
**Evidence:** D — Simulation·Modeling  
**Web:** /cases/case51.html

## 설계 질문

대형 복합건물의 Proposed Design이 기준건물보다 얼마나 개선되었는지, 동일한 기상·용도·운영조건과 Appendix G Baseline을 이용해 공정하게 비교할 수 있는가?

## 대상과 모델

대상은 72층 고층 복합건물로 Office 33개 층, Hotel Guest Room 27개 층, Fitness·Spa·Banquet 4개 층, Observation Platform 2개 층, 기계실 2개 층과 지하 3개 층의 주차·지원공간으로 구성되었다.

- Gross Area: 약 **1,594,260 ft²**
- Proposed WWR: 약 **70%**
- Office Schedule: 주 5일 07~20시
- Hotel Schedule: 주 7일 24시간
- Modeling Tool: **eQUEST3-64**
- Weather: 인천 TRY 시간별 기상자료

## Baseline 구성

ASHRAE 90.1-2004 Appendix G에 따라 Baseline Building을 별도로 구성했다. 실제 방향 0°뿐 아니라 **90°, 180°, 270°**로 회전하여 네 방향 결과의 연간 에너지비용 평균을 Baseline Performance로 사용했다.

Baseline WWR는 **40%**, Climate Zone은 **4A**로 적용했다. Office는 **VAV with Hot Water Reheat, System Type 7**, Hotel은 **Packaged Terminal Heat Pump, System Type 2**를 사용했다.

## 성능평가

네 방향 Baseline 연간 비용은 약 **3.715 / 3.703 / 3.710 / 3.757 million USD/yr**, 평균은 약 **3.721 million USD/yr**였다.

As-designed Proposed의 연간 에너지비용은 Baseline보다 약 **4% 낮게** 평가되었다.

그러나 Proposed의 **연간 Site Energy Consumption은 Baseline보다 약 36% 크게** 계산되었다. 따라서 ‘비용 4% 개선’을 ‘에너지사용량 4% 절감’으로 표현하면 안 된다.

## End-use 차이

대표 결과:
- Interior Lighting: **2,780,571 vs 4,638,876 kWh/yr, -40.1%**
- Space Heating: **14,338.5 vs 17,725.2 MBtu/yr, -19.1%**
- Interior Fans: **3,071,473 vs 3,265,508 kWh/yr, -5.9%**
- Cooling Electricity: **119,837 vs 2,285,515 kWh/yr, -94.8%**

반면 Pump Energy는 Baseline보다 약 **103% 증가**, Heat Rejection Energy는 약 **76% 증가**했다.

Proposed의 흡수식 냉동기 COP는 약 **0.73**, Baseline 전기식 원심냉동기 COP는 약 **6.1**이었다. Purchased Heat 활용으로 Site Energy는 증가했지만 전력 Peak와 비용 구조가 달라져 연간 비용은 낮아졌다.

## Process Load

Baseline Building Performance에서 Process Energy Cost 비중은 약 **25.27%**였다. 규제부하와 Process Load의 처리방법은 전체 Performance Improvement에 영향을 주므로 별도로 확인한다.

## Evidence Boundary

약 4%는 준공 후 실측 절감률이 아니라 **Proposed Design과 Appendix G Baseline의 연간 에너지비용 Simulation 비교결과**다. 적용된 ASHRAE 90.1-2004 및 당시 LEED EAc1 기준은 프로젝트 수행 당시 기준이다.

## Consultant's Point

Site Energy, Source Energy, Energy Cost, Peak Demand, Carbon은 서로 다른 평가축이다. 무엇을 ‘개선’이라고 부르는지 KPI와 Boundary를 함께 명시해야 한다.
