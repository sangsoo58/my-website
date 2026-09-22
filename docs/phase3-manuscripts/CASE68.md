# CASE 68 | DEEP DIVE 후보 — 스팀유량 계측 이상과 Data Quality Gate

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**편집 배치안 (Expanded Edition Proposal):** PART 4 · Chapter 15 · 보일러 시스템 운전최적화
**Evidence:** C · Data Quality / M&V Readiness  
**Web:** /cases/case68.html

## 현장 질문
보일러 효율 KPI의 분모인 Steam Flow가 잘못 측정된다면 호기 Ranking과 절감량을 신뢰할 수 있는가?

## 핵심 문제
보일러 원단위는:

**N㎥/ton = Fuel Gas Flow(N㎥) ÷ Steam Production(ton)**

으로 계산된다. Steam Flow가 Bias되면 효율 Ranking과 M&V가 모두 왜곡된다.

관련 분석자료에서는 정상 계측 설비 중심의 보일러 가스 원단위가 약 **43.9~49.6 Nm³/ton**으로 정리되어 있었고, 일부 Steam Flow 계측값은 비정상이므로 **계측기 교정 후 정량 절감량을 산정**해야 한다고 명시했다.

## Data Quality 절차
- Meter Inventory / Engineering Unit
- Range / Zero / Freeze / Spike
- Timestamp / Missing / Duplicate
- Gas–Steam Trend
- Pressure / Temperature Compensation
- Operating State Tagging
- Mass / Energy Consistency
- Reference 비교 / Calibration
- 정상구간 Tagging
- KPI 재계산
- M&V Boundary 고정

기동·정지 구간의 높은 순간 원단위와 계측오류를 구분하고, 제외 데이터는 이유·기간·원시값·교정이력을 기록한다.

## M&V
이상계측 설비의 값으로 절감률을 만들지 않는다. 정상성이 확인된 시간구간과 설비만 임시 Benchmark에 사용하고, 계측교정 후 동일 Boundary에서 다시 평가한다.

## Evidence Boundary
43.9~49.6 Nm³/ton은 정상설비의 관찰 범위이지 절감률이 아니다. 계측이상 설비에 대해 임의 절감액을 산정하지 않는다.

## Consultant's Point
정교한 AI·회귀모델보다 먼저 필요한 것은 **분자와 분모를 믿을 수 있는 계측체계**다. Data Quality Gate를 통과한 데이터만 분석·M&V에 사용한다.
