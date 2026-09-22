# Chapter 20 확장 원고 — 발전소 보조기기

**편집상태:** ROUND 2 BOOK-STYLE DRAFT  
**Expanded Edition Chapter 20 / 기존 Chapter 19에서 +1 이동**  
**기존 CASE28 유지 / CASE75,76 추가**

## DUPLICATION CONTROL

CASE28은 7개 발전호기의 소내전력률·펌프·Fan을 함께 다룬 Umbrella CASE다.

- CASE75는 동일 분석경계에서 **호기별 Auxiliary Power Ratio Benchmark**를 분리한 Sub-case.
- CASE76은 **급수·복수·해수펌프의 가동대수·VFD·유량·압력**으로 내려간 Sub-case.

CASE28의 제안목표 2%·4.6억원/년을 CASE75·76의 독립성과로 재사용하거나 합산하지 않는다.

## CHAPTER 20
# 발전소 보조기기

**발전량과 발전효율을 유지하면서 발전소 내부에서 소비되는 전력을 얼마나 줄일 수 있는가?**

발전소에서는 급수펌프·복수펌프·해수펌프, FDF·IDF 등 대형 보조기기가 지속적으로 운전된다. 따라서 보조기기 최적화는 펌프나 Fan 한 대의 kW를 최소화하는 문제가 아니라 **동일 발전부하에서 전체 Auxiliary Power Ratio를 낮추는 문제**다.

**CHAPTER LENS |** 발전량·진공도·유량·압력과 신뢰성 조건을 유지하면서 호기 Benchmark, 가동대수, VFD와 운전설정을 어떻게 조정해야 소내전력률을 최소화할 수 있는가?

기존 CASE28이 7개 발전호기의 소내전력률과 펌프·Fan 통합진단을 다뤘다면, CASE75는 호기별 Benchmark를 개선 우선순위로 연결하고 CASE76은 다수 병렬펌프의 가동대수·유량·압력·VFD 운전으로 더 깊게 들어간다.

---

## CASE 28 | 응용사례 — 소내전력률·펌프·팬 통합 운전최적화

7개 발전호기를 대상으로 Auxiliary Power Ratio와 급수·복수·해수펌프, FDF·IDF의 부하·제어상태를 비교했다.

- 호기별 Auxiliary Power Ratio: 약 **3.2~4.3%**
- 우수호기 대비 최대 성능편차: 약 **34%**
- 주요 보조기기: 약 **28 MW**
- 당시 연간 전력비: 약 **231억원**
- 제안단계 목표: 약 **2%, 4.6억원/년**

**EVIDENCE |** 2%와 4.6억원/년은 제안단계 목표이며 실제 검증성과가 아니다.

---

## CASE 75 | 응용사례 — 호기별 Auxiliary Power Ratio Benchmark

동일한 발전기능을 수행하는 호기를 단순 보조전력 kW로 비교하면 발전량 차이가 섞인다. 따라서 발전량으로 정규화한 **Auxiliary Power Ratio**를 사용한다.

진단 흐름:

**Generation Load → Auxiliary Power Ratio → Equipment Drill-down → Performance Gap → Improvement Priority**

소내전력률이 상대적으로 높은 호기를 찾은 뒤 급수·복수·해수펌프, FDF·IDF 등 주요 보조기기의 kW, 유량, 압력, 가동대수와 제어상태로 내려간다.

**BENCHMARK |** Performance Gap 자체는 절감량이 아니다. 같은 발전부하에서 어떤 설비와 운전조건이 Gap을 만드는지를 확인하는 Screening Evidence다.

**EDITORIAL NOTE |** 현재 Web metadata의 sector는 데이터센터로 남아 있지만 실제 CASE 내용은 발전소다. Expanded Edition에서는 발전소 보조기기로 편성한다.

---

## CASE 76 | 응용사례 — 급수·복수·해수펌프 가동대수·VFD 통합 최적화

사례의 병렬 Pump 규모는 다음과 같다.

- 급수펌프: **14대**
- 복수펌프: **14대**
- 해수펌프: **17대**

발전부하에 필요한 Flow·Head·Condenser Condition을 먼저 정의하고 실제 가동대수와 Pump kW·VFD Speed를 같은 시간축에서 비교한다.

핵심 흐름:

**Generation Load → Required Flow/Head → Required Units → VFD Speed → Total Pump kW**

낮은 발전부하에서도 고정된 Pump 대수가 계속 운전되는지, Valve Throttling이나 불필요한 차압이 존재하는지 확인한다.

한 대 OFF 또는 Speed Reduction Test는 단계적으로 수행하고, 다음 조건을 함께 검증한다.

- 발전량
- Feed-water 공급조건
- Condenser Vacuum
- Sea-water / Cooling Flow
- Pump Pressure
- Turbine / Boiler 운전 안정성

**EVIDENCE B/C |** 실제 발전소 보조기기 분석구조와 운전최적화 방향은 확인되나 CASE76만의 독립 최종 절감률·금액은 현재 확정하지 않는다.

---

## CHAPTER 20 SYNTHESIS

발전소 보조기기 최적화는 세 단계로 정리할 수 있다.

1. **Normalize** — 발전량으로 보조전력을 정규화한다.
2. **Benchmark** — 호기·동형설비 사이의 Performance Gap을 찾는다.
3. **Optimize** — Pump/Fan의 가동대수·VFD·Valve/Damper·Set Point를 조정한다.

최종 목적함수는 개별 Pump kW가 아니다.

**Minimum Auxiliary Power subject to Generation Output, Efficiency and Reliability Constraints**

이다.

## M&V

발전량·발전부하를 기본 조정변수로 두고, 복수기·해수계통은 해수온도·진공도 등 발전효율에 영향을 주는 조건을 함께 반영한다.

**Saving = Adjusted Baseline − Actual**

단, 개선 전·후 발전효율이나 서비스조건이 달라졌다면 단순 소내전력 감소를 절감성과로 인정하지 않는다.

## CHAPTER 20 REVIEW

- 발전량과 보조전력을 같은 시간축에서 연결한다.
- Auxiliary Power Ratio로 호기 성능을 정규화한다.
- Benchmark Gap을 절감률로 해석하지 않는다.
- 펌프·Fan의 실제·필요 가동대수를 비교한다.
- VFD·밸브·댐퍼와 압력·유량조건을 발전부하와 연계한다.
- 복수기·해수펌프는 보조전력과 발전효율의 Trade-off를 함께 본다.
- 최종 성과는 발전부하를 반영한 M&V로 검증한다.
