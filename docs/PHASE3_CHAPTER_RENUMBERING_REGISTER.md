# PHASE 3 — Expanded Edition Chapter Renumbering & Cross-reference Register

Status: **PROPOSED CROSS-REFERENCE MAP / USER CONFIRMATION PENDING**

신규 Chapter 15 「보일러 시스템 운전최적화」 삽입안이 승인될 경우 기존 Chapter 15~28은 Expanded Edition에서 +1 이동한다.

| Current Edition | Expanded Edition | Title |
|---:|---:|---|
| 1~14 | 1~14 | 동일 |
| 15 | 16 | 화학공장 통합 Utility |
| 16 | 17 | 철강산업 에너지최적화 |
| 17 | 18 | 비철금속·2차전지 원료 산업 |
| 18 | 19 | 상하수도 대형 펌프시스템 |
| 19 | 20 | 발전소 보조기기 |
| 20 | 21 | 기존 대형건물 에너지진단 |
| 21 | 22 | BEMS와 Continuous Commissioning |
| 22 | 23 | 신축건물 Energy Modeling |
| 23 | 24 | 데이터센터 PUE와 냉방 최적화 |
| 24 | 25 | 지역난방 운전최적화 |
| 25 | 26 | MES와 EMS 데이터를 연결하는 방법 |
| 26 | 27 | 에너지 예측 모델 구축 |
| 27 | 28 | 데이터 기반 이상 진단과 운전 추천 |
| 28 | 29 | 에너지절감 M&V의 실제 |

## 승인 후 반드시 수정할 Cross-reference 유형

Expanded Edition Word Master 통합 시 아래 문자열을 단순 일괄치환하지 않고 문맥별 확인한다.

- “Chapter 15” → 대부분 Chapter 16
- “Chapter 16” → 대부분 Chapter 17
- …
- “Chapter 28” → Chapter 29
- 기존 “Chapter 19 발전소 보조기기” → Chapter 20
- 기존 “Chapter 22 신축건물 Energy Modeling” → Chapter 23
- 기존 “Chapter 23 데이터센터 PUE와 냉방 최적화” → Chapter 24
- 기존 “Chapter 24 지역난방” → Chapter 25

## 주의

CASE 번호는 절대 이동하지 않는다.

예:
- CASE28은 그대로 CASE28이며 Expanded Chapter 20에 위치한다.
- CASE35~37은 그대로 CASE35~37이며 Expanded Chapter 23에 위치한다.
- CASE38~39는 그대로 CASE38~39이며 Expanded Chapter 24에 위치한다.
- CASE40~41은 그대로 CASE40~41이며 Expanded Chapter 25에 위치한다.

## Page Reference

현재 책의 “p. xx” 내부 참조는 Expanded Edition 조판 후 모두 다시 계산한다. 기존 페이지 번호를 새 책에 재사용하지 않는다.

## TERM NOTE 예시

Current Edition에 존재하는 “VFD·FDF·IDF는 Chapter 19 첫 설명 위치” 같은 문구는 Expanded Edition에서 Chapter 20으로 변경되어야 한다.

## QA

최종 Word/PDF 생성 후:
1. Chapter 15~29 문자열 검색
2. p. 내부참조 전수검색
3. CASE Index와 본문 Chapter 대조
4. REFERENCES의 CASE 번호 대조
5. Book Reader의 Expanded Edition Page Map 대조
를 수행한다.
