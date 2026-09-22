# PHASE 3 — Selected Table Source QA

Status: **PLANNING TABLE SOURCE QA PASS / FINAL PAGE RECHECK PENDING**

## Scope

Base table/fact-box plan: 11 items.

These items are the source-verified print candidates from:
- PHASE3_TABLE_FACTBOX_SELECTION_PLAN.md
- PHASE3_FIGURE_TABLE_SOURCE_REGISTER.csv
- CASE manuscript Fidelity QA

## Selected table candidates

| Chapter | CASE | Table | Use | Source status | Planning QA | Final page recheck |
|---|---|---|---|---|---|---|
| Ch11 | CASE53 | CASE53-T01 | Fact Box | DIRECT_BOOK_MASTER_PRELIMINARY_PASS | PASS | PENDING |
| Ch11 | CASE56 | CASE56-T01 | Compact Test Table | DIRECT_BOOK_MASTER_PRELIMINARY_PASS | PASS | PENDING |
| Ch11 | CASE63 | CASE63-T01 | Compact Comparison Table | DIRECT_BOOK_MASTER_PRELIMINARY_PASS | PASS | PENDING |
| Ch11 | CASE64 | CASE64-T01 | Fact Box | DIRECT_BOOK_MASTER_PRELIMINARY_PASS | PASS | PENDING |
| Ch14 | CASE54 | CASE54-T01 | Compact Action Table | DIRECT_BOOK_MASTER_PRELIMINARY_PASS | PASS | PENDING |
| Ch15 | CASE66 | CASE66-T01 | Primary Operating Combination Table | DIRECT_BOOK_MASTER_PRELIMINARY_PASS | PASS | PENDING |
| Ch20 | CASE75 | CASE75-T01 | Benchmark Table | DIRECT_BOOK_MASTER_PRELIMINARY_PASS | PASS | PENDING |
| Ch20 | CASE76 | CASE76-T01 | Equipment Configuration Table | DIRECT_BOOK_MASTER_PRELIMINARY_PASS | PASS | PENDING |
| Ch23 | CASE49 | CASE49-T01 | Parametric Summary Table | FINAL_SOURCE_FIDELITY_PASS | PASS | PENDING |
| Ch24 | CASE79 | CASE79-T01 | Actual vs Required Units Table | FINAL_SOURCE_FIDELITY_PASS | PASS | PENDING |
| Ch24 | CASE82 | CASE82-T01 | Cost Scenario Table | FINAL_SOURCE_FIDELITY_PASS | PASS | PENDING |

## Evidence basis

- CASE49, CASE79, CASE82: Final source/locked-source Fidelity PASS.
- CASE53,54,56,63,64,66,75,76: readable BOOK MASTER directly compared to manuscript.
- In CASE52~76 full review, manuscript numeric tokens missing from BOOK MASTER = 0.
- Evidence Boundary / performance classification remained aligned.

## Rules

Planning PASS means:
- selected table values may be drafted from the approved manuscript/source set;
- no unsupported number may be added;
- original unit direction must be preserved;
- Potential / Simulation / Program-level / Cost Scenario classification must remain visible.

Planning PASS does **not** replace the final page-level source check after Word pagination.

## Case-specific cautions

- CASE53: operating-condition Fact Box, not a savings table.
- CASE56: separate #10→#9 and #4→#3 Field Test results; do not attribute 27% program result to the two switch tests.
- CASE63: keep kW/RT together with load factor.
- CASE64: distinguish required 6, actual 8, implemented 8→7, and program-level 27%.
- CASE54: Improvement Potential, not verified saving.
- CASE66: Test Plan / operating-combination table; do not reuse CASE65 5% / 1.8억원 as CASE66 result.
- CASE75: benchmark gap is diagnostic, not saving.
- CASE76: equipment count/configuration table; no independent saving.
- CASE49: Simulation deltas only.
- CASE79: operating diagnosis / Actual vs Required Units; no independent final saving.
- CASE82: 167백만원/년 is expected Cost Saving Scenario, not kWh Energy Saving.

## Result

Base selected table/fact-box Source QA: **11/11 PASS**.

Optional CASE78 table remains layout-dependent and should be reviewed separately if activated.
