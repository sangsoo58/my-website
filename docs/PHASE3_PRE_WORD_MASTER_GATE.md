# PHASE 3 — Pre-Word-Master Integration Gate

Status: **PARTIAL PASS / 1 CONTENT HOLD + 5 SOURCE-PATH HOLDS**

## 1. Coverage

- CASE42~82 manuscript draft: **41/41**
- Evidence register: **41/41**
- Chapter placement proposal: **41/41**
- Book-style chapter integration draft: **41/41**
- Approved Web PNG inventory: **11 assets**
- Figure selection candidate: complete

## 2. Source readiness

### Green — Approved Final Source recovered
**35 CASE / 41**
- CASE42~76
- CASE51 uses REV02 approved final

### Amber — Official source filenames confirmed; source text content not directly retrieved
**5 CASE / 41**
- CASE77 → `case77_approval_final.txt`
- CASE78 → `case78_approval_final.txt`
- CASE79 → `case79_approval_final.txt`
- CASE80 → `case80_approval_final.txt`
- CASE81 → `case81_approval_final.txt`

These 5 are not treated as Source Gap. Existing Book Source Gate reports 5/5 PASS and total CASE01~81 Source Gap = 0. The unresolved item is now narrowed to **content-byte fidelity verification**, not filename identity.

### Blue — Production locked-data / QA source
**1 CASE / 41**
- CASE82

CASE82 was added after the CASE01~81 Book Source Master gate. Its locked public data and QA are the current source basis.

## 3. Content hold

### CASE50 — HOLD
Reason:
- visible title/body = large-office WWR / glazing simulation
- JSON-LD + legacy boundary = childcare Passive House
- approved source existence is confirmed but the original source bytes are not currently exposed for direct comparison

Until reconciled:
- do not integrate CASE50 into the actual Word Master
- do not assign page
- do not activate Book mapping
- do not create Figure
- do not rewrite Production metadata by inference

## 4. Ready set for layout prototyping

For **layout/template prototyping only**, CASE42~49 and CASE51~82 may be used, subject to:
- no final page assignment
- no final Book mapping activation
- CASE77~81 provenance path remains amber
- user confirmation still required

CASE50 is excluded from layout prototype content.

## 5. Word integration blockers

Critical blockers before final Editable Word integration:
1. CASE50 Approval Final TXT content recovery and Source reconciliation
2. CASE77~81 Approval Final TXT content fidelity verification
3. user confirmation of Expanded Edition TOC / Chapter 15 Boiler insertion
4. user confirmation of final Figure selection
5. Book Print permission/anonymization check for selected PNG assets

## 6. Non-blocking work that may continue

The following can proceed without modifying the current 159p book:
- chapter text de-duplication
- Figure/Table caption drafting
- CASE INDEX / REFERENCES synchronization
- cross-reference renumbering plan
- final manuscript package manifest
- Word insertion order and style mapping
- page-budget estimation

## 7. Protection

- current 159p Print Master: unchanged
- current Editable Word Master: unchanged
- current 41-CASE Book Reader: unchanged
- Production Web: unchanged
- CASE42~82 Book links: hidden


## 8. Latest planning integrity QA

Status: **PLANNING INTEGRITY PASS / INTEGRATION STILL BLOCKED**

Latest verified state:
- manuscript drafts: 41/41
- active revision candidates: 40
- excluded Source HOLD: CASE50
- active Chapter map: 40/40 unique / duplicate 0 / missing 0
- Figure/Table active register: 40 CASE
- approved Web PNG assets: 11/11 accounted for
- Figure plan: 7 primary + 1 optional + 3 Table/Callout preferred
- editorialType mismatch: 0
- evidenceClass mismatch: 0

Still blocking actual Editable Word integration:
1. CASE50 source reconciliation
2. CASE77~81 direct Approval Final TXT fidelity comparison
3. user confirmation of proposed Expanded Edition TOC
4. user confirmation of final Figure selection
5. Book Print permission/anonymization review for selected assets

Therefore the current Editable Word Master and 159p Print Master remain unchanged.


## 9. Publication provenance gate

Status: **PASS FOR PLANNING / FINAL FIDELITY NOT WAIVED**

- Active CASE Web URL QA: 40/40 PASS
- Active CASE publication Source Note: 40/40 PASS
- REFERENCES public provenance wording: 40/40 PASS
- internal source path leakage: 0
- CASE50: excluded / HOLD

This gate only confirms publication-safe provenance wording. Actual Word Master integration remains blocked by source fidelity and user approval gates.


## 10. Pre-Word Fidelity Matrix linkage

Status: **MATRIX READY / FINAL STANDALONE FILE QA PENDING**

New matrix artifacts:
- `docs/PHASE3_PRE_WORD_FIDELITY_MATRIX.md`
- `data/phase3-pre-word-fidelity-matrix.json`

CASE42~76 summary:
- Approved Final source recovery: 35/35
- active revision candidates in range: 34
- CASE50: Source HOLD
- active title QA: 34/34 PASS
- active Numeric/Unit QA: 34/34 Preliminary PASS
- active Evidence QA: 34/34 Preliminary PASS
- active Boundary QA: 34/34 PASS with case-specific boundary
- claim strengthening violation identified: 0
- final standalone official TXT byte QA: pending

CASE77~81:
- Direct approved Source Master comparison: Preliminary PASS 5/5
- standalone official Approval Final file byte identity: pending

This keeps the project at PRE_WORD_MASTER_PARTIAL_PASS. Actual Word integration is still blocked by the remaining source/user gates.


## 11. Final Pre-Word Acceptance Matrix

Artifacts:
- `docs/PHASE3_FINAL_PRE_WORD_ACCEPTANCE_MATRIX.md`
- `data/phase3-final-pre-word-acceptance-matrix.json`

Aggregate status:
- Active CASE: 40
- Pre-Word acceptance: 40/40
- Chapter mapping: 40/40 PASS
- Title / Web path / Source Note: 40/40 PASS
- Numeric/Unit preliminary QA: 40/40
- Evidence preliminary QA: 40/40
- Boundary QA: 40/40
- claim-strengthening violations: 0

Remaining four gates:
1. strict standalone source-byte identity confirmation where required
2. CASE50 source reconciliation
3. user approval of Expanded TOC + final Figure selection/print permission
4. authorization to create/modify the Expanded Edition Word working copy

Therefore status = **PRE-WORD PACKAGE READY**, not FINAL BOOK MANUSCRIPT LOCKED.
