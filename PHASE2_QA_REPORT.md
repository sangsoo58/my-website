# PHASE 2 IMPROVEMENT QA REPORT

Status: CANDIDATE / DRAFT REVIEW ONLY  
Production main branch changed: NO  
Merge: NO  
Deployment: NO  

## 1. Candidate scope

The Phase 2 candidate improves the site as an independent industrial/building energy-saving knowledge platform while preserving the existing 82 CASE structure.

Core changes:
- Homepage Hero reframed as a knowledge platform
- 4 audience entry routes
- Consultation expanded to professional consultation / research / education / R&D collaboration
- Web ↔ Book mapping added
- CASE cross-links to Book / Insight / CASE Library / Consultation
- Book Reader current/future book status clarified
- Public company attribution neutralized where found during QA

## 2. Web ↔ Book mapping

- Total CASE mapping: 82
- Unique CASE ID: 82
- CASE01~41: ACTIVE_CURRENT_BOOK
- CASE42~82: FUTURE_BOOK_PENDING
- CASE41: current book mapping confirmed
- CASE42: future pending confirmed

## 3. Book Reader QA

- Published book scope: CASE01~41
- Direct web CASE options: 41
- CASE37~41 links aligned with the published book C37~C41 sequence:
  - CASE37: Solar Radiation Simulation / PV installation condition optimization
  - CASE38: Multi-IDC PUE / cooling data / EC Fan / free cooling
  - CASE39: Multi-data-center PUE / cooling efficiency / IPOS
  - CASE40: HDD Baseline district-heating smart operation
  - CASE41: District-heating supply temperature / pipe loss / pump optimization
- CASE42~82 shown as web expansion/future book mapping
- Cover overlay text: 41 cases

## 4. JavaScript static QA

- js/case-detail.js syntax: PASS
- assets/script.js syntax: PASS
- js/site.js syntax: PASS
- web-book-mapping.json parse/count/unique ID: PASS

## 5. Representative SEO protection

Representative checks confirmed canonical / JSON-LD protection for:
- CASE01
- CASE41
- CASE42
- CASE82

No intended changes to:
- CASE official URL structure
- sitemap.xml
- robots.txt
- canonical policy
- existing performance classification

## 6. Independent-platform attribution QA

Public company attribution discovered during Phase 2 QA was neutralized in the Candidate where applicable, while keeping the technical source meaning and quantitative content unchanged.

Affected candidate CASE files:
CASE01, CASE02, CASE03, CASE04, CASE05, CASE06, CASE08, CASE11, CASE12, CASE38, CASE46.

## 7. Protection rules

The following remain protected:
- CASE IDs
- official CASE URLs
- FACT / numeric / formula / evidence
- Potential / Actual / Verified classification
- Measurement Boundary meaning
- existing Book Print Master / Editable Word source

## 8. Remaining gate before merge

BROWSER QA REQUIRED before merge.

Recommended manual screens:
1. Homepage desktop
2. Homepage mobile
3. CASE01
4. CASE41
5. CASE42
6. CASE82
7. Book Reader desktop/mobile
8. Expert Profile
9. Consultation form

Check:
- no horizontal page overflow
- navigation labels fit
- audience cards layout
- knowledge-link panel rendering
- CASE01~41 Book link appears
- CASE42~82 Book link remains hidden
- mobile table/form behavior
- form submission regression

Only after user approval:
Draft PR → Ready for Review → Merge → GitHub Pages → Production Smoke Test.


## 9. Additional static QA (latest)

- Case Library metadata JS syntax: PASS
- Case Library renderer JS syntax: PASS
- Case Library rows: 82
- Case Library canonical numeric links: 82/82
- Book Reader web CASE direct links: 41/41
- Book Reader legacy/slugs direct links: 0
- Expert profile: removed unsupported specific university claims; retained source-supported "공학박사", 25+ years energy-saving consulting, qualifications and professional domains
- Responsive CSS review:
  - problem-grid → 1 column at <=640px
  - service-grid → 1 column at tablet/mobile
  - contact form field-row → 1 column at <=640px
  - CASE detail grids → 1 column at mobile
  - table overflow handling retained
- Browser rendering itself is still a manual gate and has not been declared PASS.

## 10. Browser QA progress
- CASE01 upper/detail hero: PASS (browser screenshot reviewed)
  - breadcrumb / category / title / summary / tags render correctly
  - responsive hamburger header is expected at this viewport
  - evidence summary card alignment is stable
  - no visible horizontal overflow in the captured upper viewport


- Homepage desktop Hero: PASS (user browser screenshot reviewed)
  - headline line breaks stable
  - no orphaned words
  - right-side performance visual aligned
  - CTA / trust strip visible
  - four audience entry cards visible and balanced
- Next browser gate: CASE01 → CASE41 → CASE42 → CASE82 → Book Reader → Expert → Consultation

- CASE01 full page + knowledge connection: PASS
  - Knowledge Connection appears after supplementary/expert commentary
  - Current-book card appears for CASE01
  - Related Insight resolves to Baseline & M&V
  - CASE Library and Professional Consultation links visible

- CASE41 full page + knowledge connection: PASS
  - Current-book card appears for CASE41
  - Related Insight resolves to Baseline & M&V
  - CASE Library and Professional Consultation links visible
  - no visible layout issue in reviewed upper/lower screenshots

- CASE42 full page + knowledge connection: PASS
  - upper title / summary / tags / body opening render correctly
  - no Current Book card appears (expected for CASE42~82)
  - Related Insight = 에너지 데이터 분석 Insight
  - CASE Library and Professional Consultation links visible
  - no visible layout break in reviewed screenshots

- CASE82 full page + knowledge connection: PASS
  - upper title / summary / data-center classification render correctly
  - no Current Book card appears (expected for CASE42~82)
  - Related Insight = Baseline & M&V
  - CASE Library and Professional Consultation links visible
  - no visible layout break in reviewed screenshots

- Book Reader upper screen: PASS
  - cover shows 41 cases
  - current-book notice correctly states CASE01~41 and CASE42~82 web expansion
  - CASE 01~82 library button, web CASE jump, TOC jump, page controls all visible
  - no visible horizontal overflow in reviewed desktop screenshot
  - book title area truncation in top bar is acceptable at this viewport

- Book Reader CASE37~41 jump list: PASS
  - user confirmed CASE37~41 entries all visible
  - published C37~C41 order aligns with web CASE37~41
  - Book Reader browser QA complete

- Expert Profile browser QA: PASS
  - profile intro / experience / academic-professional block render correctly
  - qualifications and core specialty cards visible
  - research / education section visible
  - Professional Consultation & Collaboration CTA visible
  - source-supported profile wording retained
  - canonical present

- Consultation section browser QA: PASS
  - contact heading renders cleanly without orphaned particles
  - company/organization, contact, email, phone, industry/process, topic, message, privacy, submit button layout verified
  - honeypot hidden from normal UI
  - Supabase CDN/config/client/contact-form module wiring present
  - contact-form.js syntax PASS
  - actual submission was not performed during QA

- Homepage mobile Hero @390px: PASS
  - brand and hamburger navigation fit correctly
  - hero heading wraps cleanly with no horizontal overflow
  - hero lead, primary CTAs and tags remain readable
  - screenshot viewport height was ~791px; width 390px is sufficient for this layout gate

- Homepage mobile audience cards @390px: PASS
  - audience cards stack in a single column
  - card width, padding, typography and links fit within viewport
  - no visible horizontal overflow
  - sector labels and CTA links remain readable

- Consultation mobile upper @390px: PASS
  - consultation copy stacks above form
  - heading, description, checklist and direct contact fit viewport
  - form card begins below content with correct width/padding
  - first form fields stack vertically as expected

- Consultation mobile lower @390px: PASS
  - topic select, message textarea, privacy consent and submit button fit viewport
  - form controls remain readable and full-width
  - no visible horizontal overflow
  - mobile consultation QA complete

## 11. Production Smoke Test

- Production homepage: PASS
- Production CASE Library: PASS
- Production CASE01 upper smoke: PASS
  - title, summary, tags and evidence summary render correctly
  - official CASE01 content is visible after merge
