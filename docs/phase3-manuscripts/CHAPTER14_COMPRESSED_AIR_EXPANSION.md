# Chapter 14 확장 원고 — 공기압축기 시스템 운전최적화

**편집상태:** ROUND 2 BOOK-STYLE DRAFT  
**기존 Chapter 14 유지 / CASE52,54,59,61 추가**

## CHAPTER 14
# 공기압축기 시스템 운전최적화

**압축기를 적게 켜는 것이 아니라, 필요한 압력과 유량을 가장 적은 전력으로 공급할 수 있는가?**

공기압축기 전력은 CDA 수요, 공급압력, 가동대수, Loading/Unloading, IGV/BOV와 압력손실의 영향을 동시에 받는다. 따라서 최적화의 목적은 대수를 최소화하는 것이 아니라 생산에 필요한 유량·압력을 안정적으로 만족하면서 **System Specific Energy**를 최소화하는 것이다.

**CHAPTER LENS |** Demand·Pressure·Sequencing·Equipment Performance를 하나의 시스템으로 연결하여 kWh/Nm³를 어떻게 최소화할 것인가?

기존 CASE16~18이 대형 자동차·섬유·화학공장의 UPI와 공급압력·가동대수 분석을 보여준다면, 확장 CASE52·54·59·61은 더 짧은 주기의 운전상태와 Header Pressure, 저효율 호기, Demand Peak를 실제 운전행동으로 연결한다.

---

## CASE 52 | DEEP DIVE — Loading/Unloading과 적정 가동대수 Test

10초 간격으로 소비전력, CDA Flow, Header Pressure, 가동대수와 Loading/Unloading을 분석했다.

압축기가 Unloading 상태에 있다고 해서 전력소비가 0이 되는 것은 아니다. 따라서 “켜져 있었던 시간”보다 **유효하게 압축공기를 생산한 시간**을 분리해 관리한다.

Test 과정은:

**Demand Trend → 가동대수 → Load/Unload → Pressure → Total kW → System Specific Energy**

순으로 진행한다.

한 대를 정지했을 때의 절감량을 Nameplate kW로 계산하지 않고, 남은 압축기의 부하변화를 포함한 **시스템 전체 Before/After 전력**으로 확인한다.

**CASE LESSON |** 적정 가동대수는 평균수요가 아니라 Peak와 변동폭, Pressure Stability를 만족해야 한다.

---

## CASE 54 | 응용사례 — Header Pressure 기반 공급압력 최적화

개별 Compressor 토출압력보다 공통 Header와 Critical End-use 요구압력을 기준으로 Set Point를 재구성한다.

개념식은 다음과 같다.

**Required Header Pressure ≈ Critical End-use Minimum Pressure + Distribution ΔP + Safety Margin**

Header와 말단 사이의 Pressure Drop이 크다면 Set Point를 높여 보상하기보다 Filter·Dryer·배관·밸브·국부 Peak를 먼저 점검한다.

당시 개선검토에는 약 **2.3억원/년**의 예상효과가 제시되었다.

**EVIDENCE C | Improvement Potential**

실제 검증에서는 Header·말단 Pressure, Flow, Total Compressor kW, 가동대수와 Loading/Unloading을 같은 시간축에서 비교한다.

---

## CASE 59 | 응용사례 — 저효율 Compressor 진단

동일·유사 Flow·Pressure 조건에서 특정 호기의 Specific Energy가 지속적으로 높으면 성능저하 후보로 분류한다.

호기 Ranking은 폐기 판단이 아니라 다음 점검의 우선순위를 정하는 도구다.

가능한 원인:
- 기계적 성능저하
- Cooling 상태
- Filter / Dryer 차압
- Pressure Condition
- Sensor Error
- Part-load / Idling

장기간 데이터가 있으면 Flow·Pressure·Load를 이용한 정상 Specific Energy Model을 만들고 실측과 예측의 Residual로 성능 Drift를 찾을 수 있다.

**EVIDENCE C |** 저효율 호기 점검·개선활동은 확인되지만 독립 최종 절감금액은 부여하지 않는다.

---

## CASE 61 | 응용사례 — CDA Demand Pattern과 Peak 완화

현장자료에서는:
- Idling Compressor **1~2대**
- 수요대비 약 **2대 추가가동**
- 평균 부하율 약 **74%**
- 상시 무부하 Compressor 2대 약 **440 kW**

등의 배경이 확인되었다.

이 경우 문제를 “압축기 용량 부족”으로만 해석하지 않고 Demand Peak와 변동폭을 먼저 분석한다.

개선방향:
- 시간대별 CDA Demand 분석
- Peak 발생원인 추적
- 공정 사용시점 조정
- Receiver 활용
- 최소운전대수와 Sequencing 재설정

**EVIDENCE C |** Demand 평탄화 활동의 독립 최종 절감량·금액은 귀속하지 않는다.

---

## CHAPTER 14 SYNTHESIS

공기압축기 최적화의 네 축은 다음과 같다.

1. **Demand** — 실제 필요한 Flow는 얼마인가?
2. **Pressure** — 말단 요구압력을 만족하는 최소 Header Pressure는 얼마인가?
3. **Sequencing** — 어떤 Compressor를 몇 대 운전할 것인가?
4. **Condition** — 특정 호기의 성능이 정상인가?

이 네 축을 System Specific Energy 하나로 연결한다.

**Production Demand → Required Flow/Pressure → Compressor Combination → Loading/Unloading → Total kW → kWh/Nm³**

## M&V

개선 후에는 공급유량·말단압력·생산조건을 반영한 Adjusted Baseline과 Actual을 비교한다. 생산서비스 수준이 달라졌다면 단순 kWh 감소를 절감으로 인정하지 않는다.

## CHAPTER 14 REVIEW

- 시스템 UPI는 전체 Compressor 전력 / 실제 CDA 공급량으로 평가한다.
- Loading/Unloading은 별도 운전상태로 기록한다.
- 가동대수와 공급압력을 함께 최적화한다.
- Header Pressure는 Critical End-use에서 역산한다.
- Demand Peak를 공급용량 부족과 구분한다.
- 호기 Ranking은 정비 Priority로 활용한다.
- Expected Effect와 Verified Saving을 분리한다.
