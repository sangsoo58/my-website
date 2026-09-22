# PHASE 3 — Editorial QA Report

Status: **ROUND 1 COMPLETE / USER REVIEW GATE**

## 1. Manuscript Coverage

- CASE42~82 manuscript files: **41 / 41**
- Missing CASE drafts: **0**
- Chapter expansion drafts:
  - Boiler System Optimization
  - Data Center PUE & Cooling Optimization

## 2. Evidence Taxonomy

Phase 3 책 원고는 Production의 포괄적 status 값만 사용하지 않고, 각 상세 CASE에 실제로 서술된 Evidence Boundary를 우선해 다음 유형으로 통일한다.

- A: Field Test / Verified Saving
- B: Field Data / Verified Finding / Program-level Result
- C: Improvement Potential / Proposal / Optimization Direction
- D: Simulation / Modeling
- Mixed: A/B/C 또는 A/C, B/C처럼 한 CASE 안에서 서로 다른 성격이 공존

성과문구는 `data/phase3-evidence-register.json`의 allowed/prohibited claim 규칙을 따른다.

## 3. 주요 Editorial Hold / Reconciliation

### CASE50
Web 본문은 대형 오피스 빌딩 창호 Parametric Simulation으로 정리되어 있으나 기존 Master metadata에 보육시설 Passive House Boundary 흔적이 남아 있다. 최종 Expanded Edition에는 원자료 확인 후 Boundary를 하나로 확정한다.

### CASE65~69
실제 CASE 본문은 Boiler System Story이나 Production system metadata 일부가 CDA/냉수/압축기/냉각탑으로 어긋나 있다. 책 원고는 본문 Evidence를 기준으로 Boiler Chapter에 배치하되 Production metadata는 별도 승인 전 수정하지 않는다.

### CASE75~76
실제 콘텐츠는 발전소 보조기기인데 Production sector metadata는 데이터센터로 되어 있다. Expanded Edition은 PART 4 발전소 Chapter에 배치한다.

### CASE78
본문은 국내 반도체·디스플레이 제조시설 5℃·13℃ 냉각수펌프 데이터 구조다. Book placement는 PART 3 냉동기 Plant Chapter로 제안 확정했으나 Production sector metadata는 별도 승인 전 유지한다.

## 4. 금지되는 성과표현

- Potential → Actual 금지
- Proposal Target → Verified Saving 금지
- Simulation → Actual Saving 금지
- Benchmark Gap → Saving Rate 금지
- Null Result에 Saving 부여 금지
- Program-level Result를 단일 CASE 조치효과로 귀속 금지
- Contract Power Cost Saving을 kWh Saving으로 표현 금지

## 5. Chapter Structure QA

현재 출간본은 Chapter 1~28 체계다. Boiler 전용 Chapter를 추가하면 Expanded Edition Chapter는 29개가 된다.

별도 `PHASE3_EXPANDED_EDITION_TOC_PROPOSAL.md`에:
- Option A: Boiler를 Chapter 15로 삽입
- Option B: Boiler를 PART 4 말미에 삽입
을 기록했다.

Chapter 번호는 승인 전 확정하지 않는다.

## 6. Index / Reference QA

Draft artifacts:
- CASE INDEX C01~C82
- REFERENCES C42~C82
- Evidence Register C42~C82

최종 조판 전:
- CASE INDEX title
- 본문 CASE title
- REFERENCES title
- Web↔Book mapping title
을 1:1 대조한다.

## 7. 다음 Round

1. Expanded Edition TOC 확정
2. CASE42~82 Deep Dive / 응용사례 등급 확정
3. 각 CASE 원고를 현재 책의 페이지 스타일로 편집
4. C42~C82 Figure/Table Source Register 작성
5. Word Master에 삽입할 원고 패키지 생성
6. 전체 82 CASE 문체·단위·성과표현 2차 QA
7. 조판 후 페이지 번호와 Web↔Book mapping 활성화

## Gate

현재 단계에서는 **Production Web과 Current 41-CASE Book Reader를 변경하지 않는다.**


## 8. Round 2 TOC Proposal Alignment

Status: **ALIGNED / USER CONFIRMATION PENDING**

- Expanded Edition proposal keeps PART 1~7.
- New Boiler chapter is proposed as Chapter 15 in PART 4.
- If the user approves this TOC, existing Chapter 15~28 move by +1 in the Expanded Edition.
- Under the current proposal, the final chapter count becomes 29.
- CASE IDs remain CASE01~CASE82 and are not renumbered.
- Current 41-CASE Book Reader remains unchanged until Expanded Edition release.
- CASE42~82 placement metadata has been synchronized to the proposed chapter numbers.
- This alignment is not a final TOC approval and does not authorize Word Master integration or Book-link activation.

## 9. Round 2 Ready State

- CASE42~82 manuscripts: 41/41
- Evidence register: 41/41
- Proposed chapter placement: 41/41
- Draft CASE INDEX C01~C82: ready
- Draft REFERENCES C42~C82: ready
- Figure/Table source register: initialized
- Book-style second edit: READY


## 10. Semantic Overlap Control

Status: PASS / CONTROL ACTIVE

The following high-confidence relationships were identified:
- CASE11 ↔ CASE42
- CASE12 ↔ CASE43
- CASE13 ↔ CASE44
- CASE14 ↔ CASE45
- CASE35 ↔ CASE51
- CASE36 ↔ CASE48
- CASE38 ↔ CASE46/70/71/72/73/81
- CASE39 ↔ CASE47/74
- CASE28 ↔ CASE75/76

Policy:
- do not delete or renumber CASE IDs
- do not present 82 CASE as 82 independent companies/sites
- same-project expanded/sub-case relationships must be disclosed
- project-level results must not be double-counted across sub-cases
- umbrella CASE text must not be duplicated verbatim in companion CASEs

## 11. Current Book Baseline Protection

Status: PASS

- Current Print Master: unchanged
- Current Editable Word Master: unchanged
- Current 41-CASE Book Reader: unchanged
- Production Web: unchanged by Phase 3 branch
- CASE42~82 book links: remain hidden
- All Phase 3 artifacts are BOOK REVISION CANDIDATES only
- User confirmation is required before actual book integration or mapping activation


## 12. CASE65~82 Preliminary Evidence QA

Status: **PRELIMINARY PASS / FINAL FIDELITY PENDING**

Scope:
- CASE65~82 individual manuscripts
- Chapter 11 / 15 / 20 / 24 integrated drafts
- Evidence Register and overlap-control rules

Checks completed:
- Chapter placement metadata: 18/18 aligned with current proposed TOC
- Evidence Boundary section present: 18/18
- Potential / Proposal / Scenario values promoted to verified saving: none found
- Benchmark gap promoted to saving rate: none found
- Null/diagnostic result given artificial saving: none found
- Contract-power cost scenario represented as kWh saving: none found
- Program-level result explicitly protected from single-action attribution where applicable

Case-specific protection confirmed:
- CASE65: 66.62 vs 70.12 N㎥/ton, ~5% and ~1.8억원/년 remain field-test/project values; no generalization to other sites
- CASE66: 40% load-factor observation remains site-specific threshold; no independent saving amount created
- CASE67: correlation is not promoted to causality or verified saving
- CASE68: abnormal steam-flow metering is not used to calculate a saving rate
- CASE69: pressure optimization remains field pattern / optimization direction
- CASE70: PUE gap remains diagnostic, not saving rate
- CASE71~73: retrofit / free-cooling / tower-setpoint items remain alternatives or optimization directions
- CASE74: PUE 1.77→1.70, 6.5 GWh/년, 7.53억원/년 remain proposal targets / expected effects
- CASE75: auxiliary-power benchmark gap remains diagnostic
- CASE76~81: no independent final saving is assigned where source does not establish one
- CASE82: 20,000→12,000 kW and 1.67억원/년 remain a contract-power cost-saving scenario, not kWh energy saving

Editorial tightening applied:
- CASE46 integrated Chapter 24 wording changed from “Fan 소비동력 63.5% 절감” to “Fan 소비동력 63.5% 감소” so the measured fan-power change is not overstated as an M&V saving claim.
- CASE65~68 placement label normalized to “Proposed Chapter 15”.

Limit:
This is a **Preliminary QA**, not Approval Final Fidelity PASS. Approval Final TXT source bytes are still not directly available in the current working environment for direct text comparison. CASE50 remains HOLD.


## 13. CASE INDEX / REFERENCES / Manuscript Title Synchronization QA

Status: **PASS WITH CASE50 HOLD EXCEPTION**

Scope:
- PHASE3_CASE_INDEX_C01_C82_DRAFT.md
- PHASE3_REFERENCES_C42_C82_DRAFT.md
- docs/phase3-manuscripts/CASE42.md ~ CASE82.md
- data/phase3-manuscript-status.json
- data/phase3-expanded-edition-manifest.json

Result:
- CASE42~82 CASE INDEX titles and REFERENCES titles: 1:1 aligned
- CASE42~82 manuscript first-heading titles: synchronized to the official Book Title set
- CASE42~49 and CASE51~82 final verification: 40/40 title match
- CASE50 intentionally excluded from normal title-sync PASS because source identity is unresolved

CASE50 structural correction:
- bookIncluded = false
- pageNumber = null
- figureCountPlanned = 0
- chapterPlacementStatus = HOLD_EXCLUDED_PENDING_SOURCE_RECONCILIATION
- removed CASE50 from Expanded Edition P5-C23 active chapterCaseMap
- retained CASE50 permanent ID in CASE INDEX with HOLD marker
- REFERENCES draft retains C50 only as a HOLD placeholder and states it is not included in final publication references until reconciliation

This preserves the permanent CASE ID while preventing CASE50 from being treated as active Expanded Edition book content before source reconciliation.


## 14. Integrated Chapter Style / Terminology QA

Status: **PRELIMINARY PASS / SOURCE FIDELITY PENDING**

Scope:
- Chapter 11 Chiller Plant
- Chapter 12 Multi-Utility
- Chapter 14 Compressed Air
- Proposed Chapter 15 Boiler
- Proposed Chapter 20 Power Plant Auxiliaries
- Proposed Chapter 23 Energy Modeling
- Proposed Chapter 24 Data Center

Style checks:
- CASE type label synchronized with PHASE3_DEEP_DIVE_CLASSIFICATION.md
- Boiler specific-energy unit normalized to N㎥/ton where the same metric is described
- Cost-effect wording normalized to Korean publication prose where no source meaning is changed
- Internal EDITORIAL NOTE / EDITORIAL HOLD labels converted to publication-safe BOOK NOTE / SOURCE HOLD semantics
- English technical terms such as Set Point, Baseline, M&V, PUE, COP, kW/RT remain where they function as established engineering terms
- source-derived uncommon units such as mmAQ or USRT are not silently replaced without source-level verification

Structural correction:
- CASE50 was still present as a full section in the Chapter 23 integration draft even after active-book exclusion.
- CASE50 section was removed from the active Chapter 23 integration draft.
- Chapter 23 now integrates CASE48, CASE49 and CASE51 only; CASE50 remains Source HOLD outside active book content.

Publication protection:
- draft metadata such as ROUND 2 / BOOK-STYLE DRAFT remains only in editorial draft headers and must not be carried into final publication body
- no current Word Master / Print Master / Production Web modification was made


## 15. Chapter Renumbering / Cross-reference QA

Status: **PRELIMINARY PASS / USER CONFIRMATION PENDING**

Checks completed:
- Proposed Chapter 15 insertion map reviewed against Chapter 11/12/14/15/20/23/24 integration drafts
- Existing Chapter 15~28 → +1 mapping retained only as a proposal until user approval
- Chapter Renumbering Register status corrected from implied lock to USER CONFIRMATION PENDING
- Proposed TOC Chapter 23 expansion corrected to CASE48,49,51; CASE50 excluded while Source HOLD
- CASE IDs remain stable and are not renumbered
- current page references remain invalid for Expanded Edition until final pagination

Current proposed mapping if approved:
- Current Ch.19 → Expanded Ch.20 Power Plant Auxiliaries
- Current Ch.22 → Expanded Ch.23 Energy Modeling
- Current Ch.23 → Expanded Ch.24 Data Center
- Current Ch.24 → Expanded Ch.25 District Heating
- Current Ch.28 → Expanded Ch.29 M&V

No current Print/Word Master cross-reference replacement has been performed.


## 16. Figure / Table Register Consistency QA

Status: **PASS / FINAL FIGURE USER GATE PENDING**

Verified against:
- PHASE3_FIGURE_TABLE_SOURCE_REGISTER.csv
- PHASE3_FIGURE_SELECTION.md
- PHASE3_CAPTION_TABLE_REGISTER.md
- phase3-manuscript-status.json
- phase3-evidence-register.json

Result:
- active CASE scope = 40
- CASE50 rows removed from active Figure/Table register
- editorialType mismatch = 0
- evidenceClass mismatch = 0
- CSV structural error = 0
- approved source-backed PNG inventory = 11/11 accounted for
- Figure Selection = 7 primary + 1 optional + 3 Table/Callout preferred

Special handling:
- CASE53-F01, CASE64-F01, CASE66-F01 are valid approved assets but print presentation is currently Table/Fact Box preferred.
- they remain traceable alternates and are not treated as missing captions.

No final Figure number, Word insertion, or print permission approval has been performed.
