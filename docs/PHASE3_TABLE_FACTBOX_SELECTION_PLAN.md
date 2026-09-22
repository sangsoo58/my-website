# PHASE 3 — Table / Fact Box Selection Plan

Status: **EDITORIAL PLANNING / USER CONFIRMATION NOT REQUIRED UNTIL WORD LAYOUT**

Goal:
- keep the Expanded Edition near 214~220p
- avoid repeating current-book tables
- use Figures for visual comparisons and Tables/Fact Boxes only when they add a distinct decision question
- preserve Evidence Boundary and source units

## Selection principles

1. If a primary Figure already communicates the same comparison, do not repeat the same values in a full table.
2. Same-project Umbrella/Companion cases use Cross-reference rather than duplicate Project-level KPI tables.
3. Deep Dive cases may receive one compact table when the table is necessary for engineering interpretation.
4. Application cases default to Fact Box / inline KPI unless a multi-variable comparison genuinely benefits from a table.
5. CASE50 remains outside the default body; its fenestration values are absorbed into CASE49 unless user chooses a separate CASE50 body.

## Recommended print tables / fact boxes

### Chapter 11 — Chiller Plant
- CASE53: **Fact Box** — 2,000 USRT / 7℃ / 630 m³/h representative operating condition
- CASE56: **Compact Test Table** — #10→#9 / #4→#3, kW/RT change, load note
- CASE63: **Compact Comparison Table** — 21/22/23 chiller kW/RT + load factor
- CASE64: **Fact Box** — required 6 / actual 8 / 75% / actual program action 8→7
- CASE78: **Compact KPI Table** only if page space permits — Pump kW / flow / m³/kWh / load factor / required units

Recommended count: 4 required + 1 optional.

### Chapter 12 — Multi-Utility
- CASE42: Figure only; no duplicate KPI table with CASE11
- CASE43: Figure only; short text callout for 2.1 vs 1.2
- CASE44: Figure only; CASE44-F02 optional instead of second table
- CASE45: Cross-reference / no new table

Recommended count: 0 new full tables.

### Chapter 14 — Compressed Air
- CASE52: **Fact Box** — Test & Adjust logic
- CASE54: **Compact Action Table** — Header pressure / control action / Evidence C
- CASE59: **Diagnostic checklist** rather than numeric table
- CASE61: **Fact Box** — demand-pattern / staging decision logic

Recommended count: 1 compact table + 3 small boxes/checklists.

### Proposed Chapter 15 — Boiler
- CASE65: Figure only; no duplicate numeric table
- CASE66: **Primary Table** — 30 ton/h ×1 vs 15 ton/h ×2 operating combination
- CASE67: **Correlation caution box** — no causality table
- CASE68: **Data Quality checklist** — meter validity / steam flow / M&V readiness
- CASE69: **Operating pattern box** — pressure optimization direction, not saving table

Recommended count: 1 table + 3 boxes/checklists.

### Proposed Chapter 20 — Power Plant Auxiliaries
- CASE75: **Benchmark Table** — generation-normalized auxiliary-power comparison
- CASE76: **Equipment Configuration Table** — Feedwater 14/7, Condensate 14/7, Seawater 17/7~14, VFD context

Recommended count: 2 tables.

### Proposed Chapter 23 — Energy Modeling
- CASE48: no new table if existing CASE36 already carries model overview
- CASE49: **Parametric Summary Table** — representative design variables and Simulation deltas
- CASE51: Figure only for Baseline Rotation; optional compact Site Energy vs Cost interpretation box
- CASE50: default no separate table; fenestration subset remains under CASE49

Recommended count: 1 table + 1 optional box.

### Proposed Chapter 24 — Data Center
- CASE46: Cross-reference CASE38; no duplicate project totals
- CASE47: Cross-reference CASE39; no duplicate proposal-target table
- CASE70~74: mostly diagnostic/architecture boxes, no repeated project metrics
- CASE77: **Support-load diagnostic checklist** rather than numeric table
- CASE79: **Actual vs Required Units Table** if not duplicating existing pump table
- CASE80: **Staging Decision Box** rather than full table
- CASE81: **Cooling-tower diagnostic KPI Box** — wet-bulb / Approach / Range
- CASE82: **Cost Scenario Table** — Contract Power / Billing Demand / Peak / Load Factor / 12,000 kW scenario / 167백만원·년

Recommended count: 2 tables + 3 diagnostic boxes.

## Recommended total

Full/compact tables:
- Chapter 11: 4 required (+1 optional)
- Chapter 12: 0
- Chapter 14: 1
- Chapter 15: 1
- Chapter 20: 2
- Chapter 23: 1
- Chapter 24: 2

Base total: **11 tables**
Optional: **1 additional CASE78 table**

Fact Boxes / checklists:
approximately **9~12**, placed inline rather than as full-page elements.

## Page-control rule

If the Word candidate exceeds 220p:
1. drop optional CASE78 table
2. convert CASE54 action table to compact box
3. merge CASE75/76 background text into one Chapter-level introduction
4. keep CASE49 Parametric table but do not add separate CASE50 table
5. use one shared Data Center diagnostic box where CASE70~73 content overlaps

## Source rule

Every final table must:
- use approved-source values only
- preserve original unit direction
- identify Simulation / Potential / Verified / Program-level result correctly
- avoid same-project total double-count
- pass final page-level source check after pagination
