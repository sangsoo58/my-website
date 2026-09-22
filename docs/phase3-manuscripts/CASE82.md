# CASE 82 | DEEP DIVE 후보 — Peak·Load Factor 기반 데이터센터 계약전력 적정성 진단

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 5 · Proposed Chapter 24 · 데이터센터 PUE와 냉방 최적화
**Evidence:** Scenario-based Cost Saving / Energy KPI와 Cost KPI 분리  
**Web:** /cases/case82.html

## 현장 질문
전기요금이 높을 때 설비 kWh 절감만 보기 전에 실제 Peak와 계약전력이 서로 적정한지 확인하면 기본요금 절감기회를 찾을 수 있는가?

## 분석자료
센터별 다음 항목을 비교했다.

- 전기소비량
- 전기요금
- 계약전력
- 요금적용전력
- Peak
- 기본요금
- IT Energy / PUE
- Load Factor

대표 분석센터:
- 계약전력: **20,000 kW**
- 2016년 요금적용전력: **6,000 kW**
- 실제 Peak: **4,328 kW**
- Peak / Contract Power: **22%**
- IDC Load Factor: **37%**
- 기본요금 비중: **31%**

## 시나리오
향후 부하증가와 운영 Risk를 고려하면서 계약전력 **20,000 → 12,000 kW** 조정안을 검토했다.

예상 비용절감은 약 **167백만원/년**, 즉 **1.67억원/년**으로 제시되었다.

## 핵심 구분
계약전력 변경은 설비 효율개선과 다르다.

- **Energy KPI:** kWh, kW/RT, PUE 등
- **Cost KPI:** 기본요금, 계약전력 조건, 원/년

계약변경으로 기본요금이 줄어도 설비 kWh가 감소한 것은 아니다.

또한 계약전력 적정화와 Peak Demand Reduction은 서로 다른 문제다. 계약조건을 조정하면서도 향후 Peak 증가 Risk와 신뢰성을 고려해야 한다.

## Evidence Boundary
1.67억원/년은 실제 계약변경 후 검증된 절감실적이 아니라 **12,000 kW 계약변경 시나리오의 예상 비용효과**다. Energy Saving(kWh)으로 표현하지 않는다.

## Consultant's Point
에너지비용 개선에서는 **에너지 사용량을 줄이는 문제와 계약조건을 최적화하는 문제를 분리**해야 한다.
