# CASE 79 | 응용사례 — 냉방부하·운전대수 분석을 통한 데이터센터 냉수펌프 과다운전 진단 및 운전 최적화

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** B/C · Field Data / Optimization Direction  
**Web:** /cases/case79.html

## 현장 질문
냉방부하가 감소했는데도 냉수펌프가 기존 대수로 계속 운전되는 과다운전을 데이터로 찾을 수 있는가?

## 데이터
EEMS/Trend에는 5℃·13℃ 냉수펌프 시스템별:

- Flow
- Power
- m³/kWh
- Actual Running Units
- Required Units
- Online Rated Flow
- Load Factor

가 정의되어 있다.

## 진단
**Operating Gap = Actual Units − Required Units**

Gap이 지속적으로 양(+)이면 과다운전 후보로 보고, Bypass, ΔT, Differential Pressure와 Cooling Load를 함께 확인한다.

## 개선
한 대 단위로 OFF Test를 수행하면서 냉수 Flow, ΔT, Pressure, Pump kW와 IT 냉방서비스를 확인한다.

Variable-Speed Pumping과 Differential Pressure Reset은 장기 확장방향이다.

## Evidence Boundary
현장자료에서 실제/필요 가동대수 비교와 Pump OFF Action 구조는 확인되지만 CASE79만의 독립 최종 절감성과는 확정하지 않는다.

## Consultant's Point
‘몇 대가 켜져 있는가’보다 **현재 냉방부하에 몇 대가 필요한가**를 관리해야 한다.

## Source Note

저자 보유 프로젝트 자료와 비식별 공개사례를 바탕으로 재구성했다. 수치·성과의 성격은 본문의 Evidence Boundary를 따른다.
