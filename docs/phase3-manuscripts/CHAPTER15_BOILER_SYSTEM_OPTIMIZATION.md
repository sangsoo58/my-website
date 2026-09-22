# Chapter 15 — 보일러 시스템 운전최적화

**편집상태:** ROUND 2 BOOK-STYLE DRAFT  
**Expanded Edition NEW CHAPTER**  
**CASE65~69**

## CHAPTER 15
# 보일러 시스템 운전최적화

**같은 Steam Demand를 더 적은 연료로 공급하려면 어느 보일러를 몇 대, 어떤 부하·연소·압력조건으로 운전해야 하는가?**

보일러 연료효율은 정격효율만으로 결정되지 않는다. 호기별 상태, 실제 부하율, Burner 연소조건, Steam Flow 계측신뢰성, Header Pressure와 Distribution Loss가 동시에 영향을 준다.

**CHAPTER LENS |** Steam Demand와 공급압력을 안정적으로 만족하면서 Boiler System의 **N㎥/ton**을 최소화하는 Selection·Staging·Combustion·Pressure Rule은 무엇인가?

---

## CASE 65 | 응용사례 — 호기별 원단위와 우선운전

동일 30 ton/h 보일러의 Change-over Test에서:

- 2호기: **66.62 N㎥/ton**
- 3호기: **70.12 N㎥/ton**
- 차이: **3.5 N㎥/ton**
- #3 → #2 교체운전: 원단위 약 **5% 개선**

완료자료의 경제성은 평균 증발량 약 25 ton/h, 적용시간 약 3,600 h/년과 당시 가스단가를 기준으로 약 **187.6백만원/년**, 즉 약 **1.8억원/년**이었다.

**EVIDENCE A | Verified Saving**

호기별 실제 원단위를 이용해 Priority를 정하되, 저효율 호기는 설비폐기의 대상이 아니라 추가 연소·열교환·계측진단의 우선대상으로 관리한다.

---

## CASE 66 | 응용사례 — 저부하 원단위와 Boiler Staging

현장자료에서는 **부하율 40% 이하에서 원단위 상승**이 관찰되었다.

30 ton/h 보일러 1대와 15 ton/h 보일러 2대 등 용량조합을 바꾸어 Steam Demand와 System N㎥/ton의 관계를 검토했다.

**CASE LESSON |** 목표는 최소 가동대수가 아니라 Steam Demand를 만족하면서 각 보일러를 효율적인 부하영역에 두는 것이다.

40%는 해당 프로젝트의 관찰값이며 다른 Boiler의 보편 Threshold로 사용하지 않는다.

---

## CASE 67 | 응용사례 — O₂·Stack Temperature와 연료 원단위

원자료는 배기가스 온도와 O₂를 보일러 효율의 주요 영향인자로 분석했다.

- Stack Temperature가 낮은 조건에서 효율이 유리한 경향
- O₂ 농도가 낮은 조건에서 효율이 유리한 경향

그러나 O₂를 무조건 낮추는 것이 목표는 아니다. 과도한 Excess Air는 Stack Loss를 키우지만 O₂가 지나치게 낮아지면 CO·미연분·Flame Stability 문제가 발생할 수 있다.

**Trend → Correlation → 유사부하 비교 → Sensor 검증 → Burner Test → N㎥/ton 재검증**

의 순서로 접근한다.

**EVIDENCE B/C |** 상관관계는 개선가설이며 독립적인 절감성과가 아니다.

---

## CASE 68 | DEEP DIVE — Steam Flow 계측 이상과 M&V Readiness

보일러 원단위는 다음처럼 계산한다.

**N㎥/ton = Fuel Gas(N㎥) ÷ Steam Production(ton)**

분모인 Steam Flow가 틀리면 효율 Ranking과 M&V 전체가 왜곡된다.

정상 계측 설비에서는 약 **43.9~49.6 N㎥/ton** 수준의 원단위가 정리되어 있었지만, 일부 Steam Flow 계측값은 비정상으로 판단되어 **계측기 교정 후 정량 절감량 산정**이 필요하다고 명시되었다.

Data Quality 절차:
- Range / Zero / Freeze / Spike
- Timestamp / Missing / Duplicate
- Pressure / Temperature Compensation
- Fuel–Steam 물리적 정합성
- Calibration / Reference Test
- 정상구간 Tagging
- KPI 재계산
- M&V Boundary 고정

**CASE LESSON |** 분석모델보다 먼저 분자와 분모를 믿을 수 있어야 한다.

---

## CASE 69 | 응용사례 — Steam Supply Pressure 최적화

Steam Header Pressure는 높은 것이 항상 안전하고 효율적인 것은 아니다.

필요 압력은 가장 불리한 사용처에서 역산한다.

**Required Header Pressure ≈ Critical User Minimum Pressure + Distribution ΔP + Operating Margin**

Set Point를 단계적으로 낮추면서 Critical User Pressure, Steam Demand, Gas/Steam KPI를 확인한다.

**EVIDENCE B/C |** 현재 Source에서는 Pressure 조정만의 독립적인 최종 절감성과가 확인되지 않는다.

---

## CHAPTER 15 SYNTHESIS

보일러 시스템 최적화는 다음 다섯 질문으로 구성된다.

1. **Selection** — 어느 보일러가 실제로 효율적인가?
2. **Staging** — 현재 Steam Demand에 몇 대가 필요한가?
3. **Loading** — 각 호기에 얼마의 부하를 배분할 것인가?
4. **Combustion** — O₂·Stack Temperature·Burner 상태가 원단위에 어떤 영향을 주는가?
5. **Pressure** — 필요한 Steam Service를 유지하면서 Header Pressure를 어디까지 낮출 수 있는가?

그리고 모든 판단의 전제는 **Fuel Gas와 Steam Flow의 신뢰성**이다.

## CHAPTER 15 REVIEW

- 보일러는 가스량이 아니라 N㎥/ton으로 비교한다.
- Selection과 Staging을 구분한다.
- 저부하 운전영역은 현장별로 직접 찾는다.
- O₂와 Stack Temperature는 원인진단 변수로 사용한다.
- 비정상 Steam Meter로 절감률을 만들지 않는다.
- Pressure는 Critical User 요구조건에서 역산한다.
- Verified / Potential / Direction을 각각 구분한다.
