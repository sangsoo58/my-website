# PHASE 3 — CASE42~82 Editorial Audit

이 문서는 책 원고 작성 전에 확인해야 할 정합성 항목을 기록한다.  
현재 Production CASE 본문/수치/URL은 변경하지 않는다.

## A. Evidence 상태 보호

- CASE42: B/A-C mixed — 실측·검증성과와 잠재량/예상효과 분리 필수
- CASE43~46: B/C — 분석 사실과 잠재량 구분
- CASE47: C + B baseline — 제안/예상효과를 실제 절감실적으로 표현 금지
- CASE48~51: D — Simulation/Modeling 범위
- CASE52~56,58~82: 현재 EVIDENCE-VERIFIED 상태 유지
- CASE57: EVIDENCE-PARTIAL 상태 유지

## B. Metadata / Source Review Required

| CASE | 현재 관찰 | Phase 3 조치 |
|---|---|---|
| CASE50 | 제목은 대형 오피스 빌딩, Measurement Boundary는 보육시설 Passive House 설계안 | 원자료 대조 후 제목/Boundary 관계 확인 |
| CASE65 | Boiler 제목 vs system=CDA | 원자료 대조 |
| CASE66 | Boiler 제목 vs system=냉수·펌프 | 원자료 대조 |
| CASE67 | Boiler 제목 vs system=공기압축기 | 원자료 대조 |
| CASE68 | Boiler/스팀유량 제목 vs system=냉각수·냉각탑·Fan | 원자료 대조 |
| CASE69 | Boiler/스팀압력 제목 vs system=공기압축기 | 원자료 대조 |
| CASE75 | 발전소 사례 vs sector=데이터센터 | 원자료 대조 후 sector metadata 검토 |
| CASE76 | 발전소 사례 vs sector=데이터센터 | 원자료 대조 후 sector metadata 검토 |
| CASE78 | 반도체·디스플레이 제조시설 냉각수펌프 설명 vs sector=데이터센터 | 원자료 대조 후 배치 확정 |

## C. Book Placement Review

- CASE65~69: PART 4 신규 Boiler Chapter 후보
- CASE78: PART 3 Chapter 11/12 중 원자료에 맞춰 확정
- 나머지는 `data/phase3-book-expansion-draft.json`의 1차 배치안을 검토

## D. 원고 작성 전 완료조건

각 CASE마다 아래가 확인되어야 한다.

- Source Trace 확인
- Measurement Boundary 확인
- 숫자/단위/기간 확인
- 성과 등급 확인
- 공개 가능한 표/그림 확인
- Book title과 Web title의 관계 확인
- QR 대상 URL 확인
