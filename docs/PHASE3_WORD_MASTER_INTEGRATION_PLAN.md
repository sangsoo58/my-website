# PHASE 3 — Word Master Integration Plan

Status: **PLANNING ONLY / CURRENT WORD MASTER NOT MODIFIED**

Target baseline:
- current Editable Word Master v1.7
- current 159p Print Master
- Expanded Edition candidate: CASE01~82

## 1. Integration method

Do not paste 41 CASE files sequentially into the end of the book.

Instead:
1. duplicate the current Editable Word Master into an Expanded Edition working copy
2. insert each CASE into its proposed Chapter
3. merge Umbrella/Companion cases without repeating the same project narrative
4. add the new Boiler chapter only after TOC approval
5. regenerate automatic TOC and all page references
6. rebuild CASE INDEX and REFERENCES
7. perform full 82-CASE fidelity/preflight

## 2. Insertion order

### Chapter 11
Insert:
CASE53, 55, 56, 57, 58, 60, 62, 63, 64, 78

### Chapter 12
Integrate companions:
CASE42↔CASE11
CASE43↔CASE12
CASE44↔CASE13
CASE45↔CASE14

Do not repeat the same Project-level totals in both Umbrella and Companion.

### Chapter 14
Insert:
CASE52, 54, 59, 61

### Proposed new Chapter 15
Insert:
CASE65~69

### Proposed Chapter 20
Insert:
CASE75, 76 as detailed sub-cases under the existing power-plant story

### Proposed Chapter 23
Insert:
CASE48, 49, 51
CASE50 remains HOLD

### Proposed Chapter 24
Integrate:
CASE46,47,70~74,77,79~82
with existing CASE38/39 as Umbrella stories

## 3. Style mapping

Use current book styles:
- CHAPTER title
- CHAPTER LENS
- CASE heading
- DEEP DIVE / 응용사례 label
- KPI / diagnostic logic
- IMPLEMENTATION
- M&V
- ENGINEER'S NOTE / CASE LESSON / PRACTICE
- Figure caption
- Chapter Synthesis
- Chapter Review

Do not carry internal labels such as:
- ROUND 2
- USER REVIEW
- FINAL-LOCK
- QA
- SOURCE RECOVERY
into the publication body.

## 4. Figure placement candidate

Primary Figure set:
- CASE42-F01
- CASE43-F01
- CASE44-F01
- CASE51-F01
- CASE56-F01
- CASE63-F01
- CASE65-F01

Optional:
- CASE44-F02

Prefer Table/Fact Box instead of raster figure:
- CASE53
- CASE64
- CASE66

## 5. Cross-reference handling

If Boiler becomes Chapter 15:
- existing Chapter15~28 → +1
- all “see Chapter xx” references must be context-checked
- page references are invalid until final pagination
- CASE IDs remain unchanged

## 6. Source note model

For every new CASE:
- public text: concise anonymized Source Note
- editorial register: exact approved source filename/path
- figure/table register: exact source and Evidence class
- final REFERENCES: C42~C82 1:1

CASE77~81 official filenames are confirmed as `case77_approval_final.txt` ~ `case81_approval_final.txt`; direct Approval Final TXT content-byte comparison must be completed before final provenance/fidelity lock.

## 7. First Expanded Word Candidate acceptance criteria

- Active integration set present: CASE42~49 and CASE51~82 = 40/40
- CASE50 is excluded from integration while HOLD; no placeholder page is allowed
- no duplicate Project-level result counting
- no Potential→Actual strengthening
- no Simulation→Actual strengthening
- no broken Figure
- no unresolved internal labels
- no orphan chapter/page references
- CASE INDEX / REFERENCES / body title 1:1
- current 159p baseline remains separately archived
