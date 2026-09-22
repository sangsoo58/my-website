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

공식 Source filename은 **case50_approval_final.txt**로 확인한다.

다만 현재 작업환경에서 해당 TXT의 원문 bytes/content를 직접 읽지 못한 상태이므로:
- CASE50 HOLD 유지
- Production HTML의 Office 내용과 legacy JSON-LD의 Childcare Passive House 충돌을 추정으로 해결하지 않음
- Approval Final TXT 확보 후 Source Reconciliation 수행

## 7. CASE77~81

공식 Source filename:
- case77_approval_final.txt
- case78_approval_final.txt
- case79_approval_final.txt
- case80_approval_final.txt
- case81_approval_final.txt

기존 Book Source Gate에서 5/5 PASS가 확인되어 Source Gap은 아니다.

현재 제한:
- 개별 TXT content bytes가 Library 검색 결과로 직접 노출되지 않음

따라서 filename identity는 해결되었고, **content fidelity verification만 pending**이다.

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
