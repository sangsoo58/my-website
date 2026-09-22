# PHASE 3 — Book Print Permission & Anonymization Review Checklist

Status: **REVIEW CHECKLIST READY / PERMISSION NOT YET GRANTED**

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

## Required checks before print use

For each asset confirm:

1. **Source ownership / use basis**
   - created from author/company project material, or
   - otherwise cleared for book use

2. **Anonymization**
   - customer/company/site name removed where required
   - internal equipment ID removed where required
   - confidential platform/project identifiers removed

3. **Numeric fidelity**
   - values match approved source
   - Potential / Actual / Simulation / Target classification preserved
   - no derived value presented as source value

4. **Unit fidelity**
   - axis units
   - legend units
   - caption units
   - text callout units
   all consistent with approved source

5. **Print readability**
   - 152×225 mm book format
   - target body width ≤ about 128 mm for current 1510/1511 px assets at ~300 dpi
   - caption, legend and axis text readable
   - grayscale/CMYK conversion does not destroy meaning

6. **Duplication control**
   - figure does not repeat a current-book figure without adding a distinct analytical question
   - same-project project-level performance is not double-counted

7. **Final caption**
   - Field Test / Verified / Potential / Simulation / Benchmark wording matches Evidence class

## Asset review status

| Figure | Current editorial use | Permission | Anonymization | Unit/caption | Final print |
|---|---|---|---|---|---|
| CASE42-F01 | PRIMARY | PENDING | REVIEW | PASS | HOLD |
| CASE43-F01 | PRIMARY | PENDING | REVIEW | PASS | HOLD |
| CASE44-F01 | PRIMARY | PENDING | REVIEW | PASS | HOLD |
| CASE44-F02 | OPTIONAL | PENDING | REVIEW | PASS | HOLD |
| CASE51-F01 | PRIMARY | PENDING | REVIEW | PASS | HOLD |
| CASE53-F01 | TABLE/CALLOUT PREFERRED ALTERNATE | PENDING | REVIEW | PASS | HOLD |
| CASE56-F01 | PRIMARY | PENDING | REVIEW | PASS | HOLD |
| CASE63-F01 | PRIMARY | PENDING | REVIEW | PASS | HOLD |
| CASE64-F01 | TABLE/CALLOUT PREFERRED ALTERNATE | PENDING | REVIEW | PASS | HOLD |
| CASE65-F01 | PRIMARY | PENDING | REVIEW | PASS | HOLD |
| CASE66-F01 | TABLE PREFERRED ALTERNATE | PENDING | REVIEW | PASS | HOLD |

## Gate

No asset is considered **PRINT APPROVED** merely because it exists on the approved Web site.

Final print status requires:
- permission/use-basis confirmation
- anonymization review
- source/unit/caption verification
- final layout readability check

Until then:
**BOOK_PRINT_PERMISSION_REVIEW_PENDING**


## Binary asset integrity

Status: **PASS 11/11**

- Git asset existence: 11/11
- SHA identity vs Source Register: 11/11
- pixel dimension identity vs Source Register: 11/11

Permission, anonymization, unit/caption and final-layout checks remain independent gates.


## Caption / unit result

Status: **PASS 11/11**

Source-level caption and unit checks are complete for all approved Web PNG assets.

Still pending:
- permission/use-basis confirmation
- visual anonymization review
- final print layout readability / grayscale-CMYK check


## Visual anonymization access note

Current status: **REVIEW PENDING**

The 11 PNG assets are confirmed in GitHub and their binary SHA/dimensions match the Source Register, but the current tool path cannot render those GitHub binary assets for pixel-level visual inspection.

Therefore:
- anonymization is not marked PASS by inference
- customer/site/equipment identifiers must be visually checked when the assets are available in the Word working-copy or another renderable review surface
- this is an access limitation, not a known anonymization failure

Keep Anonymization = REVIEW until an actual visual inspection is completed.
