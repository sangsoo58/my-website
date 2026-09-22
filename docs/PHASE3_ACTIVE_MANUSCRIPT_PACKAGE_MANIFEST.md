# PHASE 3 — Active Manuscript Package Manifest

Status: **PLANNING PACKAGE READY / USER CONFIRMATION + SOURCE FIDELITY GATES PENDING**

## 1. Package scope

- Manuscript drafts: 41
- Active revision candidates: 40
- Source HOLD excluded: CASE50
- CASE ID range remains CASE01~CASE82
- Current Print Master / Editable Word Master / Book Reader / Production Web: unchanged

## 2. Active insertion map

### Chapter 11 — 냉동기 Plant 최적화
CASE53, CASE55, CASE56, CASE57, CASE58, CASE60, CASE62, CASE63, CASE64, CASE78

### Chapter 12 — 반도체 Multi-Utility 통합 최적화
CASE42, CASE43, CASE44, CASE45

### Chapter 14 — 공기압축기 시스템 운전최적화
CASE52, CASE54, CASE59, CASE61

### Proposed Chapter 15 — 보일러 시스템 운전최적화
CASE65, CASE66, CASE67, CASE68, CASE69

### Proposed Chapter 20 — 발전소 보조기기
CASE75, CASE76

### Proposed Chapter 23 — 신축건물 Energy Modeling
CASE48, CASE49, CASE51

### Proposed Chapter 24 — 데이터센터 PUE와 냉방 최적화
CASE46, CASE47, CASE70, CASE71, CASE72, CASE73, CASE74, CASE77, CASE79, CASE80, CASE81, CASE82

## 3. Package integrity

- Active CASE mapped: 40/40
- Duplicate CASE ID: 0
- Missing active CASE ID: 0
- Extra CASE ID: 0
- CASE50 active placement: 0

## 4. Publication-title / provenance QA

- CASE INDEX ↔ REFERENCES ↔ manuscript title: 40/40 aligned
- Canonical Web path: 40/40 PASS
- Publication Source Note: 40/40 PASS
- Internal source filename/path leakage into publication manuscript: 0
- Active REFERENCES provenance entries: 40/40 PASS
- CASE50: HOLD placeholder only; not active publication content

## 5. Evidence / duplication QA

- Potential → Actual strengthening: 0 identified
- Simulation → Actual strengthening: 0 identified
- Proposal/Target → Verified Result strengthening: 0 identified
- Program-level result → single-action attribution: 0 identified
- Same-project project-level result double-count: 0 identified
- Contract-power cost scenario → kWh saving confusion: 0 identified

## 6. Figure / Table package

Approved Web PNG assets: 11

Primary:
- CASE42-F01
- CASE43-F01
- CASE44-F01
- CASE51-F01
- CASE56-F01
- CASE63-F01
- CASE65-F01

Optional:
- CASE44-F02

Table / Fact Box preferred:
- CASE53-F01
- CASE64-F01
- CASE66-F01

Current status:
- Figure/Table Register active CASE count: 40
- CASE50 active rows: 0
- editorialType mismatch: 0
- evidenceClass mismatch: 0
- CSV structural error: 0
- Final Figure selection: USER CONFIRMATION PENDING
- Book print permission: PENDING

## 7. Page budget

- Compact: 211~215p
- Base recommended: 214~220p
- Expanded: 221~226p

Current editorial target: **214~220p**

## 8. Source fidelity status

- CASE42~76: Approved Final Source recovered; direct final manuscript fidelity still governed by Approval Final TXT comparison
- CASE77~81: standalone Approval Final TXT directly reviewed; **Final Fidelity PASS 5/5**
- CASE82: Production locked data + QA source basis
- CASE50: Source identity resolved by direct Approval Final TXT; book inclusion remains USER DECISION PENDING and is excluded until that decision

## 9. Blocking gates before actual Word integration

1. CASE50 book inclusion decision after source reconciliation
3. User confirmation of proposed Expanded Edition TOC
4. User confirmation of final Figure selection
5. Book print permission/anonymization review
6. Authorization to create and modify an Expanded Edition Word working copy

## 10. Protection

This manifest is planning metadata only.

Do not:
- modify current Editable Word Master
- modify current Print Master
- modify Production Web
- activate CASE42~82 Book links
- assign final pages
- activate final Web↔Book mapping

until the required gates are cleared.


## 11. Pre-Word fidelity matrix

Artifacts:
- `docs/PHASE3_PRE_WORD_FIDELITY_MATRIX.md`
- `data/phase3-pre-word-fidelity-matrix.json`

Current source/manuscript QA summary:
- CASE42~76 Approved Final source recovered: 35/35
- CASE42~76 active Preliminary Fidelity: 34/34
- CASE50: HOLD
- CASE77~81 direct Source Master Preliminary Fidelity: 5/5
- claim strengthening identified across active reviewed set: 0
- standalone official TXT byte-identity confirmation: pending


## 12. Final Pre-Word acceptance

Status: **40/40 PRE-WORD ACCEPT**

See:
- `docs/PHASE3_FINAL_PRE_WORD_ACCEPTANCE_MATRIX.md`
- `data/phase3-final-pre-word-acceptance-matrix.json`

Remaining blockers are intentionally compressed to four gates:
- strict source-byte identity
- CASE50 book inclusion decision after source reconciliation
- user TOC/Figure approval + print permission
- Word working-copy authorization


## 13. User approval / print review packet

Ready for decision:
- `docs/PHASE3_USER_APPROVAL_PACKET.md`
- `data/phase3-user-approval-packet.json`

Print permission review:
- `docs/PHASE3_BOOK_PRINT_PERMISSION_REVIEW.md`
- `data/phase3-book-print-permission-review.json`

Current Figure assets remain HOLD for print until permission, anonymization, source/unit/caption and final-layout readability reviews are completed.


## 14. Post-approval execution package

Recommendation:
- `docs/PHASE3_RECOMMENDED_APPROVAL_RESOLUTION.md`

Execution runbook:
- `docs/PHASE3_WORD_INTEGRATION_RUNBOOK.md`

Status: **READY BUT NOT AUTHORIZED**


## 15. Consolidated Fidelity status

- Active Final Fidelity PASS: **15/40**
  - CASE42~49, CASE51, CASE77~81
- Active Direct BOOK MASTER Preliminary PASS: **25/40** — CASE52~76
- CASE82 locked-data source regime: **Final Fidelity PASS**
- CASE50: standalone source/content fidelity resolved; book inclusion USER DECISION PENDING

No known claim-strengthening conflict is open in the active package.


## 16. Resume checkpoint

Source accessibility:
- `docs/PHASE3_STANDALONE_SOURCE_ACCESSIBILITY_REGISTER.md`

Pause/resume state:
- `docs/PHASE3_PAUSE_RESUME_CHECKPOINT_2026-09-22.md`

Use the checkpoint as the next-session starting point. Do not repeat completed QA unless a source or user decision changes.


### CASE52~76 direct BOOK MASTER
- title: 25/25 aligned
- Evidence/Boundary: 25/25 aligned
- numeric-token missing from Master: 0
- Final standalone TXT gate remains pending only due current text-reader accessibility


### CASE82 locked-source final
- Production locked data + restored QA directly compared
- key numeric values and Cost-vs-Energy Boundary aligned
- Final Fidelity PASS under separate CASE82 source regime
