# PHASE 3 — CASE42~82 Editorial Style Guide

Status: **ROUND 2 EDITORIAL STANDARD**

## 1. CASE 기본 구조

각 CASE는 아래 순서를 기본으로 사용한다.

1. CASE 번호 + 유형(DEEP DIVE / 응용사례)
2. 제목
3. 한 문단 요약
4. 현장 질문 또는 설계 질문
5. 데이터·Measurement Boundary
6. KPI / 분석 로직
7. 분석에서 확인된 FACT
8. 개선안 / Test / Scenario
9. 성과 표현
10. M&V / 검증조건
11. Consultant's Point
12. Evidence & Measurement Boundary
13. Source Note / Web CASE

모든 CASE가 13개 소제목을 억지로 가질 필요는 없지만, **FACT → INTERPRETATION → APPLICATION → EVIDENCE**의 흐름은 유지한다.

## 2. 성과 표현 표준

### Verified / Actual
- “완료보고서에 제시된 검증성과”
- “현장 Test에서 확인”
- “실제 적용성과”

### Potential / Expected
- “절감잠재량”
- “예상효과”
- “개선 가능성”
- “시나리오 기반 예상 비용효과”

### Simulation
- “설계단계 Simulation 결과”
- “Modeling 결과”
- “실측 절감성과가 아님”

### Null Result
- “효과 없음”
- “확대적용 근거가 충분하지 않음”
- 절감률·절감금액을 새로 부여하지 않음

## 3. 금지 표현

- Potential을 “절감실적”으로 표현 금지
- Simulation을 “실제 절감률”로 표현 금지
- Benchmark Gap을 절감률로 환산 금지
- 프로그램 전체성과를 한 CASE의 단독성과로 귀속 금지
- 계약전력 Cost Saving을 kWh Saving으로 표현 금지
- 원자료에 없는 설비번호·운전조건·기간·비용 생성 금지

## 4. 단위 표기

본문에서 최초 1회 Full Term 또는 의미를 설명한 뒤 약어 사용.

권장:
- kWh/년
- kW
- kW/RT
- N㎥/ton
- m³/kWh
- GWh/년
- 백만원/년, 억원/년
- ℃
- RT
- PUE
- COP

숫자와 단위 사이 공백 여부는 최종 Word Style에서 일괄 통일한다.

## 5. Baseline / M&V 문체

- Baseline = 개선조치가 없었을 때의 정상사용량 또는 비교기준
- Adjusted Baseline = 평가기간 조건을 반영해 조정한 Baseline
- Actual = 평가기간 실제사용량
- Saving = Adjusted Baseline − Actual

단, Simulation CASE에서는 이 M&V 식을 실제성과처럼 적용하지 않는다.

## 6. Figure / Table 원칙

모든 Figure/Table은 다음 Metadata를 갖는다.

- figureId / tableId
- caseId
- proposedCaption
- sourceType
- sourceTrace
- anonymizationRequired
- unitCheck
- evidenceClass
- publicationPermissionStatus
- finalAssetPath
- finalPage

원자료가 없는 숫자를 그래프로 재생성하지 않는다.

## 7. Web ↔ Book 연결

- Web CASE ID = Book CASE ID
- Stable URL 유지
- Book CASE42~82 활성화는 Expanded Edition 최종 페이지 번호 확정 이후
- QR은 canonical numeric URL 사용
- 최종 책 페이지와 Web Book Mapping은 조판 후 업데이트

## 8. 문체

책은 홈페이지보다 압축적으로 작성한다.

- 한 문단 3~6문장
- 숫자 나열보다 ‘왜 이 숫자를 보는가’를 설명
- 기술적 해설은 원자료 FACT와 분리
- 외부 Reference는 ‘배경·확장’으로 표시
- 독자에게 바로 적용 가능한 판단기준을 Consultant's Point로 정리

## 9. Deep Dive 후보 기준

다음 중 2개 이상을 만족하면 Deep Dive 후보로 본다.

- 원시/현장 데이터가 충분함
- 모델식·Test Process가 명확함
- 그래프/표를 재현할 근거가 있음
- M&V 또는 Evidence 구분을 교육적으로 보여줄 수 있음
- 다른 산업으로 일반화할 실무가치가 높음

현재 1차 후보:
CASE42, 44, 52, 56, 60, 62, 63, 64, 68, 74, 82.

최종 Deep Dive 수는 전체 책 분량을 보고 조정한다.


## 10. Source Note / Provenance 표준

### 출판 본문용 Source Note

Active CASE42~82의 책 본문에는 내부 파일명·복구 경로·QA 상태를 노출하지 않는다.

권장 기본문구:

**Source Note |** 저자 보유 프로젝트 자료와 비식별 공개사례를 바탕으로 재구성했다. 수치·성과의 성격은 본문의 Evidence Boundary를 따른다.

단, 다음은 별도 처리한다.
- Simulation CASE: “설계·Simulation 자료를 바탕으로 재구성”으로 표현 가능
- CASE82: 계약조건·비용 시나리오 사례임을 Source Note에서 실제 절감성과처럼 보이게 하지 않음
- CASE50: Source Reconciliation 완료 전 출판 본문 Source Note 생성 금지

### Web 표기

각 CASE의 canonical Web 경로는:
- `/cases/caseXX.html`

형식을 유지한다. CASE ID와 Web 숫자는 1:1이어야 한다.

### 내부 Editorial Provenance

다음 정보는 책 본문이 아니라 내부 Register에서만 관리한다.
- officialBookSourceFile
- sourceMaster
- sourceTrace
- Approval Final TXT fidelity status
- source recovery / content-byte access status
- permission / anonymization review status

출판용 REFERENCES에는 고객사명·사업장명·내부 설비 ID·내부 파일 경로를 노출하지 않는다.
