# PHASE 3 — Figure Anonymization Evidence Review

Status: **DOCUMENT-LEVEL REVIEW COMPLETE / PIXEL VISUAL REVIEW STILL REQUIRED**

## Scope

Approved Web PNG assets: 11

- CASE42-F01
- CASE43-F01
- CASE44-F01
- CASE44-F02
- CASE51-F01
- CASE53-F01
- CASE56-F01
- CASE63-F01
- CASE64-F01
- CASE65-F01
- CASE66-F01

## Evidence reviewed

Document-level evidence:
- CASE42/43/44/51/53/56/63/64/65/66 Asset Manifests
- CASE42~81 Masking Check
- Figure/Table Source Register
- approved-source fidelity records

## Risk classification

### LOW DOCUMENTED RISK
These assets are built around generalized KPI/technical comparisons and have no documented need to expose customer/site identity:

- CASE43-F01 — actual vs required chiller count
- CASE44-F01/F02 — multi-site anonymized UPI benchmark
- CASE51-F01 — generic Appendix G baseline rotation
- CASE53-F01 — operating-condition KPI card
- CASE56-F01 — chiller switching field-test comparison
- CASE63-F01 — unit kW/RT + load-factor comparison
- CASE64-F01 — required vs actual unit-count KPI
- CASE65-F01 — boiler N㎥/ton comparison
- CASE66-F01 — operating-combination table

Document basis:
- CASE44 Asset Manifest explicitly states facility/equipment identifiers are anonymized.
- CASE53 public QA states no internal source-recovery/production wording on visitor page.
- CASE42/43 manifests explicitly require customer/site/equipment identifiers to be anonymized or unpublished.
- CASE42~81 Masking Check confirms masking rules are active for approved public cases.

### MEDIUM DOCUMENTED RISK
- CASE42-F01

Reason:
- the underlying project is a multi-site semiconductor/display utility project;
- the asset itself is a CDA KPI chart, but the CASE42 manifest explicitly warns that customer/site names and internal equipment IDs must not be published.

Required visual check:
- title/subtitle must not contain customer/company/site name;
- legend/annotation must not expose internal facility code;
- no source-trace/contact/contract information.

## What is already PASS

- asset identity / SHA: 11/11
- pixel dimension metadata: 11/11
- caption/unit source QA: 11/11
- publication evidence classification: aligned

## What is NOT yet PASS

Pixel-level visual anonymization remains **REVIEW** because current GitHub binary assets cannot be rendered through the available review path.

Before print:
1. visually inspect every selected asset;
2. search rendered image text for customer/site/company/internal platform/equipment identifiers;
3. confirm no contact/contract/source-trace metadata;
4. confirm only generalized unit/equipment numbers needed for technical interpretation remain.

## Decision rule

Document-level evidence indicates **no known anonymization defect**, but this is not sufficient to declare visual anonymization PASS.

Final status:
**NO KNOWN DOCUMENT-LEVEL ISSUE / PIXEL REVIEW REQUIRED**
