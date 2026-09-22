# PHASE 3 — Figure/Table Source QA

Status: **SOURCE LINK ROUND 1 COMPLETE / BOOK USE REVIEW PENDING**

## 1. Approved Web Asset Inventory

Production의 `assets/case42-81-final/`에서 승인 PNG **11개**를 확인했다.

- CASE42: 1
- CASE43: 1
- CASE44: 2
- CASE51: 1
- CASE53: 1
- CASE56: 1
- CASE63: 1
- CASE64: 1
- CASE65: 1
- CASE66: 1

그 외 CASE42~81에는 이 승인 Asset 폴더 기준 별도 PNG가 없다.  
따라서 해당 CASE는 기본값을 **NO VISUAL**로 두며 Source 없는 신규 Chart를 만들지 않는다.

## 2. Pixel Dimension QA

승인 PNG는 다음 두 계열이다.

- 1510 × 936 px
- 1511 × 852 px

300 dpi 기준 최대 인쇄폭:
- 1510 px → 약 **127.8 mm**
- 1511 px → 약 **127.9 mm**

따라서 Expanded Edition의 실제 본문 그림폭이 약 128 mm 이하라면 300 dpi 수준으로 사용 가능하다.  
더 크게 배치할 경우 원본 데이터에서 재출력하는 것을 우선한다.

## 3. Source Master Link

CASE42~76:
- `CASE42_76_SOURCE_RECOVERY_REGISTER.xlsx`에서 **35/35 Approved Final Source recovered**
- CASE51은 REV02 승인본 사용
- Figure/Table Register에 해당 `02_BOOK_SOURCE/CASEXX_APPROVED_FINAL*.txt`를 Source Master로 연결

CASE77~81:
- 기존 BOOK SOURCE GATE에서 **5/5 PASS**
- 실제 source 존재는 확인되었으나 현재 recovery snippet에서 개별 정확한 파일명이 노출되지 않아 Register에는 Source Gate PASS 상태로 기록
- Word Master 통합 전 정확한 filename/path 재확인 필요

CASE82:
- CASE82는 기존 42~81 Source Recovery 묶음 밖에 있으므로 Production의 restored locked data와 QA를 Source로 사용
- 계약전력 20,000 kW → 검토안 12,000 kW, 167백만원/년은 Cost Scenario로 유지

## 4. Figure Caption / Evidence Control

확인된 실제 자산은 다음 의미로만 사용한다.

- CASE42: CDA 원단위 전·후
- CASE43: Actual vs Required Chiller Units
- CASE44: LT Chiller UPI / CDA UPI
- CASE51: Appendix G Baseline Rotation
- CASE53: 대표 Chiller 운전조건
- CASE56: Change-over Field Test
- CASE63: Chiller kW/RT + Load Factor
- CASE64: Required vs Actual Units
- CASE65: Boiler N㎥/ton
- CASE66: Boiler Operating Combination

Web Asset가 존재한다고 해서 Print 사용권한이 자동 확정되는 것은 아니다.  
최종 출판 전 **BOOK_PRINT_PERMISSION_REVIEW**를 통과해야 한다.

## 5. Table Rule

Table은 approved final source의 숫자를 사용해 재작성할 수 있지만 다음 조건을 적용한다.

- 수치·단위 재대조
- Potential / Actual / Simulation / Target 구분 유지
- Same-project Companion CASE는 현재 책의 동일 Table을 중복하지 않음
- 필요하면 Umbrella CASE를 Cross-reference
- Source 없는 계산값은 DERIVED VALUE로 별도 표시

## 6. NO VISUAL Rule

Approved source-backed visual이 없는 CASE에는 다음을 만들지 않는다.

- 장식용 Concept Diagram
- Placeholder Chart
- Text Graph
- Source 없는 Before/After
- Source 없는 AI Diagram

NO VISUAL은 정상적인 편집결정이다.

## 7. Next Gate

Word Master integration 전에:
1. CASE77~81 exact Source filename/path 확정
2. 11개 PNG의 Book Print permission 확인
3. Figure별 caption·unit·evidence 최종 검증
4. Table 수치 Source line 대조
5. CASE50 Source Reconciliation
6. 최종 Figure/Table 번호는 조판 구조 확정 후 부여


## 8. CASE77~81 Exact-path Retrieval Result

Result: **SOURCE EXISTENCE PASS / EXACT PATH UNRESOLVED**

Library retrieval confirms:
- CASE77~81 Source = **5/5 PASS**
- TOTAL CASE01~81 Book Source Gate = **81/81 PASS**
- Source Gap = **0**

However, title-only and exact filename searches do not expose the individual CASE77~81 source files as separate Library records. Therefore the register does **not** invent filenames such as CASE77_APPROVED_FINAL.txt.

Editorial handling:
- FACT/Evidence already locked in Production CASE77~81 may be used as review context.
- Exact Book Source filename/path remains pending.
- Word Master integration for CASE77~81 must retain a source-path HOLD until the exact source file identity is recovered from the Book Source package.
