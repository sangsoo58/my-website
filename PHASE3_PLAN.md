# PHASE 3 — CASE42~82 Book Expansion & Web↔Book Integration

Status: **PLANNING / REVIEW ONLY**  
Branch: `phase3-book-expansion-planning`  
Production `main`: **NO PHASE 3 CHANGE**

## 1. 목표

현재 웹의 CASE01~82 체계를 유지하면서, 아직 저서에 수록되지 않은 CASE42~82를 출간 가능한 원고로 확장한다.

핵심 원칙:
- CASE ID는 영구 유지: Web CASE42 ↔ Book CASE42
- 기존 CASE01~41의 번호·내용·참조체계는 유지
- Potential / Expected / Simulation / Verified / Actual을 절대 혼동하지 않음
- 원자료·Evidence·Measurement Boundary를 먼저 고정한 뒤 문장을 편집
- 고객명·사업장·내부코드·장비 식별정보는 비식별 원칙 유지
- 저서 확대가 완료되기 전까지 CASE42~82의 기존 Web Book UI는 활성화하지 않음
- 최종 페이지 번호가 확정된 뒤 `data/web-book-mapping.json`만 활성화

## 2. 현재 41 CASE 출간본 구조를 유지하는 방향

현재 책은 7개 PART와 Chapter 1~28 구조를 갖고 있다. Phase 3에서는 가능하면 기존 Chapter를 재사용해 CASE42~82를 배치하고, 구조적으로 꼭 필요한 경우에만 신규 Chapter를 검토한다.

기존 관련 영역:
- PART 3 · 반도체·디스플레이·전자부품 Utility 최적화
  - Chapter 11 · 냉동기 Plant 최적화
  - Chapter 12 · 반도체 Multi-Utility 통합 최적화
- PART 4 · 산업 Utility 및 에너지다소비 산업
  - Chapter 14 · 공기압축기 시스템 운전최적화
  - Chapter 19 · 발전소 보조기기
- PART 5 · 건물·데이터센터·지역난방
  - Chapter 22 · 신축건물 Energy Modeling
  - Chapter 23 · 데이터센터 PUE와 냉방 최적화
- PART 6 · 에너지 데이터 분석과 성과 검증은 CASE의 분석·M&V 방법론을 교차 참조하는 용도로 활용

## 3. 1차 편집 배치안

### Batch A — CASE42~51
- CASE42~45 → PART 3 / Chapter 12 후보
- CASE46~47 → PART 5 / Chapter 23 후보
- CASE48~51 → PART 5 / Chapter 22 후보
- CASE48~51은 Simulation(D) 성격을 유지하고 실제 절감실적으로 표현하지 않음

### Batch B — CASE52~64
- CASE52,54,59,61 → PART 4 / Chapter 14 후보
- CASE53,55,56,57,58,60,62,63,64 → PART 3 / Chapter 11 후보
- CASE57은 현재 EVIDENCE-PARTIAL이므로 원고에서도 확정성과 표현 금지

### Batch C — CASE65~69
- 5개 모두 Boiler 중심의 독립적인 연속 Story
- 기존 Chapter에 억지로 편입하기보다 PART 4 내 **‘보일러 시스템 운전최적화’ 신규 Chapter 후보**로 검토
- Chapter 번호는 전체 편집구조 확정 전까지 부여하지 않음

### Batch D — CASE70~82
- CASE70~74,77,79~82 → PART 5 / Chapter 23 후보
- CASE75~76 → PART 4 / Chapter 19 후보
- CASE78 → 원자료 대조 후 PART 3 Chapter 11 또는 12 결정

## 4. CASE별 원고 작성 Template

각 CASE는 다음 순서를 기본으로 한다.

1. CASE TITLE
2. 현장 질문 / 문제정의
3. 데이터 및 Measurement Boundary
4. KPI·Baseline·진단 로직
5. 분석에서 확인된 사실
6. 검토·실행한 개선안
7. 성과 표현
   - Actual/Verified
   - Potential/Expected
   - Simulation/Modeling
   중 원자료에 맞는 등급만 사용
8. M&V / 검증조건
9. Consultant's Point
10. AI·데이터 활용 확장(원 CASE 성과와 분리)
11. Source Note
12. Web CASE QR / Stable URL

## 5. Evidence 보호 규칙

- CASE42: A/B/C mixed → 실증성과와 잠재량을 문장 안에서도 분리
- CASE43~46: B/C → 분석 확인사항과 예상효과를 분리
- CASE47: C + B baseline → 제안성과를 실제 검증성과로 쓰지 않음
- CASE48~51: D → Simulation 결과만 표현
- CASE52~82: 기존 EVIDENCE-VERIFIED / PARTIAL 상태를 그대로 유지
- CASE57: EVIDENCE-PARTIAL
- CASE82: 계약전력 조정의 **Cost KPI**와 설비의 **Energy KPI(kWh)**를 분리

## 6. Phase 3 편집 QA Gate

CASE별:
- 번호와 Web URL 일치
- 제목 1:1
- 숫자/단위/기간 원자료 대조
- 성과등급 일치
- Measurement Boundary 명시
- Source Trace 유지
- 고객 식별정보 제거
- 그래프/표 Source ID 기록

전체:
- CASE INDEX C01~C82 1:1
- 본문 CASE01~82 1:1
- REFERENCES C01~C82 1:1
- Web↔Book Mapping 82/82
- QR/URL 82/82
- 페이지 번호 확정 후 Mapping 업데이트
- 최종 Print Master / Editable Word / Figures Source / Cover Print 동기화
- 최종 Preflight 후 Book Reader 갱신

## 7. 현재 발견된 편집 Audit 항목

Production 콘텐츠는 수정하지 않고 Phase 3 원고 단계에서 원자료와 대조한다.

- CASE50: Web title은 대형 오피스 빌딩이지만 현재 Measurement Boundary는 보육시설 Passive House 설계안으로 기록되어 있어 원자료 대조 필요
- CASE65~69: 제목은 Boiler 사례인데 일부 system metadata가 CDA/냉수/압축기/냉각탑으로 기록되어 있어 metadata 정합성 검토 필요
- CASE75~76: 발전소 사례인데 현재 Web sector metadata는 데이터센터로 기록
- CASE78: 설명은 반도체·디스플레이 제조시설 냉각수펌프인데 현재 Web sector metadata는 데이터센터로 기록
- 위 항목은 **원고 편집 전에 출처 확인 후 결정**하며 현재 Production 데이터를 추정으로 수정하지 않음

## 8. 작업 순서

1. CASE42~82 Editorial Audit 확정
2. CASE42~51 원고 1차 작성
3. CASE52~64 원고 1차 작성
4. CASE65~69 신규 Chapter 여부 확정 후 원고 작성
5. CASE70~82 원고 1차 작성
6. 전체 82 CASE 문체·표현·Evidence 통일
7. CASE INDEX / REFERENCES / Source Note 확장
8. Figure/Table/QR register 완성
9. 레이아웃 및 페이지 번호 확정
10. Web↔Book Mapping 활성화
11. Book Reader 갱신
12. 82 CASE 최종 Preflight

## 9. 이번 Branch에서 하지 않는 것

- Production 홈페이지 변경
- CASE42~82 성과등급 변경
- 기존 CASE URL 변경
- CASE42~82 Book 링크 선활성화
- 최종 페이지 번호 임의 생성
- Print Master 직접 변경

다음 승인 Gate: **1차 Chapter 배치안 + Editorial Audit 승인**.
