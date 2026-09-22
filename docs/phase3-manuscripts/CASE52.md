# CASE 52 | DEEP DIVE 후보 — 공기압축기 부하율·Loading/Unloading 분석을 통한 적정 가동대수 Test & Adjust

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 4 · Chapter 14 · 공기압축기 시스템 운전최적화  
**Evidence:** Field Data + Test & Adjust  
**Web:** /cases/case52.html

## 현장 질문
현재 CDA 수요를 만족하기 위해 실제로 몇 대의 압축기가 필요하며, 불필요한 Unloading과 과다 가동대수를 줄일 수 있는가?

## 데이터와 KPI
10초 간격의 소비전력, CDA 공급유량·압력, 부하율, 가동대수와 Loading/Unloading 상태를 같은 시간축에서 분석한다.

- kW: Compressor 소비전력
- Flow: CDA 생산·공급유량
- UPI / Specific Energy: 에너지투입 ÷ 압축공기 생산량
- Pressure: Header·말단 요구압력
- Load Factor / Loading / Unloading

월평균만으로는 짧은 수요 Peak와 추가기동, 반복되는 Unloading을 놓칠 수 있어 고해상도 Trend를 사용한다.

## 진단 로직
**Demand → 가동대수 → Loading/Unloading → System Specific Energy → 단계 Test**

가동 중인 설비수보다 실제로 유효하게 압축공기를 생산하는 시간을 구분하는 것이 중요하다. Unloading 상태에서도 전력은 소비될 수 있으므로, 무부하 시간과 잔존전력을 별도로 확인한다.

## Test & Adjust
Baseline에서 가동대수, Flow, Header Pressure, 총 kW, Loading/Unloading과 UPI를 기록한다. 이후 한 대씩 조합을 바꾸며 시스템이 안정화된 후 같은 KPI를 비교한다.

절감량은 정지한 압축기의 Nameplate kW가 아니라 **시스템 전체 전력 Before/After**로 평가한다.

## Consultant's Point
공기압축기 최적화는 설치대수가 아니라 **현재 수요를 어떤 조합으로 가장 효율적으로 공급할 것인가**의 문제다. Base/Trim 역할과 Sequencing을 명확히 할수록 Unloading을 줄일 가능성이 커진다.

## Evidence Boundary
현장 운전데이터와 Test & Adjust 기반 사례. 생산에 필요한 Flow·Pressure를 유지하면서 System Specific Energy가 개선되는지를 검증한다.

## Source Note

저자 보유 프로젝트 자료와 비식별 공개사례를 바탕으로 재구성했다. 수치·성과의 성격은 본문의 Evidence Boundary를 따른다.
