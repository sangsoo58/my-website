# CASE 71 | 응용사례 — 데이터센터 냉방기 Fan 성능분석을 통한 고효율 EC Fan 교체 및 냉방전력 절감

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** C · Field Diagnosis / Retrofit Alternative  
**Web:** /cases/case71.html

## 현장 질문
장시간 운전되는 CRAH/CRAC Fan의 실제 Airflow와 Fan Power를 분석해 EC Fan Retrofit의 경제성을 검토할 수 있는가?

## Baseline
기존 Fan의 명판효율만 비교하지 않고 다음을 함께 확인한다.

- Fan Input Power
- Fan Speed / Airflow 또는 Pressure
- 운전시간
- Cooling Demand
- IT Load
- Rack Thermal Condition

## 개선대안
기존 AC Fan/Motor를 고효율 EC Fan 또는 가변속 구조로 변경하여 필요한 Airflow만 공급하는 대안을 검토한다. Hot/Cold Aisle, Blanking, Cable Opening, Containment 등 Airflow Management도 함께 확인한다.

## 판단조건
최소 Fan kW 자체가 목적은 아니다.

**Minimum Fan kW subject to Safe IT Thermal Conditions**

Critical Rack Inlet Temperature/Humidity, Hot Spot, Minimum Airflow와 장애 시 보상운전을 제약조건으로 둔다.

## M&V
Retrofit 전후 IT Load와 외기조건이 달라질 수 있으므로 유사조건에서 Fan kWh와 Cooling kWh를 비교하거나 Adjusted Baseline을 사용한다.

## Evidence Boundary
현재 확보 Source에서는 EC Fan 교체만의 독립 최종 절감률·절감금액이 확인되지 않는다. Retrofit Alternative와 투자경제성 검토단계로 유지한다.

## Consultant's Point
Fan 기술명보다 중요한 것은 **필요한 Airflow를 필요한 시간에 최소전력으로 공급하는 제어구조**다.
