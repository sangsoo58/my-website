# PHASE 3 — Figure Caption & Table Callout Register

Status: **DRAFT / BOOK REVISION CANDIDATE**

## Figure captions

| ID | CASE | Proposed Caption | Evidence Note | Use |
|---|---:|---|---|---|
| CASE42-F01 | 42 | CDA 에너지원단위 개선 전·후 비교 | 실제 적용성과와 추가 잠재량을 분리해 해석 | KEEP |
| CASE43-F01 | 43 | 실제 냉동기 가동대수와 부하기준 필요대수 비교 | 가동대수 Gap은 절감률이 아니라 진단근거 | KEEP |
| CASE44-F01 | 44 | 4개 생산시설 저온냉동기 UPI 비교 | Benchmark 값 자체를 절감성과로 해석하지 않음 | KEEP |
| CASE44-F02 | 44 | 4개 생산시설 CDA UPI 비교 | 동일 Measurement Boundary에서만 비교 | OPTIONAL |
| CASE51-F01 | 51 | ASHRAE 90.1 Appendix G Baseline Building의 4방위 Rotation 개념 | Simulation 기반 Baseline 구성 | KEEP |
| CASE56-F01 | 56 | 냉동기 교체운전 Test의 호기별 kW/RT 비교 | 실제 Field Test 결과 | KEEP HIGH |
| CASE63-F01 | 63 | 13℃ 냉동구간 호기별 kW/RT·부하율 비교와 Load Dispatch | Verified Saving | KEEP HIGH |
| CASE65-F01 | 65 | 보일러 2호기와 3호기의 연료원단위 N㎥/ton 비교 | Verified Field Test | KEEP HIGH |

## Table / Fact Box로 전환할 항목

### CASE53
**Fact Box**
- 대표 냉동기 용량: 2,000 USRT
- 냉수 출구온도 예시: 7℃
- 냉수 유량 예시: 630 m³/h
- 판단 KPI: kW/RT

Caption:
**냉수 Set Point Test의 대표 운전조건과 성능평가 KPI**

### CASE64
**Fact Box**
- 분석상 필요 가동대수: 6대
- 실제 가동대수: 8대
- 당시 평균 부하율: 약 75%
- 실제 적용: 8대 → 7대
- Program-level 원단위 개선: 27%

Caption:
**냉동기 Staging 분석에서 확인된 필요대수·실제가동대수·적용결과**

### CASE66
**Table**
| 운전구간 | Boiler 조합 | 비고 |
|---|---|---|
| ~10/20 | 30 ton/h 1대 | 실제 Test 구간 |
| 10/20~21 | 다른 30 ton/h 1대 | 호기 교체 |
| 10/21~23 | 15 ton/h × 2대 | 용량조합 변경 |

Caption:
**Steam Demand 대응을 위한 보일러 용량조합 Test 조건**

## Caption Rule

- 실제성과: “Field Test”, “완료자료”, “검증결과” 등 Source 성격을 명시
- 잠재량: “예상효과”, “절감잠재량”, “검토안”으로 표현
- Simulation: “Simulation 결과”, “설계단계” 표시
- Benchmark: 성능편차 자체를 절감률로 표현하지 않음
- 동일 프로젝트 Companion CASE의 중복 숫자는 Caption에 반복하지 않고 Cross-reference 사용


## Existing asset but Table/Fact Box preferred

The following approved Web PNG assets exist in the Source Register, but they are intentionally not listed in the primary Figure-caption table because print use is currently **Table/Fact Box preferred**:

- CASE53-F01 → CASE53 Fact Box preferred
- CASE64-F01 → CASE64 Fact Box preferred
- CASE66-F01 → CASE66 Table preferred

This is not a missing-caption error. The PNG assets remain source-traceable candidates, but final print use requires user confirmation and BOOK_PRINT_PERMISSION_REVIEW.
