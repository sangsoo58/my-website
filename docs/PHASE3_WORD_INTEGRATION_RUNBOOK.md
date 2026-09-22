# PHASE 3 — Expanded Edition Word Integration Runbook

Status: **READY TO EXECUTE AFTER USER AUTHORIZATION / CURRENT MASTER READ-ONLY**

## 0. Entry conditions

Do not start actual Word integration until:
- user approves the Expanded TOC
- user approves the Figure/Table strategy
- user accepts the target page range
- user authorizes a separate Expanded Edition Word working copy
- remaining print-permission checks for selected assets are ready for controlled integration

CASE50 does not block creation of the working copy because it is explicitly excluded, but it must not appear as a placeholder.

## 1. Create isolated working copy

Baseline:
- Editable Word Master v1.7 = READ ONLY
- Print Master 159p = READ ONLY

Create:
- Expanded Edition Word working copy
- separate version identifier
- separate output path
- no overwrite of current Master

At creation, record:
- baseline filename
- baseline checksum/version
- working-copy filename
- creation date
- source branch / manifest revision

## 2. Freeze editorial inputs

Use only the approved/current Phase 3 planning artifacts:
- Final Pre-Word Acceptance Matrix
- Active Manuscript Package Manifest
- Expanded Edition TOC
- Chapter Renumbering Register
- Figure/Table Source Register
- Caption/Table Register
- User Approval Packet
- Book Print Permission Review
- CASE Index draft
- REFERENCES draft

Do not source new FACT from Production HTML during Word integration.

## 3. Apply structural TOC changes

If approved:
- insert new Chapter 15: 보일러 시스템 운전최적화
- renumber current Chapter 15~28 to 16~29
- keep Chapter 1~14 unchanged
- keep CASE IDs unchanged

Do not mass-replace Chapter numbers blindly.
Review each cross-reference in context.

## 4. Integrate Chapter 11

Insert:
CASE53, CASE55, CASE56, CASE57, CASE58, CASE60, CASE62, CASE63, CASE64, CASE78

Rules:
- preserve current CASE09/10 umbrella role
- avoid repeating common Chiller Plant background
- prefer CASE53/64 as Fact Box/Table presentation
- preserve CASE60 Null Result
- do not attribute CASE64 program-level 27% to one staging action

## 5. Integrate Chapter 12

Insert:
CASE42, CASE43, CASE44, CASE45

Rules:
- keep CASE11~14 as umbrella/current-book anchors
- remove duplicated project totals/tables
- CASE42~45 add distinct analytical questions only
- CASE44-F01 primary; CASE44-F02 optional

## 6. Integrate Chapter 14

Insert:
CASE52, CASE54, CASE59, CASE61

Rules:
- separate compressor unit efficiency, staging, header pressure and demand pattern
- do not convert expected improvement into verified saving

## 7. Build new Chapter 15

Insert:
CASE65, CASE66, CASE67, CASE68, CASE69

Chapter logic:
Selection → Staging/Loading → Combustion → Data Quality → Steam Pressure

Rules:
- N㎥/ton notation
- CASE65 verified field result remains CASE65 only
- CASE66 threshold stays site-specific
- CASE67 correlation is not causality
- CASE68 abnormal meter data cannot produce saving
- CASE69 remains optimization direction unless final verified result exists

## 8. Integrate Chapter 20

Insert:
CASE75, CASE76 under CASE28 umbrella

Rules:
- do not repeat or reassign CASE28 proposal target 2% / 4.6억원·년
- distinguish Benchmark Gap from saving
- maintain generation-load normalization

## 9. Integrate Chapter 23

Insert:
CASE48, CASE49, CASE51

Exclude:
CASE50

Rules:
- Simulation ≠ Actual Saving
- preserve cost-vs-energy distinction in CASE51
- no CASE50 placeholder page, reference, figure or active index page

## 10. Integrate Chapter 24

Insert:
CASE46, CASE47, CASE70, CASE71, CASE72, CASE73, CASE74, CASE77, CASE79, CASE80, CASE81, CASE82

Rules:
- CASE38/39 remain umbrella stories
- CASE70 cross-reference CASE46 PUE values rather than repeat them
- CASE74 cross-reference CASE47 proposal metrics
- CASE82 contract-power scenario remains Cost Saving, not Energy Saving

## 11. Figure/Table integration

Primary Figures:
CASE42-F01, CASE43-F01, CASE44-F01, CASE51-F01, CASE56-F01, CASE63-F01, CASE65-F01

Optional:
CASE44-F02

Table/Fact Box:
CASE53, CASE64, CASE66

Before insertion:
- print permission confirmed
- anonymization checked
- caption/unit verified
- grayscale/CMYK readability checked
- final width/readability checked

## 11A. Table / Fact Box integration

Use:
- `docs/PHASE3_TABLE_FACTBOX_SELECTION_PLAN.md`

Base plan:
- full/compact tables: 11
- optional table: 1 (CASE78)
- inline Fact Boxes/checklists: about 9~12

Priority controls:
- do not duplicate current-book Project-level KPI tables
- CASE42~45 rely primarily on Figures/Cross-reference
- CASE65 uses Figure; CASE66 uses the main Boiler operating-combination table
- CASE49 holds the main Parametric Summary Table; CASE50 has no separate table by default
- CASE82 gets a Cost Scenario Table with Cost-vs-Energy Boundary explicit

If total pages exceed 220p, remove optional/secondary tables before weakening technical content.

## 12. Publication-text cleanup

Remove internal labels from final body:
- PHASE 3
- ROUND 2
- USER REVIEW
- FINAL-LOCK
- SOURCE RECOVERY
- QA
- editorial-only path/file metadata

Keep publication-safe:
- CASE heading
- CHAPTER LENS
- Evidence wording where educationally relevant
- Source Note
- Figure/Table caption
- Consultant's Point / CASE LESSON / PRACTICE

## 13. Rebuild index and references

CASE INDEX:
- CASE01~82 stable IDs
- CASE50 excluded from active publication until reconciliation
- final page numbers added only after pagination

REFERENCES:
- public anonymized provenance
- no internal file paths or approval workflow metadata
- title 1:1 with body/index

## 14. Cross-reference QA

After structural insertion:
- search Chapter 15~29 references
- context-check all shifted Chapter numbers
- search all “p.” / page references
- remove old current-edition page references
- regenerate final cross-references only after pagination

## 15. Pagination control

Target:
- preferred 214~220p

If >220p:
1. remove repeated project background
2. tighten companion cases
3. convert eligible raster cards to Tables/Fact Boxes
4. omit CASE44-F02
5. consolidate common M&V text into Chapter 29 references

Do not weaken Evidence Boundary merely to save space.

## 16. Word QA

Required:
- styles preserved
- headings and numbering consistent
- no orphan heading
- no broken table
- no low-resolution pasted asset
- no accidental font substitution
- no hidden internal labels
- no CASE50 placeholder
- body/index/references title alignment

## 17. PDF candidate / preflight

After Word candidate passes:
- export Expanded Edition PDF candidate
- technical preflight
- font embedding
- image resolution
- page size
- vector/raster quality
- table/figure clipping
- grayscale/CMYK readability
- bookmarks/TOC if applicable
- full visual page review

## 18. Final fidelity gate

Before Final Book Manuscript Lock:
- source-fidelity differences = 0 critical
- numeric/unit differences = 0 critical
- Potential→Actual = 0
- Simulation→Actual = 0
- program-level→single-action attribution = 0
- same-project double-count = 0
- CASE50 unresolved content absent
- selected Figures permission cleared

## 19. Release protection

Only after final user approval:
- create final Print Master
- create final Editable Word Master
- record final page map
- update CASE INDEX and REFERENCES page numbers
- prepare Expanded Edition Web↔Book mapping
- activate Book links in a controlled release

Current Production and current 159p book remain untouched until then.
