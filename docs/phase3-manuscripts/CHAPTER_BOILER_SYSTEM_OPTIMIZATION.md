# PART 4 신규 Chapter 후보 — 보일러 시스템 운전최적화

**편집상태:** PHASE 3 CHAPTER DRAFT / NUMBER NOT ASSIGNED  
**포함 CASE:** CASE65~69

## Chapter Lens

Steam Demand를 안정적으로 만족하면서 Boiler System 전체의 연료 원단위를 최소화하려면 **어느 호기를 선택하고, 몇 대를 운전하며, 어떤 부하·연소·압력조건으로 운전해야 하는가?**

보일러 최적화는 단순히 정격효율이 높은 설비를 선택하는 문제가 아니다. 실제 Steam Demand, 부하율, 연소상태, 계측신뢰성, Steam Header Pressure와 Distribution Loss가 동시에 결과를 만든다.

## Chapter Core Flow

**Measurement Quality → Unit Efficiency → Selection → Staging/Loading → Combustion → Pressure → M&V**

### CASE65 · Unit Selection
호기별 N㎥/ton을 실제 교체운전으로 비교하여 고효율 호기를 우선운전한다.  
2호기 66.62 vs 3호기 70.12 N㎥/ton, 약 5% 개선, 약 1.8억원/년 프로젝트 성과.

### CASE66 · Staging / Loading
Steam Demand와 Online Capacity를 비교하여 저부하 다대운전을 줄인다.  
현장자료에서는 부하율 40% 이하에서 원단위 상승이 관찰되었다.

### CASE67 · Combustion
Stack Temperature와 O₂를 원단위 영향인자로 분석하여 Excess Air와 열손실의 원인을 좁힌다.  
상관관계는 개선가설을 만드는 근거이며 독립 절감성과로 해석하지 않는다.

### CASE68 · Data Quality / M&V Readiness
Steam Flow가 잘못되면 N㎥/ton 자체가 왜곡된다.  
계측기 교정·시간동기·물리적 정합성을 확인한 뒤 정량성과를 계산한다.

### CASE69 · Steam Pressure
Critical User 요구압력과 Distribution ΔP에서 Header Set Point를 역산한다.  
가장 낮은 압력이 아니라 최소 충분 Pressure를 찾는다.

## Chapter Synthesis

보일러 시스템의 운전최적화는 다음 다섯 질문으로 정리할 수 있다.

1. **Selection** — 어느 보일러가 실제로 효율적인가?
2. **Staging** — 현재 Steam Demand에 몇 대가 필요한가?
3. **Loading** — 각 호기에 얼마의 부하를 배분할 것인가?
4. **Combustion** — O₂·Stack Temperature·Burner 상태가 원단위에 어떤 영향을 주는가?
5. **Pressure** — 사용처 서비스조건을 유지하면서 Steam Pressure를 얼마나 낮출 수 있는가?

그리고 이 모든 판단의 전제는 **Steam Flow·Fuel Gas·Pressure·Temperature 계측의 신뢰성**이다.

## KPI와 Boundary

Primary KPI:
- N㎥/ton
- Boiler Load Factor
- Steam Production
- Fuel Gas Consumption
- Steam Header / Critical User Pressure
- Flue-gas Temperature / O₂

성과평가에서는 프로젝트별 Measurement Boundary를 고정하고 Actual Saving, Verified Test, Improvement Potential, Optimization Direction을 구분한다.

## Chapter Review

- 호기별 정격효율보다 실제 N㎥/ton을 비교한다.
- 저부하 운전영역을 확인하고 Steam Demand에 맞는 가동대수·용량조합을 만든다.
- 연소데이터는 상관관계에서 끝내지 않고 Sensor 검증과 Test로 연결한다.
- Steam Flow의 정합성이 확보되지 않으면 절감성과 산정을 보류한다.
- Pressure Set Point는 Critical User의 최소 요구조건에서 역산한다.
- 완료성과와 잠재량·개선방향을 같은 표현으로 묶지 않는다.

## Chapter Placement Note

현재 출간본 PART 4의 Chapter 14~19 사이에 Boiler 전용 Chapter가 없다. CASE65~69는 하나의 완결된 Boiler System Story를 형성하므로 **PART 4 내 신규 Chapter로 독립 편성하는 안을 권장**한다.

Chapter 번호는 CASE42~82 전체 확장 후 최종 목차 재배열 때 확정한다.
