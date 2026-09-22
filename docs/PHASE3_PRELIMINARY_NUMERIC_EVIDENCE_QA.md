# PHASE 3 — Preliminary Numeric & Evidence Verification QA

Status: **PRELIMINARY PASS AGAINST PRODUCTION VERIFICATION LAYER / NOT APPROVAL-FINAL FIDELITY PASS**

## 1. Purpose

Official Book Source priority remains:

1. Approval Final TXT
2. Approval Final HTML
3. Final Content Lock
4. Original Verified Source
5. Production HTML — Verification Only

이번 QA는 공식 Approval Final TXT를 대체하지 않는다.  
다만 현재 Phase 3 원고가 Production의 승인 공개 CASE와 숫자·성과성격 면에서 크게 어긋나지 않았는지 사전 검증한다.

## 2. Numeric token verification

CASE42~81에 대해 manuscript의 숫자 token을 Production CASE HTML과 대조했다.

결과:
- CASE42~81 전반에서 manuscript의 **기술·성과 관련 숫자는 Production 공개 CASE 안에서 확인되는 값과 일치**
- manuscript-only 숫자는 대부분:
  - CASE 번호
  - PART 번호
  - Proposed Chapter 번호
  - 편집용 Metadata
  로 확인됨
- 기술 FACT로 새로 만들어진 unsupported numeric value는 이번 사전검사에서 발견되지 않음

대표 확인:
- CASE42: 16.2억원/년, 3.5억원/년, 0.12897→0.12627 등 공개 FACT와 일치
- CASE43: 0.84 kWh/RT, COP 4.20, 2.1대 vs 1.2대, 444,832 kWh/년 등 일치
- CASE56: 6.6%, 15%, 약 150 kW 등 Field Test 값 일치
- CASE63: 0.594→0.556 kW/RT, 197.6 kW, 1.02억원/년 일치
- CASE65: 66.62 vs 70.12 N㎥/ton, 약 5%, 약 1.8억원/년 일치
- CASE82: 20,000 / 6,000 / 4,328 kW, 22%, 37%, 31%, 12,000 kW, 167백만원/년은 locked Production data와 일치

## 3. Evidence / performance expression check

현재 manuscript draft에서 다음 보호 원칙을 유지하고 있음을 재확인했다.

- Potential → Actual 변환 없음
- Expected → Verified 변환 없음
- Simulation → Actual 변환 없음
- Proposal Target → Achievement 변환 없음
- Benchmark Gap → Saving Rate 변환 없음
- Program-level Result → single-action saving 귀속 금지
- Null Result에 절감성과 부여 금지
- CASE82 Cost Saving Scenario를 kWh Saving으로 표현하지 않음

## 4. Known exception

### CASE50 — HOLD

CASE50은 Numeric 자체의 문제가 아니라 Source Identity 충돌 문제다.

- Visible body: 대형 오피스 WWR / glazing Simulation
- Legacy JSON-LD / boundary: 보육시설 Passive House
- Official source filename: case50_approval_final.txt
- Approval Final TXT content 직접 대조 전까지 final fidelity 판정 금지

따라서 CASE50은 Preliminary PASS 대상에서 제외한다.

## 5. Chapter metadata normalization

Expanded Edition Proposal 기준으로 manuscript header의 Chapter metadata를 정렬했다.

- CASE46~47 → Proposed Chapter 24
- CASE48~51 → Proposed Chapter 23
- CASE65~69 → Proposed Chapter 15
- CASE70~74,77,79~82 → Proposed Chapter 24
- CASE75~76 → Proposed Chapter 20

CASE ID와 Production URL은 변경하지 않았다.

## 6. Current preliminary result

- Technical numeric inconsistency found against Production verification layer: **0 critical**
- Performance classification strengthening found: **0 critical**
- Source identity HOLD: **CASE50 only**
- Approval Final TXT final fidelity QA: **still required**

## 7. Promotion rule

이 문서의 PASS는 다음 의미만 가진다.

**“현재 Phase 3 원고가 Production verification layer와 수치적으로 큰 충돌이 없는 상태”**

아직 다음을 의미하지 않는다.

- FINAL BOOK MANUSCRIPT
- APPROVAL FINAL FIDELITY PASS
- WORD MASTER READY
- BOOK MAPPING ACTIVATION READY
