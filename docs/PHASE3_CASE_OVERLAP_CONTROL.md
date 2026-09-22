# PHASE 3 — CASE Semantic Overlap & Duplication Control

Status: **ROUND 2 EDITORIAL CONTROL / DO NOT DELETE CASE IDs**

## 왜 필요한가

Expanded Edition은 Web CASE01~82의 영구 ID를 유지하지만, 일부 CASE42~82는 현재 책의 CASE01~41과 **동일 프로젝트의 확장 Story 또는 세부 Sub-case**다.

따라서 82개 번호를 기계적으로 각각 독립된 현장 프로젝트처럼 서술하면 같은 프로젝트와 숫자가 반복되고 “82개의 서로 다른 현장”으로 오해될 수 있다.

원칙은 다음과 같다.

- CASE ID는 삭제·변경하지 않는다.
- 같은 프로젝트라도 분석질문이 다르면 별도 CASE로 유지할 수 있다.
- 동일 Source를 공유하는 경우 “동일 프로젝트의 확장/세부 분석”임을 명시한다.
- Umbrella CASE와 Sub-case의 본문을 그대로 반복하지 않는다.
- 프로젝트 수와 CASE 수를 동일한 개념으로 표현하지 않는다.

## Overlap Register

### CASE11 ↔ CASE42
- Relation: **SAME_PROJECT_EXPANDED_COMPANION**
- Confidence: HIGH
- Evidence: 제목 동일, 2개 생산거점 6개 공장, 16.2억원 실적 + 3.5억원 잠재량, CDA 0.12897→0.12627가 동일.
- Editorial Action: CASE11은 현재 출간본의 핵심 요약을 유지하고 CASE42는 동일 프로젝트의 Multi-site·성과구분·실시간 운영체계를 더 깊게 설명하는 확장 Companion으로 편집. 동일 숫자/문단 반복 금지.

### CASE12 ↔ CASE43
- Relation: **SAME_PROJECT_EXPANDED_COMPANION**
- Confidence: HIGH
- Evidence: 냉동 UPI 0.84, COP 4.20, 가동대수 2.1/필요 1.2, CDA 0.126 및 절감잠재량 444,832 kWh/년이 동일.
- Editorial Action: CASE12는 기존 통합 Utility 핵심결과를 유지하고 CASE43은 1분 데이터·순간 손실·Utility Balance 진단절차 중심으로 차별화.

### CASE13 ↔ CASE44
- Relation: **SAME_PROJECT_EXPANDED_COMPANION**
- Confidence: HIGH
- Evidence: 4개 생산시설 LT/HT 냉동기+CDA Benchmark 및 UPI 구조 동일.
- Editorial Action: CASE13은 4개 시설 Benchmark 결과 요약, CASE44는 Measurement Boundary·Best Performance 재현 로직 중심 Deep Dive.

### CASE14 ↔ CASE45
- Relation: **SAME_PROJECT_EXPANDED_COMPANION**
- Confidence: HIGH
- Evidence: 반도체 Big-data Utility 제안, 생산거점별 약 4.8%/4.4%, 냉동 3.0%, 공기압축기 6.7% 구조 동일.
- Editorial Action: CASE14는 제안단계 잠재량 표를 유지하고 CASE45는 이미 고효율인 현장에서 잔여 Performance Gap을 찾는 분석방법 중심으로 편집.

### CASE35 ↔ CASE51
- Relation: **SAME_PROJECT_DEEP_DIVE**
- Confidence: HIGH
- Evidence: LEED Appendix G, Lighting -40.1%, Fan -5.9%, Cooling Electricity -94.8%가 동일.
- Editorial Action: CASE35는 Appendix G Performance Rating 개요, CASE51은 72층 모델·4방위 Rotation·Cost vs Site Energy·End-use 상세 Deep Dive로 편집.

### CASE36 ↔ CASE48
- Relation: **SAME_PROJECT_DEEP_DIVE**
- Confidence: HIGH
- Evidence: DOE-2.1E 8760h 모델, 연간 최종에너지 약 85,122 MWh/년이 동일.
- Editorial Action: CASE36은 DOE-2.1E 설계검토 요약, CASE48은 133층 복합건물 용도별·월별·1차에너지 Deep Dive로 편집.

### CASE38 ↔ CASE46, CASE70, CASE71, CASE72, CASE73, CASE81
- Relation: **UMBRELLA_TO_SUBCASES**
- Confidence: HIGH
- Evidence: CASE38의 PUE 1.848 vs 1.576, Fan-only, EC Fan·외기냉방·냉각탑 개선축이 확장 CASE에서 세분화됨.
- Editorial Action: CASE38은 다중 IDC PUE·냉방개선 전체 Story를 Umbrella로 유지. 확장 CASE는 Root Cause/Fan/Free Cooling/Tower Set Point/Tower Performance로 각각 분석질문을 분리. 동일 PUE·개선대안 설명 반복 최소화.

### CASE39 ↔ CASE47, CASE74
- Relation: **UMBRELLA_TO_PLATFORM_DEEP_DIVES**
- Confidence: HIGH
- Evidence: PUE 1.82/1.77, 목표 1.70·1.65, 6.5/11.3 GWh, 약 594대·14,890RT 구조가 동일 프로젝트 계열.
- Editorial Action: CASE39는 IPOS 개념·목표 요약을 유지. CASE47은 KPI→조사→Action 운전지원, CASE74는 Multi-site Architecture·Data Quality·FDD/M&V Platform으로 역할 분리.

### CASE28 ↔ CASE75, CASE76
- Relation: **UMBRELLA_TO_SUBCASES**
- Confidence: MEDIUM_HIGH
- Evidence: 7개 발전호기, 급수·복수·해수펌프 및 보조기기 최적화라는 분석경계가 일치.
- Editorial Action: CASE28은 발전소 Auxiliary Power 통합진단 요약, CASE75는 호기 Benchmark, CASE76은 병렬 Pump/VFD 상세운전으로 분리. 동일 7개 호기/보조기기 배경 반복 최소화.

### CASE10 ↔ CASE53, CASE55, CASE56, CASE57, CASE58, CASE60, CASE62, CASE63, CASE64, CASE78
- Relation: **RELATED_CHILLER_PLANT_METHODS**
- Confidence: REVIEW_REQUIRED
- Evidence: 냉동기 Plant·펌프·냉각탑·가동대수 최적화 영역이 겹치지만 현재 Current CASE Source Trace가 LOCK되어 동일 프로젝트 여부를 확정하기 어려움.
- Editorial Action: 동일 프로젝트인지 단정하지 않음. Chapter 11 통합 시 기존 CASE10의 Plant-level 잠재량 표와 신규 Field Test/Action 결과가 중복 귀속되지 않도록 Source Trace별 분리.


## 책에서의 권장 표기

동일 프로젝트를 세분화한 CASE에는 다음 중 하나를 사용한다.

- **EXPANDED CASE | CASE11과 동일 프로젝트의 확장 분석**
- **SUB-CASE | CASE38의 냉방설비 개선 Story에서 분리한 세부 분석**
- **DEEP DIVE COMPANION | 기존 CASE35의 동일 모델을 입력·결과 수준까지 확장**
- **PLATFORM COMPANION | 기존 CASE39의 IPOS 제안을 실시간 운전지원 관점으로 확장**

## CASE INDEX 표기 원칙

CASE INDEX에는 82개 ID를 모두 유지하되, 동일 프로젝트 계열은 작은 보조표기를 둘 수 있다.

예:
- CASE 11 | … [Umbrella]
- CASE 42 | … [CASE11 Expanded]
- CASE 38 | … [Umbrella]
- CASE 70 | … [CASE38 Sub-case]

## 정량성과 중복 방지

동일 프로젝트의 같은 절감액이나 KPI가 여러 CASE에서 반복될 수 있다.

- 각 숫자의 **Project-level / Action-level / Test-level** Boundary를 표시한다.
- 동일 프로젝트 총 절감액을 여러 Sub-case의 절감액처럼 각각 합산하지 않는다.
- 책 전체에서 “총 CASE 절감액 합계” 같은 값을 만들지 않는다.
- 동일 Source의 Project-level Result는 대표 CASE 한 곳에서만 총괄하고 다른 CASE에서는 Cross-reference한다.

## Expanded Edition의 의미

“82 CASE”는 82개의 **독립 기업/사업장 수**를 의미하지 않는다.  
하나의 복합 프로젝트에서 서로 다른 진단질문·설비·Test·M&V를 분리한 Sub-case가 포함될 수 있다.

이 원칙을 SOURCE NOTE와 READING GUIDE에도 반영한다.
