# Chapter 23 확장 원고 — 신축건물 Energy Modeling

**편집상태:** ROUND 2 BOOK-STYLE DRAFT  
**Expanded Edition Chapter 23 / 기존 Chapter 22에서 +1 이동**  
**CASE48~51 추가**

## DUPLICATION CONTROL

CASE48·51은 현재 출간본의 기존 Energy Modeling CASE와 동일 프로젝트의 Deep Dive Companion으로 편집한다.

- CASE48 ↔ CASE36: 동일 DOE-2.1E 설계검토 계열. CASE36은 개요, CASE48은 133층 복합건물의 용도·월별·1차에너지 상세.
- CASE51 ↔ CASE35: 동일 LEED Appendix G Performance Rating 계열. CASE35는 개요, CASE51은 72층 모델·Rotation·Cost vs Site Energy 상세.
- CASE49·50은 별도 Parametric Study로 유지하되 CASE50은 Source Reconciliation Hold를 유지한다.

같은 모델의 수치를 두 CASE의 독립성과처럼 합산하지 않는다.

## Chapter Lens

실제 운영데이터가 존재하지 않는 신축건물에서 설계대안의 에너지성능을 어떻게 비교할 것인가?

Energy Modeling의 목적은 미래 사용량을 정확히 맞히는 것만이 아니다. 동일한 기상·Schedule·용도조건에서 외피·조명·HVAC·Plant·에너지원의 영향을 분리하고, 설계 의사결정 전에 대안의 상대적 성능을 비교하는 데 있다.

### CASE 48 | 응용사례 — 133층 초고층 복합건물 DOE-2.1E Simulation

업무·판매·호텔·주거·문화시설이 결합된 133층 복합건물을 용도별 Zone과 Schedule로 나누어 DOE-2.1E 모델을 구축했다.

- 전체 연면적 약 **496,320㎡**
- 공조면적 약 **362,803㎡**
- 연간 에너지 요구량 약 **109,597 MWh/년**
- 연간 소요에너지 약 **85,122 MWh/년**

End-use 요구량은 냉방 약 34,630, 조명 약 26,911, 급탕 약 27,168 MWh/년 등으로 계산되었다.

업무시설은 1차에너지 소요량 약 **263 kWh/㎡·년**으로 당시 1등급 기준인 300 kWh/㎡·년 미만과 비교해 예상 1등급 수준으로 검토되었다.

**EVIDENCE D |** 모두 설계단계 Simulation 결과이며 준공 후 실측성과가 아니다.

### CASE 49 | 응용사례 — 18개 설계변수 Parametric Simulation

가상 상업용 오피스 Baseline에서 한 번에 하나의 변수를 변경하였다.

대표 결과:
- 벽체 보온 70→90 mm: 약 0.0%
- Floor Weight 105→45 kg/㎡: +1.1%
- 조명밀도 30→10 W/㎡: **-18.1%**
- 냉동기 구성 변경: **-1.6%**
- 외기냉방 적용: -0.7%
- 창면적 63→40%: -1.7%
- SC 0.33→0.75: **+9.3%**
- 자연조명 적용: **-14.3%**

**CASE LESSON |** 예상과 반대의 결과도 중요한 설계정보다. Simulation은 정답을 주는 도구가 아니라, 어떤 설계변수에 더 많은 검토가 필요한지 보여주는 의사결정 도구다.

### CASE 50 | 응용사례 — 창면적·유리성능 Parametric Study

동일 오피스 모델에서 창호변수만 변경했다.

- WWR 63%→40%: 약 **-1.7%, -54백만원/년**
- SC 0.33→0.75: 약 **+9.3%, +291백만원/년**
- 커튼 50% 적용: 약 **-1.0%, -31백만원/년**

**SOURCE HOLD |** 기존 Master metadata에 보육시설 Passive House Boundary 흔적이 남아 있어 Source Reconciliation 완료 전에는 CASE50을 Expanded Edition 본문에 포함하지 않는다.

### CASE 51 | 응용사례 — ASHRAE 90.1 Appendix G / LEED Energy Modeling

72층 복합건물을 eQUEST3-64와 ASHRAE 90.1-2004 Appendix G에 따라 Proposed와 Baseline으로 비교했다.

Baseline은 0°, 90°, 180°, 270° 네 방향으로 Simulation했고 평균 연간 에너지비용은 약 **3.721백만 USD/년**이었다.

Proposed는 Baseline보다 **연간 에너지비용 약 4% 낮게** 평가되었다. 그러나 **Site Energy Consumption은 약 36% 더 크게** 계산되었다.

**CRITICAL READING |** “에너지비용 4% 개선”을 “에너지사용량 4% 절감”으로 표현하면 안 된다.

## Chapter Synthesis

Energy Modeling에서는 다음 네 가지를 구분한다.

1. **Input Assumption** — 기상·Schedule·외피·내부부하·HVAC
2. **Baseline Rule** — 무엇과 비교하는가
3. **Performance Metric** — Site/Source Energy, Cost, Peak, Carbon
4. **Actual Performance** — 준공 후 M&V와는 별도의 문제

### Chapter Review

- 설계단계 Simulation과 준공 후 실제 절감성과를 구분한다.
- 하나의 총량보다 End-use와 월별 Profile을 함께 본다.
- Parametric Study는 한 번에 한 변수의 영향을 비교한다.
- Energy Cost와 Energy Quantity를 같은 KPI로 취급하지 않는다.
- 법규·인증기준은 프로젝트 당시 버전과 현재 버전을 구분한다.
