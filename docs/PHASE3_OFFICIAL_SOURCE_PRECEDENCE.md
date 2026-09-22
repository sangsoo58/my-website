# PHASE 3 — Official Source Precedence & Fidelity Control

Status: **ACTIVE CONTROL**

## 1. Official source rule

Book Track의 기존 승인 규칙을 최상위 기준으로 적용한다.

### CASE01~41
1차 Source:
- CASE01_41_FINAL_APPROVAL_MASTER 내부
- case01_approval_final.txt ~ case41_approval_final.txt

### CASE42~81
1차 Source:
- **case42_approval_final.txt ~ case81_approval_final.txt**
- 사용자 승인 완료된 Approval Final TXT

### CASE82
- CASE82는 기존 CASE01~81 Book Source Master 범위 밖에서 추가됨
- 현재 Production locked data + restored QA를 기준으로 별도 관리

## 2. Source priority

1. 사용자 승인 Approval Final TXT
2. 사용자 승인 Approval Final HTML
3. Final Content Lock
4. Original Verified Source
5. Production HTML — **Verification Only**

따라서 Production HTML에서 책 원고 FACT를 새로 복원하거나, Approval Final TXT에 없는 내용을 FACT로 승격하지 않는다.

## 3. 현재 Phase 3 Draft의 상태

CASE42~82의 현재 manuscript draft는 편집 구조·Chapter 배치·중복통제·문체 설계를 위한 **Book Revision Candidate**다.

최종 Book Manuscript로 승격하기 전에 반드시:
- CASE42~81: Approval Final TXT ↔ manuscript 1:1 Fidelity QA
- CASE82: locked Production data/QA ↔ manuscript Fidelity QA
를 수행한다.

## 4. Fidelity Gate

각 CASE에서 확인:
- Title
- FACT
- Numeric
- Unit
- Formula
- Table
- Evidence
- Measurement Boundary
- Performance Classification
- Source Note
- Verification Condition

Critical Difference = 0 이어야 한다.

## 5. 금지

- Production HTML을 공식 Book Source로 대체
- Approval Final TXT에 없는 숫자 생성
- 해석을 FACT로 승격
- Potential → Actual
- Expected → Verified
- Simulation → Actual
- Proposal → Result
- Target → Achievement
- 동일 프로젝트 총성과 Double-count

## 6. CASE50

Standalone `CASE50_APPROVED_FINAL.txt` has now been directly reviewed.

Authoritative identity:
- 대형 오피스 빌딩 창면적·유리성능 Parametric Simulation
- Evidence D | Simulation·Modeling

The approved source explicitly states that the legacy “보육시설 Passive House” label does not match the actual CASE50 content.

Therefore source identity reconciliation is **RESOLVED**. CASE50 remains outside the active book set only because separate-body inclusion is a user editorial decision.

## 7. CASE77~81

공식 Source filename:
- case77_approval_final.txt
- case78_approval_final.txt
- case79_approval_final.txt
- case80_approval_final.txt
- case81_approval_final.txt

Standalone `CASE77_APPROVED_FINAL.txt` ~ `CASE81_APPROVED_FINAL.txt` have been directly reviewed. Current Phase 3 manuscripts preserve title, Evidence B/C, core FACT/diagnostic logic and Measurement Boundary. Result: **FINAL FIDELITY PASS 5/5**.

## 7A. CASE52~76 reader limitation

Standalone Approval Final file identities are confirmed and Source Recovery is PASS. Some standalone files return zero readable lines through the current Library text reader, and raw-byte materialization is unavailable. These cases therefore remain Preliminary Fidelity rather than being promoted by inference.

## 8. Current Book protection

- 159p Print Master 변경 없음
- Editable Word Master 변경 없음
- Book Reader 변경 없음
- Production Web 변경 없음
- Expanded Edition은 승인 전 Candidate 상태


## 9. Public vs Internal Provenance

Publication text and editorial source control are intentionally separated.

### Public book text
May contain:
- concise anonymized Source Note
- Web CASE URL / QR target
- public REFERENCES entry
- Evidence Boundary statement

Must not contain:
- Approval Final internal filename/path
- recovery package path
- source byte-access status
- internal QA labels
- permission-review workflow metadata

### Internal Editorial Register
Retains:
- officialBookSourceFile
- sourceMaster / sourceTrace
- source precedence
- fidelity status
- content-byte access status
- anonymization / print permission status

Public provenance simplification never changes the official source priority or Fidelity Gate.
