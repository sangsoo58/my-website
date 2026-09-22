# PHASE 3 — De-duplicated Manuscript Package Plan

Status: **DRAFT PACKAGE / CURRENT BOOK UNCHANGED**

## 목적

CASE42~82를 현재 41 CASE 책에 추가할 때 동일 프로젝트의 반복을 줄이고,
각 CASE가 서로 다른 분석질문을 갖도록 편집한다.

## Chapter 11 — 냉동기 Plant 최적화

기존 CASE09·10을 유지한다.

추가 CASE 역할:
- CASE53: 냉수 Set Point
- CASE55: Pump Sizing / Re-matching
- CASE56: Chiller Change-over Test
- CASE57: 5℃/13℃ Load Sharing
- CASE58: Condenser-water Flow Test
- CASE60: Additive Null Result
- CASE62: Condenser-water Temperature Test
- CASE63: Load Dispatch
- CASE64: Staging
- CASE78: Cooling-water Pump Benchmark

중복방지:
- CASE10의 Plant-level 총론과 신규 CASE의 개별 Action을 분리
- CASE56/63/64의 성과를 합산하지 않음
- Program-level 27%를 특정 단일 Action에 귀속하지 않음

## Chapter 12 — 반도체 Multi-Utility

기존 CASE11~14를 Umbrella/summary로 유지하고:
- CASE42 = CASE11 Expanded
- CASE43 = CASE12 Expanded
- CASE44 = CASE13 Deep Dive Companion
- CASE45 = CASE14 Expanded

중복방지:
- 동일 수치표를 두 번 싣지 않음
- 기존 CASE는 프로젝트 개요, 확장 CASE는 방법론/운전 Rule 중심
- Project-level 절감액은 대표 CASE 한 곳에서만 총괄

## Chapter 14 — 공기압축기

기존 CASE16~18 유지.
추가:
- CASE52: Loading/Unloading + Staging Test
- CASE54: Header Pressure
- CASE59: Low-efficiency Unit Diagnostics
- CASE61: Demand Pattern / Peak

중복방지:
- 기존 산업별 UPI 사례와 신규 Action 사례의 역할 분리
- Compressor total power와 specific energy를 동일 개념으로 쓰지 않음

## Proposed Chapter 15 — 보일러

신규 CASE65~69:
- CASE65 Selection
- CASE66 Staging/Loading
- CASE67 Combustion
- CASE68 Data Quality
- CASE69 Steam Pressure

중복방지:
- CASE19의 화학공장 Boiler 부분은 통합 Utility의 일부로 유지
- 신규 Chapter는 일반화된 Boiler System Methodology 중심
- CASE65의 1.8억원/년을 CASE66~69에 중복 귀속하지 않음

## Proposed Chapter 20 — 발전소 보조기기

기존 CASE28 = Umbrella
- CASE75 = Unit Benchmark Sub-case
- CASE76 = Pump/VFD Sub-case

중복방지:
- CASE28의 2%, 4.6억원/년 제안목표를 CASE75/76의 독립성과로 재사용하지 않음

## Proposed Chapter 23 — Energy Modeling

기존 CASE35~37 유지
- CASE48 = CASE36 Deep Dive Companion
- CASE49 = Parametric Study
- CASE50 = HOLD
- CASE51 = CASE35 Deep Dive Companion

중복방지:
- 동일 Simulation Project의 같은 결과표 반복 금지
- CASE35/36은 개요, CASE48/51은 Modeling detail 중심
- CASE50은 Source reconciliation 전 미포함

## Proposed Chapter 24 — Data Center

기존 CASE38/39 = Umbrella
- CASE46 = PUE root-cause + retrofit portfolio
- CASE47 = KPI→Action support
- CASE70 = Fan-only root cause
- CASE71 = EC Fan
- CASE72 = Free Cooling
- CASE73 = Tower Set Point
- CASE74 = Multi-site platform
- CASE77 = Support-facility Base Load
- CASE79 = CHW Pump Staging
- CASE80 = Chiller Staging
- CASE81 = Cooling Tower Performance
- CASE82 = Contract Power / Cost KPI

중복방지:
- CASE38/39의 PUE 수치와 목표를 세부 CASE마다 재기재하지 않음
- 각 Sub-case는 해당 설비/의사결정 질문에 집중
- CASE82는 Energy Saving Chapter 결과에 합산하지 않음

## Publication labeling

책에서는 다음 보조표기를 허용한다.
- UMBRELLA CASE
- EXPANDED CASE
- DEEP DIVE COMPANION
- SUB-CASE

단, CASE ID는 그대로 유지한다.

## Package Gate

- 중복 Project Result double-count = 0
- Potential→Actual = 0
- Simulation→Actual = 0
- Program-level→single-action attribution = 0
- unresolved Source conflict = CASE50 only


## De-duplication QA Update

Status: **PRELIMINARY PASS / CROSS-REFERENCE CONTROL APPLIED**

Applied in Chapter 24:
- CASE70 no longer repeats the CASE46 PUE 1.576 / 1.848 values; it cross-references CASE46 and focuses on Fan-only root-cause analysis.
- CASE74 no longer repeats the CASE47 proposal metrics PUE 1.77→1.70, 6.5 GWh/년, 7.53억원/년; it cross-references CASE47 and focuses on Multi-site Architecture / Data Quality / FDD / M&V.

Current control result:
- same-project project-level metric double-count: 0 identified in CASE65~82 integrated chapter review
- program-level result attributed to a single action: 0 identified
- cost-saving scenario mixed into energy-saving total: 0 identified
- CASE50 remains excluded from integration pending source reconciliation
