# PHASE 3 — CASE50 Source Reconciliation

Status: **HOLD / DO NOT INTEGRATE INTO BOOK YET**

## 1. 확인된 사실

CASE50의 현재 Production HTML에는 서로 다른 두 Source Identity가 공존한다.

### A. Visible / SEO Title / Body
- 대형 오피스 빌딩
- 창면적 63% → 40%
- SC 0.33 → 0.75
- Curtain 50%
- Baseline 연간 에너지비용 약 3,114백만원
- 결과는 Simulation / Modeling

### B. JSON-LD / Legacy Boundary Metadata
- headline: 보육시설 Passive House 설계검토 컴퓨터 시뮬레이션
- description: 친환경건축 Simulation 사례
- legacy Measurement Boundary: 보육시설 Passive House 설계안

## 2. Source Recovery 상태

CASE50은 기존 Source Recovery Register에서:
- CASE50_APPROVED_FINAL.txt
- APPROVED FINAL TXT
- FINAL / FINAL-LOCK marker
- Original source bytes copied without content modification
- RECOVERED APPROVED SOURCE

상태로 확인된다.

즉 승인된 Source가 존재한다는 사실은 확인되지만, 현재 접근 가능한 검색 결과에서는 **CASE50_APPROVED_FINAL.txt 원문 자체와 그 이전 원본 보고서의 정확한 identity를 직접 대조할 수 없다.**

## 3. 현재 판정

다음 중 어느 것이 맞는지 추정으로 결정하지 않는다.

1. 보육시설 Passive House 프로젝트가 맞고 현재 Visible Body가 다른 오피스 Simulation 내용으로 잘못 결합됨
2. 대형 오피스 Parametric Simulation이 맞고 JSON-LD/legacy boundary만 과거 Source 흔적으로 남음
3. 하나의 원자료 묶음에 여러 Simulation Case가 있었고 CASE50 mapping이 중간 편집과정에서 섞임

## 4. Book Revision 처리

- CASE50 manuscript: **HOLD**
- Chapter 23 Energy Modeling 배치: **provisional only**
- Figure: **NO VISUAL**
- Book Page: null
- Book Included: false
- REFERENCES C50: draft only
- Web Production: 이번 Phase 3에서 수정하지 않음

## 5. 해제조건

다음 중 하나가 확보되면 Reconciliation을 완료한다.

- CASE50_APPROVED_FINAL.txt 원문
- CASE50이 파생된 원본 보고서/제안서 페이지
- 기존 CASE42~81 Book Source Package의 CASE50 원본
- 사용자 확인

확인 후 Title / Measurement Boundary / Source Note / JSON-LD 중 무엇이 정본인지 1:1로 정리한다.

## 6. 보호 원칙

Source가 확인될 때까지:
- 현재 visible 수치를 임의 변경하지 않는다.
- 보육시설 ↔ 오피스 중 하나를 추정으로 선택하지 않는다.
- Simulation을 Actual 성과로 강화하지 않는다.
- Production 수정과 Book 반영을 모두 보류한다.


## Direct Approval Final TXT Resolution

Status: **SOURCE IDENTITY RESOLVED / BOOK INCLUSION USER DECISION PENDING**

Directly reviewed file:
- `CASE50_APPROVED_FINAL.txt`

Authoritative content identity:
- **대형 오피스 빌딩의 창면적·유리성능 변화가 냉난방 에너지에 미치는 영향을 비교한 Simulation**
- Evidence D | Simulation·Modeling

Approved source confirms:
- WWR 63% → 40%: 3,114 → 3,060백만원, 약 -54백만원/년, -1.7%
- SC 0.33 → 0.75: 3,114 → 3,405백만원, 약 +291백만원/년, +9.3%
- Curtain 50%: 약 -31백만원/년, -1.0%
- all values are Simulation results, not measured post-construction savings

The approved source explicitly states that the legacy “보육시설 Passive House” label does not match the actual CASE50 content and should not be used for this Review.

Therefore:
- source identity conflict = **RESOLVED**
- authoritative CASE50 identity = **large office fenestration parametric simulation**
- current exclusion from active book integration remains temporarily in place because CASE50 book inclusion was previously defined as a user decision gate
- no placeholder page is created before that decision
