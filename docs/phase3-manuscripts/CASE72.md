# CASE 72 | 응용사례 — 데이터센터 외기조건 분석을 통한 외기냉방 적용시간 확대 및 기계냉방 부하 저감

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** C · Field Diagnosis / Cooling Alternative  
**Web:** /cases/case72.html

## 현장 질문
외기조건이 유리한 시간에 IT 환경조건을 유지하면서 기계냉방 운전시간을 얼마나 줄일 수 있는가?

## 분석조건
Economizer Enable은 Dry-bulb 하나로 결정하지 않는다.

- Outdoor Dry-bulb
- Relative Humidity / Dew Point
- Enthalpy
- IT Load
- Rack Inlet Temperature/Humidity
- 외기질·Filtration
- Cooling Architecture

Air-side, Indirect Air-side, Water-side Economizer의 조건을 구분한다.

## 운전전략
기후별 Weather Bin을 이용해 Free Cooling 가능시간을 계산하고, 기계냉방과 Economizer 사이의 Mode Transition을 설계한다.

한국처럼 계절변화가 큰 지역은 겨울·중간기에는 적용시간이 커질 수 있으나 여름·장마의 높은 Dew Point, 미세먼지·황사 등도 Constraint로 본다.

## M&V
Economizer 적용 전후 Compressor Runtime, Cooling kWh, Fan/Pump Power와 IT 환경조건을 동일한 IT Load·외기조건에서 비교한다.

## Evidence Boundary
원자료에서 외기냉방은 실제 개선대안으로 검토되었으나, 외기냉방만의 독립 최종 실측 절감률·금액은 현재 Source에서 확인되지 않는다.

## Consultant's Point
Free Cooling의 질문은 ‘외기가 차가운가’가 아니라 **IT 장비 환경조건을 만족하면서 Mechanical Energy를 줄일 수 있는 시간대가 언제인가**이다.

## Source Note

저자 보유 프로젝트 자료와 비식별 공개사례를 바탕으로 재구성했다. 수치·성과의 성격은 본문의 Evidence Boundary를 따른다.
