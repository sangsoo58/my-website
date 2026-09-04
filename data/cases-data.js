/*
 * 실제 수행 사례 데이터
 * ------------------------------------------------------------
 * 공개 원칙
 * 1) status: "published" 인 사례만 웹에 노출됩니다.
 * 2) 절감률은 실제 수행 프로젝트에서 도출된 "1차 절감 잠재량"이며,
 *    실증 완료 절감실적이 아닌 경우 verificationStatus를 반드시 표시합니다.
 * 3) 신규 사례 추가 방법은 /docs/CASE_UPLOAD_GUIDE.md 참조.
 */
window.ENERGY_CASES = [
  {
    id: "manufacturing-case-a",
    status: "published",
    company: "국내 제조 A사",
    category: "열처리 · M&V",
    energyType: "전기",
    equipment: "열처리로#3 · 템퍼로#1",
    title: "SHAFT 열처리 공정의 Baseline 구축과 표준운전 조건 최적화",
    short: "동일 432kg Batch의 소비량 편차와 표준소요시간을 분석하고, 생산중량 기반 WLS Baseline으로 절감성과 검증 체계를 설계한 사례입니다.",
    potential: "4.5% · 9.0%",
    potentialLabel: "설비별 1차 절감 잠재량",
    verificationStatus: "데이터 기반 시나리오 추정 · M&V 실증 후 확정",
    tags: ["SHAFT", "WLS", "생산중량", "Baseline", "M&V"],
    period: "2026.02.01 ~ 2026.04.30",
    problem: [
      "열처리로#3에서 동일 생산중량 432kg 조건에서도 전력사용량이 약 180~192kWh 범위로 변동",
      "템퍼로#1은 동일 432kg 조건에서 전력사용량이 약 10~19kWh로 변동",
      "표준소요시간을 초과하는 운전과 로딩·대기·가열 Profile 차이의 영향 확인 필요"
    ],
    dataUsed: ["MES 일별 생산중량·생산수량·소요시간", "EMS 설비별 전력사용량(kWh)", "Noise 및 영향점 제거 후 정상 운전 데이터"],
    baselineModels: [
      {
        name: "열처리로#3",
        formula: "Ebase_day = 0.4325 × Wday + 1.7336",
        method: "WLS",
        performance: "Adjusted R² 0.9995 · RMSE 4.865kWh · CV(RMSE) 0.93%"
      },
      {
        name: "템퍼로#1",
        formula: "Ebase_day = 0.0333 × Wday + 0.3784",
        method: "WLS",
        performance: "Adjusted R² 0.9898 · RMSE 2.097kWh · CV(RMSE) 4.86%"
      }
    ],
    scenarios: [
      {
        name: "열처리로#3 · 동일 432kg 저소비 운전",
        baseline: "188.6 kWh",
        target: "180 kWh",
        saving: "4.5%",
        note: "432kg Baseline 대비 실제 저소비 운전구간을 1차 목표로 설정"
      },
      {
        name: "템퍼로#1 · 표준소요시간 150분 운전",
        baseline: "14.8 kWh",
        target: "13.4 kWh",
        saving: "9.0%",
        note: "432kg Baseline과 소요시간 150분 보조모델의 목표 소비량 비교"
      }
    ],
    verification: "동일 SHAFT·432kg 조건에서 목표온도, 가열 Profile, 로딩조건을 고정하고 표준시간 초과일을 별도 관리하여 Baseline−Actual 방식으로 월간 절감성과를 검증합니다.",
    sourceNote: "에스코프로 실증사이트 MES·EMS 분석 및 M&V Plan 기반"
  },
  {
    id: "manufacturing-case-b",
    status: "published",
    company: "국내 제조 B사",
    category: "열처리 · Baseline",
    energyType: "전기",
    equipment: "ACF#3 · 템퍼로#1 · 템퍼로#2",
    title: "ACF#3 에너지 고소비 작업 정상화와 설비별 Baseline 구축",
    short: "E5 RETAINING PLATE 동일 중량 조건의 소비량 편차를 분석하고, ACF#3와 템퍼로 설비별 생산변수를 반영한 WLS Baseline을 구축한 사례입니다.",
    potential: "4.5%",
    potentialLabel: "ACF#3 1차 절감 잠재량",
    verificationStatus: "데이터 기반 시나리오 추정 · M&V 실증 후 확정",
    tags: ["ACF#3", "E5", "WLS", "생산중량", "M&V"],
    period: "ACF#3 2026.02.01~07.13 · 템퍼로 2026.04.01~06.30",
    problem: [
      "ACF#3 동일 생산중량 134kg 조건에서 전력사용량이 약 83~360kWh로 크게 변동",
      "표준소요시간이 118~340분으로 변동하여 설비대기·품질재작업·운전조건 영향 확인 필요",
      "템퍼로#1·#2는 다품목 생산으로 생산중량·소요시간·생산수량을 함께 고려할 필요"
    ],
    dataUsed: ["ACF#3 및 템퍼로 MES 생산정보", "설비별 EMS 전력사용량(kWh)", "일별 정합 후 Noise·영향점 제외 데이터"],
    baselineModels: [
      {
        name: "ACF#3",
        formula: "Ebase_day = 1.5287 × Wday − 21.5208",
        method: "WLS",
        performance: "Adjusted R² 0.9481 · RMSE 19.680kWh · CV(RMSE) 9.12%"
      },
      {
        name: "템퍼로#1",
        formula: "Ebase_day = 7.1244 + 0.0686Tday + 0.0281Wday",
        method: "WLS",
        performance: "Adjusted R² 0.8482 · CV(RMSE) 18.11%"
      },
      {
        name: "템퍼로#2",
        formula: "Ebase_day = 24.5317 + 0.1194Tday + 0.0009Qday + 0.0046Wday",
        method: "WLS",
        performance: "Adjusted R² 0.3219 · CV(RMSE) 22.80% · 예외일 관리 강화 필요"
      }
    ],
    scenarios: [
      {
        name: "ACF#3 · 동일 134kg 고소비 작업 정상화",
        baseline: "183.3 kWh",
        target: "175 kWh",
        saving: "4.5%",
        note: "기존 분석의 1/4 분위 정상 소비수준을 현실적 1차 목표로 적용"
      }
    ],
    verification: "E5 동일품목·134kg 기준으로 설비대기, 품질재작업, 목표온도와 가열 Profile을 동일하게 맞춘 뒤 M&V를 수행합니다. 템퍼로#2는 모델 오차가 상대적으로 커 예외일·운전조건 검토를 강화합니다.",
    sourceNote: "에스코프로 국내 제조 B사 MES·EMS 분석 및 M&V Plan 기반"
  },
  {
    id: "manufacturing-case-c",
    status: "published",
    company: "국내 제조 C사",
    category: "주조 · 원단위",
    energyType: "전기",
    equipment: "주조공정",
    title: "회수율 개선을 통한 주조공정 에너지 원단위 절감 잠재량 분석",
    short: "가동시간·생산톤수·회수율과 에너지 원단위의 편차를 분석하고, 회수율 향상으로 동일 에너지에서 양품 생산량을 늘리는 시나리오를 검토한 사례입니다.",
    potential: "8.4%",
    potentialLabel: "1차 절감 잠재량",
    verificationStatus: "데이터 기반 시나리오 추정 · M&V 실증 후 확정",
    tags: ["주조", "회수율", "에너지원단위", "생산톤수", "M&V"],
    period: "MES·EMS 일별 생산 및 전력 데이터 분석",
    problem: [
      "일일 가동시간이 약 7~24시간으로 변동",
      "생산톤당 에너지 원단위가 약 526~1,720kWh/ton 범위로 크게 변동",
      "회수율이 약 20~60%로 변동하여 양품 생산량과 에너지 원단위의 관계 분석 필요"
    ],
    dataUsed: ["MES 제품·LOT·용해량·Mold Count·양품/불량 정보", "EMS 전기소비량(kWh)", "생산톤수·회수율·에너지 원단위"],
    baselineModels: [
      {
        name: "시나리오 기준 원단위",
        formula: "목표 원단위 = 1,243 × (45.8 / 50) ≈ 1,139 kWh/ton",
        method: "동일 용해에너지 대비 회수율 비례 시나리오",
        performance: "실제 절감성과는 동일 재질·Charge·Mold 조건에서 M&V로 확정"
      }
    ],
    scenarios: [
      {
        name: "회수율 45.8% → 50% 개선",
        baseline: "1,243 kWh/ton",
        target: "1,139 kWh/ton",
        saving: "8.4%",
        note: "동일 용해에너지에서 양품 생산량 확대를 가정한 1차 비례 추정"
      }
    ],
    verification: "동일 재질·용해 Charge·Mold 조건에서 투입량, 양품중량, 불량량과 전력량을 동시에 계측해 회수율 개선 효과를 검증합니다. 생산톤수 확대와 대기·저부하 축소 효과는 별도로 정량화합니다.",
    sourceNote: "에스코프로 국내 제조 C사 MES·EMS 분석 및 절감잠재량 보고서 기반"
  },
  {
    id: "manufacturing-case-d",
    status: "published",
    company: "국내 제조 D사",
    category: "용해 · 주조 · M&V",
    energyType: "가스 · 전기",
    equipment: "용해로#2 · 용해로#4 · 주조기#8",
    title: "출탕량·Batch 확대를 통한 용해·주조 에너지 원단위 개선",
    short: "용해로는 출탕량 확대에 따른 가스 원단위 감소를, 주조기#8은 Batch 확대에 따른 단위 생산량당 전력사용 감소를 Baseline 모델로 평가한 사례입니다.",
    potential: "1.7% · 10.2% · 7.3%",
    potentialLabel: "설비별 1차 절감 잠재량",
    verificationStatus: "데이터 기반 시나리오 추정 · M&V 실증 후 확정",
    tags: ["용해로", "출탕량", "주조기", "GLSAR", "Batch", "M&V"],
    period: "주조기 2026.03.03~05.30 · 용해로 2026.06.08~08.05",
    problem: [
      "용해로#2·#4의 출탕량과 에너지 원단위 관계 및 원단위 편차 원인 분석 필요",
      "용해로#4가 #2 대비 높은 원단위를 보이는 원인과 출탕온도·대기시간 영향 확인 필요",
      "주조기#8은 제품별 원단위 차이와 Batch 생산수량 확대 가능성 검토 필요"
    ],
    dataUsed: ["용해로 MES 출탕량(kg) 및 EMS 가스사용량", "주조기 MES 생산수량 및 EMS 전력사용량", "제품·Recipe·Batch 정보와 일별 정합 데이터"],
    baselineModels: [
      {
        name: "용해로#2",
        formula: "U(Q) = (0.0211Q + 382.6136) / Q",
        method: "출탕량 기반 Baseline",
        performance: "Q2 62,659kg/day → Q3 67,755kg/day 시 가스원단위 0.02721 → 0.02675Nm³/kg"
      },
      {
        name: "용해로#4",
        formula: "E(Q) = 0.0230Q + 588.5107 · U(Q)=E(Q)/Q",
        method: "수정 Baseline",
        performance: "Q2 42,925kg/day → Q3 58,968kg/day 시 0.03671 → 0.03298Nm³/kg"
      },
      {
        name: "주조기#8",
        formula: "U(Q) = (2.3329Q + 747.9175) / Q",
        method: "GLSAR(Model-2) 기반",
        performance: "690 → 895EA/day 시 3.417 → 3.169kWh/EA"
      }
    ],
    scenarios: [
      {
        name: "용해로#2 · 출탕량 Q2 → Q3 확대",
        baseline: "62,659 kg/day · 0.02721Nm³/kg",
        target: "67,755 kg/day · 0.02675Nm³/kg",
        saving: "1.7%",
        note: "출탕량 확대를 통한 단위 생산량당 가스 사용량 감소"
      },
      {
        name: "용해로#4 · 출탕량 Q2 → Q3 확대",
        baseline: "42,925 kg/day · 0.03671Nm³/kg",
        target: "58,968 kg/day · 0.03298Nm³/kg",
        saving: "10.2%",
        note: "수정 Baseline 기준, Q3 생산량에서 약 220Nm³/day 절감 잠재"
      },
      {
        name: "주조기#8 · 동일 제품 Batch 확대",
        baseline: "690 EA/day · 3.417kWh/EA",
        target: "895 EA/day · 3.169kWh/EA",
        saving: "7.3%",
        note: "동일 제품·Recipe에서 Batch 크기 확대 시 단위 생산량당 전력 감소"
      }
    ],
    verification: "용해로#2·#4는 동일 운전조건에서 출탕량 Q2→Q3 확대 시 원단위 변화를 검증하고 출탕온도·대기시간을 함께 기록합니다. 주조기#8은 동일 제품·Recipe에서 Batch 크기만 비교합니다.",
    sourceNote: "에스코프로 국내 제조 D사 M&V Plan 및 수정 Baseline 절감잠재량 보고서 기반"
  },
  {
    id: "manufacturing-case-e",
    status: "published",
    company: "국내 제조 E사",
    category: "Former · 데이터분석",
    energyType: "전기",
    equipment: "FM공정 · 공기압축기",
    title: "FM공정 비가동시간 축소와 LOT 생산중량 확대를 통한 원단위 개선",
    short: "Former의 비가동시간·생산중량과 전력사용량 관계를 회귀모델로 분석하고, 대기·정지시간 축소와 LOT 생산량 확대의 절감 잠재량을 평가한 사례입니다.",
    potential: "5.4%",
    potentialLabel: "FM공정 1차 절감 잠재량",
    verificationStatus: "데이터 기반 시나리오 추정 · M&V 실증 후 확정",
    tags: ["Former", "비가동시간", "생산중량", "공기압축기", "Baseline"],
    period: "2026.06.16 ~ 2026.08.26",
    problem: [
      "LINE별 에너지 원단위 편차와 설비조건·작업자 운전방식·제품 Mix 차이 분석 필요",
      "시간가동률 향상을 위한 대기·정지시간 감축 가능성 검토",
      "LOT/BATCH 생산중량 확대를 통한 단위 생산량당 전력사용 감소 가능성 검토"
    ],
    dataUsed: ["Former 가동·비가동·부하시간 및 생산중량", "Former 전기소비량", "공기압축기 유량 및 전력량"],
    baselineModels: [
      {
        name: "FM공정",
        formula: "E = 6.8726 + 0.1167 × 비가동시간 + 0.1909 × 생산중량",
        method: "회귀 Baseline",
        performance: "R² 0.96 · 일별 Baseline−Actual 방식으로 월간 절감량 산정"
      },
      {
        name: "공기압축기",
        formula: "E = 0.1074 × 유량 + 164.9166",
        method: "유량 기반 Baseline",
        performance: "R² 0.95 · 유량과 전력량 상관계수 0.983"
      }
    ],
    scenarios: [
      {
        name: "FM공정 · 비가동시간 축소 + LOT 생산중량 확대",
        baseline: "510min/day · 2,778kg/day · 0.215kWh/kg",
        target: "410min/day · 4,100kg/day · 0.204kWh/kg",
        saving: "5.4%",
        note: "비가동시간은 Q1 수준, 생산중량은 Q3 수준을 목표로 적용"
      }
    ],
    verification: "동일 LINE·동일 제품 Mix에서 비가동시간과 생산중량만 변화시켜 비교하고, LINE별 차이는 층화하여 검증합니다. 공기압축기는 유량 기준 Baseline을 별도로 적용합니다.",
    sourceNote: "에스코프로 국내 제조 E사 MES·EMS Baseline 분석 및 최종 절감잠재량 보고서 기반"
  }

  ,{
    id: "semiconductor-cleanroom-hvac",
    status: "published",
    company: "국내 반도체 제조 A사",
    category: "반도체 · 크린룸 HVAC",
    energyType: "전기 · 가스",
    equipment: "일반용 공조기 · 크린룸 공조기 · 냉동·보일러·압축공기",
    title: "반도체 제조공장 공조·유틸리티 운전데이터 분석과 동시 냉난방 해소",
    short: "일반용 및 크린룸 공조기의 운전데이터를 분석해 냉수·스팀밸브 동시 개방 문제를 확인하고, 생산 영향이 없는 일반용 공조기부터 계절별 상충 밸브 차단과 제어 정상화를 적용한 사례입니다.",
    potential: "약 1.58억원/년",
    potentialLabel: "연간 에너지비용 절감액 추정",
    verificationStatus: "일반용 공조기 운전개선 전후 데이터 기반 연간 추정 · 크린룸은 분석 및 단계적 개선안 제시",
    tags: ["반도체", "크린룸", "AHU", "동시냉난방", "제어최적화", "Utility"],
    period: "2021 ~ 2022",
    problem: [
      "일반용 및 크린룸 공조기 운전데이터에서 냉수밸브와 스팀밸브가 동시에 개방되는 구간이 반복적으로 확인됨",
      "크린룸은 온·습도 품질조건 때문에 직접적인 운전변경에 생산 리스크가 있어 일반용 공조기와 구분한 단계적 개선전략이 필요",
      "일부 크린룸 공조기에서 냉수밸브 Hunting과 하절기 제습능력 부족이 확인되어 설정값 유지와 제어안정성 개선 검토가 필요",
      "냉동·보일러·압축공기 등 유틸리티 설비의 데이터 품질과 운전상태를 함께 점검할 필요"
    ],
    dataUsed: [
      "일반용 공조기 6대 및 크린룸 공조기 4대의 환기·공급·룸 온습도와 냉수·스팀·가습 밸브 개도 데이터",
      "공조기 On/Off 상태, 냉동기 배관 헤더 온도 등 보완된 모니터링 데이터",
      "전력·가스 사용량과 월별 에너지 소비 패턴",
      "보일러 열효율 및 공기압축기 용량·수요 검토 자료"
    ],
    baselineModels: [
      {
        name: "냉방 절감량 산정",
        formula: "Qsave,c = Qcooling × Δ냉수밸브 개도율",
        method: "개선 전·후 각 1주일의 냉수밸브 개도상태 차이로 절감 열량 산정",
        performance: "냉수·냉각수 펌프 및 냉각탑을 포함한 냉방시스템 전체 COP 2.0 적용 · 보고서 당시 전력단가 120원/kWh"
      },
      {
        name: "난방 절감량 산정",
        formula: "Qsave,h = Qheating × Δ스팀밸브 개도율",
        method: "개선 전·후 각 1주일의 스팀밸브 개도상태 차이로 절감 열량 산정",
        performance: "보일러효율 95% 적용 · 연간 추정에는 보고서 당시 가스단가 35.5652원/MJ 적용"
      },
      {
        name: "운전개선 전략",
        formula: "하절기: 스팀밸브 차단 / 동절기: 냉방밸브 차단",
        method: "생산 영향이 없는 일반용 공조기 3대부터 운전개선 적용",
        performance: "크린룸 공조기는 직접 운전변경을 적용하지 않고 밸브 개도율을 점진적으로 조정하는 테스트를 제안"
      },
      {
        name: "기타 유틸리티 진단",
        formula: "보일러 열효율 92~94% · 압축공기 용량 대비 수요 검토",
        method: "설비 운전상태와 생산계획을 함께 검토",
        performance: "보일러는 효율이 양호했고, 공기압축기는 생산량 증가 이후 에너지성능 재검토 필요"
      }
    ],
    scenarios: [
      {
        name: "하절기 일반용 공조기 운전개선",
        baseline: "냉수·스팀밸브 동시 개방",
        target: "스팀밸브 차단 + 냉방 중심 운전",
        saving: "약 8,521만원",
        note: "6~9월 연간화 추정 · 냉방 5,893만원 + 난방 2,628만원"
      },
      {
        name: "동절기 일반용 공조기 운전개선",
        baseline: "냉수·스팀밸브 동시 개방",
        target: "냉방밸브 차단 + 난방 중심 운전",
        saving: "약 7,269만원",
        note: "11~3월 연간화 추정 · 냉방 7,355만원 + 난방 -87만원"
      },
      {
        name: "연간 에너지비용 절감",
        baseline: "개선 전 동시 냉난방 운전",
        target: "계절별 상충 밸브 차단 및 제어 정상화",
        saving: "약 1억 5,790만원/년",
        note: "절감효과가 미미한 일반용 공조기 1대는 연간 추정에서 제외하고 2대의 개선성과를 합산"
      }
    ],
    verification: "운전개선 전·후 동일 계절의 냉수·스팀밸브 개도율 차이를 이용해 절감량을 산정하고, 월별 에너지 소비비중을 이용하여 하절기와 동절기 연간 절감액을 추정했습니다. 절감액은 보고서 작성 당시 에너지 단가와 COP·보일러효율 가정을 적용한 값으로, 현재 단가로 재산정할 경우 결과가 달라질 수 있습니다.",
    sourceNote: "에스코프로 2022 유틸리티 운전최적화 컨설팅 종합보고서 기반 · 고객사명·사업장명·설비번호 비식별 처리"
  }


  ,{
    id: "injection-extrusion-utility",
    status: "published",
    detailMode: "diagnostic",
    company: "국내 제조 F사",
    category: "사출·압출 · Utility",
    energyType: "전기",
    equipment: "사출기 · 압출기 · 전용 냉각기 · 공조기 · 공기압축기",
    title: "사출·압출 공정과 유틸리티의 전력 소비구조 및 1분 단위 운전패턴 분석",
    short: "사출기·압출기와 냉각기, 공조기, 공기압축기 등 주요 설비를 개별 계측하여 공정별·용도별 전력 소비구성비와 1분 단위 부하패턴을 비교하고 우선 개선대상을 도출한 사례입니다.",
    potential: "+55%",
    potentialLabel: "전년 동월 대비 5월 전력사용 증가",
    verificationStatus: "전력 소비구조·운전패턴 진단 사례 · 본 보고서에는 확정 절감량/절감액 산정 없음",
    tags: ["사출기", "압출기", "냉각기", "공조기", "공기압축기", "1분전력"],
    period: "2020~2022 전력 이력 비교 · 2022년 5~6월 상세 계측",
    problem: [
      "2022년 5월 공장 전력사용량이 221,940kWh로 전년 동월 142,704kWh 대비 약 55% 증가하여 증가 원인 분해가 필요",
      "사출·압출 생산설비뿐 아니라 전용 냉각기, 공조·냉난방, 공기압축기 등 유틸리티 부하가 전체 전력에서 큰 비중을 차지하여 공정과 유틸리티를 함께 분석할 필요",
      "설비별 운전·정지·대기구간의 전력 패턴이 상이하여 월간 총량만으로는 불필요한 기저부하와 운전연동 문제를 확인하기 어려움"
    ],
    dataUsed: [
      "2020~2021 월별 전력사용량, Peak 전력 및 역률",
      "2022년 5월 공장 전체 전력사용량과 평균부하",
      "사출기 6대, 압출기 9대 및 NC 설비의 개별 전력 계측",
      "사출·압출 전용 냉각기, 1층·3층 공조기, 공기압축기, 집진기 등 유틸리티별 전력 계측",
      "주요 설비의 1분 단위 및 24시간 소비동력 패턴"
    ],
    baselineModels: [
      {
        name: "공장 전체 전력현황",
        formula: "2022년 5월 = 221,940kWh · 평균부하 ≈ 298kW",
        method: "월간 총량 및 시간대별 부하패턴 분석",
        performance: "전년 동월 142,704kWh 대비 약 55% 증가"
      },
      {
        name: "공정별 소비구성비",
        formula: "사출 19.8% · 압출 24.5% · 공조/냉난방 27.1% · 압축공기 9.7%",
        method: "공정별 평균 소비동력 합산",
        performance: "NC 2.0% · 집진기 4.3% · 사무실/조명/기타 12.7%"
      },
      {
        name: "용도별 소비구성비",
        formula: "사출기 14.8% · 압출기 20.5% · 냉각기 8.9% · 공조기 27.1%",
        method: "설비 용도별 평균 소비동력 합산",
        performance: "공기압축기 9.7% · NC 2.0% · 집진기 4.3% · 기타 12.7%"
      },
      {
        name: "설비별 1분 패턴",
        formula: "P(t) = 설비별 1분 평균 소비동력",
        method: "운전·정지·대기구간의 부하변동 비교",
        performance: "사출기·압출기·냉각기·공조기·공기압축기의 개별 운전특성과 기저부하를 비교할 수 있는 계측 기반 확보"
      }
    ],
    opportunityTitle: "전력 소비구조 분석과 우선 검토 대상",
    diagnosticHeaders: ["분석 항목", "평균 소비동력", "분석 포인트", "구성비"],
    scenarios: [
      {
        name: "사출 공정",
        baseline: "59.1 kW",
        target: "사출기 6대 + 전용 냉각기 운전연동 및 대기부하 비교",
        saving: "19.8%",
        note: "사출기 자체 전력뿐 아니라 전용 냉각기의 운전상태를 함께 검토해야 공정 에너지 원인을 정확히 분리할 수 있음"
      },
      {
        name: "압출 공정",
        baseline: "73.0 kW",
        target: "압출기 9대 + 압출기용/OIL 냉각기 개별 패턴 비교",
        saving: "24.5%",
        note: "설비별 부하패턴과 비가동 구간의 기저전력 차이를 이용해 운전대기 및 보조설비 연동 개선 가능성을 검토"
      },
      {
        name: "공조 및 냉난방",
        baseline: "80.8 kW",
        target: "1층·3층 공조기와 실외기 세트의 시간대별 부하 및 운전스케줄 검토",
        saving: "27.1%",
        note: "공장 내 최대 단일 소비영역으로 나타나 생산스케줄과 연동한 운전시간·설정조건 최적화의 우선 검토대상"
      },
      {
        name: "공기압축기",
        baseline: "28.9 kW",
        target: "신형·구형 압축기의 동시운전, 부하/무부하 패턴 및 수요 대응 비교",
        saving: "9.7%",
        note: "두 압축기의 소비동력 패턴을 비교하여 운전대수 및 부하분담 최적화 가능성을 검토"
      },
      {
        name: "냉각기",
        baseline: "26.7 kW",
        target: "사출·압출 설비 가동상태와 냉각기 소비동력의 동시 비교",
        saving: "8.9%",
        note: "생산설비 정지 또는 저부하 시 냉각기 운전연동 여부를 점검하여 불필요한 보조부하를 찾는 기반 데이터로 활용"
      }
    ],
    verification: "본 자료는 전력 소비구조와 1분 단위 운전패턴을 분석하여 우선 개선대상을 도출한 진단 단계의 결과입니다. 보고서에는 특정 개선조치의 확정 절감량이나 절감액이 제시되어 있지 않으므로, 실제 절감성과는 후속 운전개선 또는 설비개선 시행 전·후 동일 생산조건에서 별도 M&V로 산정해야 합니다.",
    sourceNote: "에스코프로 2022 전력소비패턴 및 에너지소비구성비 분석 보고서 기반 · 고객사명·사업장명 비식별 처리"
  }


  ,{
    id: "data-center-energy-performance",
    status: "published",
    company: "국내 데이터센터 운영 A사",
    category: "데이터센터 · PUE · 냉방",
    energyType: "전기",
    equipment: "냉방기 급기팬 · 외기냉방 · 냉각탑 · 냉각수/냉수펌프 · 냉동기",
    title: "다중 IDC 센터의 PUE·냉방설비 데이터 분석과 EC Fan·외기냉방 최적화",
    short: "다수 데이터센터의 계측데이터와 층별 PUE를 통합 분석하여 냉방기 운영 이상과 성능열위 설비를 찾고, 고효율 EC Fan 교체·외기냉방·냉각탑 설정온도 최적화의 절감효과와 투자경제성을 검토한 사례입니다.",
    potential: "63.5%",
    potentialLabel: "EC Fan 시범사업 팬 소비동력 절감 실증",
    verificationStatus: "시범사업 실증값 · 확대 적용 절감액·투자회수기간은 2017년 중간보고 당시 추정",
    tags: ["데이터센터", "IDC", "PUE", "EC Fan", "외기냉방", "냉각탑", "COP"],
    period: "2017년 에너지성능 개선 컨설팅 중간 단계",
    problem: [
      "다수 센터의 계측데이터 정합성 수준이 서로 달라 데이터 교정과 신뢰도 확보가 선행되어야 했음",
      "층별 PUE 분석에서 특정 전산실 PUE가 1.848로 센터 평균 1.576보다 높게 나타나 냉방 운영의 이상 원인 분석이 필요",
      "일부 냉방기가 냉각 없이 팬만 가동되는 운전상태가 확인되어 불필요한 팬 전력과 PUE 상승 가능성이 존재",
      "냉방기 급기팬, 냉각탑, 냉각수·냉수펌프, 냉동기와 외기냉방의 성능 및 운전방법을 센터별·계절별로 최적화할 필요"
    ],
    dataUsed: [
      "다수 IDC 센터의 전력·냉방설비 계측데이터 및 데이터 정합성 점검 결과",
      "층별 PUE와 냉방소비지수, 전산실별 운전상태",
      "냉방기 급기팬 시범 교체 전·후 소비동력 데이터",
      "냉각탑 설정온도, 냉각수·냉수펌프, 냉동기 및 지원시설 운전데이터",
      "통합 에너지 성능관리 플랫폼을 활용한 주간 단위 운전데이터 분석 결과"
    ],
    baselineModels: [
      {
        name: "고효율 EC Fan 시범사업",
        formula: "Fan Saving = (Pbefore − Pafter) / Pbefore × 100",
        method: "2개 센터 냉방기 급기팬 교체 전·후 소비동력 비교",
        performance: "팬 소비동력 63.5% 절감 효과를 시범사업에서 확인"
      },
      {
        name: "EC Fan 확대 적용안",
        formula: "성능열위 냉방기 약 400대 × 개선효과",
        method: "주요 4개 센터의 성능열위 급기팬 확대 교체 시나리오",
        performance: "팬 소비동력 약 55% 절감 예상 · 연간 약 11억원 절감 · 소요예산 약 22억원 · 단순 투자회수기간 약 2년"
      },
      {
        name: "외기냉방 확대안",
        formula: "연간 절감액 = 외기냉방 분담률 확대에 따른 냉방전력 감소",
        method: "최적 외기냉방 도입방안 및 투자경제성 분석",
        performance: "연간 약 4.26억원 절감 가능 추정 · 소요예산 약 17.57억원 · 단순 투자회수기간 약 4.13년"
      },
      {
        name: "PUE 이상구간 진단",
        formula: "PUE = Total Facility Energy / IT Equipment Energy",
        method: "센터·층·전산실 수준의 PUE 벤치마킹과 냉방기 운전상태 연계 분석",
        performance: "특정 전산실 PUE 1.848 vs 센터 평균 1.576 · 팬 단독 가동 냉방기가 주요 원인으로 분석"
      }
    ],
    scenarios: [
      {
        name: "냉방기 급기팬 EC Fan 시범 교체",
        baseline: "기존 급기팬 운전",
        target: "고효율 EC Fan 교체",
        saving: "63.5% 실증",
        note: "2개 센터 시범사업에서 팬 소비동력 절감효과를 확인"
      },
      {
        name: "성능열위 급기팬 확대 교체",
        baseline: "주요 센터의 성능열위 냉방기 약 400대",
        target: "고효율 EC Fan 확대 적용",
        saving: "약 11억원/년 추정",
        note: "팬 소비동력 약 55% 절감 예상 · 투자 약 22억원 · 단순 회수기간 약 2년"
      },
      {
        name: "외기냉방 분담률 확대",
        baseline: "기존 기계냉방 중심 운전",
        target: "외기조건에 따른 외기냉방 최적 확대",
        saving: "약 4.26억원/년 추정",
        note: "투자 약 17.57억원 · 단순 회수기간 약 4.13년으로 중간보고에서 분석"
      },
      {
        name: "팬 단독 가동 냉방기 운영 최적화",
        baseline: "일부 냉방기에서 팬만 상시 가동",
        target: "운영 적정성 확인 후 불필요 팬 운전 중지",
        saving: "PUE 개선 대상",
        note: "층별 PUE 이상구간을 설비 운전상태와 연결하여 개선대상 냉방기를 선별"
      },
      {
        name: "냉각탑 설정온도 및 냉방설비 성능 최적화",
        baseline: "센터별·계절별 설정조건 및 성능편차",
        target: "외기조건별 최적 설정온도와 운전방법",
        saving: "후속 검증",
        note: "냉각탑·냉각수펌프·냉수펌프·냉동기 COP 및 지원시설을 단계적으로 진단·개선하는 계획 수립"
      }
    ],
    verification: "시범 EC Fan 교체는 교체 전·후 팬 소비동력으로 절감효과를 확인했습니다. 확대 적용안과 외기냉방 경제성은 2017년 중간보고 당시의 대상 수량·예산·운전조건을 기준으로 한 추정값입니다. 후속 개선은 계측데이터 정합성을 확보한 뒤 PUE·냉방소비지수·설비별 소비전력과 운전조건을 함께 비교하여 절감효과를 검증하도록 계획했습니다.",
    sourceNote: "에스코프로 2017 IDC 에너지성능 개선 컨설팅 중간보고 기반 · 고객사명·센터명·내부 플랫폼명 비식별 처리"
  }



  ,{
    id: "semiconductor-display-utility-optimization",
    status: "published",
    detailMode: "diagnostic",
    company: "국내 반도체·디스플레이 제조 B사",
    category: "반도체·디스플레이 · Utility Optimization",
    energyType: "전기 · LNG",
    equipment: "CDA · 냉동기 · 보일러 · 냉수/냉각수펌프 · 크린룸 Utility",
    title: "반도체·디스플레이 제조시설 Utility 운전최적화와 실시간 효율관리 체계 구축",
    short: "1차년도에는 단일 생산시설을 대상으로 CDA·냉동기·보일러의 원단위와 부하율을 분석해 운전최적화 성과를 실증하고, 2차년도에는 이를 국내 2개 생산거점 6개 공장으로 확대하여 실시간 효율진단·운전가이드 체계를 구축한 2개년 프로젝트입니다.",
    potential: "16.2억원/년",
    potentialLabel: "1차년도 11개 적용 Item 정량 절감 실적",
    verificationStatus: "1차년도 실증성과 + 2차년도 전사 확대 구축 · 2차년도 신규 절감액은 완료보고서에 별도 확정치 없음",
    tags: ["반도체·디스플레이", "CDA", "Chiller", "Boiler", "Utility", "원단위", "실시간진단"],
    period: "1차년도 2007~2008 · 2차년도 2008.12~2009.12",
    problem: [
      "생산량 증가와 함께 Utility 비용이 지속적으로 증가하여 공정별·설비별 에너지 원단위 관리와 최적운전 체계가 필요",
      "동일 종류의 공기압축기·냉동기·보일러 사이에도 호기별 효율차이가 존재하여 고효율 설비 우선운전 기준이 필요",
      "실제 필요 가동대수보다 많은 설비가 운전되거나 무부하 설비가 대기하는 구간이 있어 시스템 부하율과 공급·수요 Balance 최적화가 필요",
      "단발성 진단을 넘어 실시간 원단위·부하율·상관관계·이상상태를 지속적으로 관리하는 운영자 중심의 효율관리 체계가 필요"
    ],
    dataUsed: [
      "CDA 생산유량·공급압력·기기별 전력·Loading/Unloading 및 Dryer Purge 운전정보",
      "냉동기별 전력·냉동톤(RT)·부하율·냉각수 입구온도·냉수 출구온도·펌프 운전정보",
      "보일러 가스사용량·증발량·부하율 및 기기별 열생산 원단위",
      "크린룸 온도·습도·차압과 공조 Utility 운전상태",
      "2차년도 다공장 확대 시 5분 주기 실시간 Data Point, 시간·일·월 통계 및 공장간 원단위 비교 데이터"
    ],
    phases: [
      {
        year: "1차년도",
        period: "2007~2008 · 완료보고 2008.11",
        focus: "현장 실증 · UT 운전최적화 · 효율관리 시스템 구축",
        summary: "단일 생산시설을 실증 거점으로 선정하여 CDA·냉동기·보일러 시스템의 과거 운전데이터와 신규 계측 데이터를 분석하고, 고효율 설비 우선운전·가동대수 최적화·Set Point 조정·Loss 저감 활동을 수행했습니다.",
        results: [
          "14개 최적화 Item 발굴, 11개 Item 적용으로 연간 16.2억원 절감 실적",
          "추가 3개 Item의 연간 3.5억원 절감 가능성을 제시하여 전체 19.7억원/년 수준의 개선 포트폴리오 구성",
          "CDA·냉동기·보일러의 단위기기별 원단위와 시스템 부하율을 실시간 계산하는 효율관리 시스템 구축",
          "고효율 기기 우선운전, 저효율 냉동기 세관, CDA 가동대수·무부하 운전·Purge, 냉각수온·냉동기 부하 Balance 등 운전최적화 수행"
        ],
        outcome: "절감성과를 실증하고, 설비 원단위·부하율·운전상태를 정량적으로 관리하는 운영 Tool을 현장에 적용"
      },
      {
        year: "2차년도",
        period: "2008.12~2009.12",
        focus: "다공장 확대 · 실시간 효율진단 · 표준 운전가이드 체계 구축",
        summary: "1차년도 실증 결과를 기반으로 국내 2개 생산거점의 6개 공장으로 시스템을 확대하고, 공기압축기·냉동기·보일러를 대상으로 계측·Data Interface·프로그램 구축·시운전·교육·최적화 컨설팅을 수행했습니다.",
        results: [
          "각 공장별 Utility DB와 실시간 효율관리 체계 구축",
          "5분 주기 실시간 데이터 수집, 원단위·부하율 산출, Trend·상관관계·공장간 비교 기능 구현",
          "기기별 원단위 이상 시 원인요인과 운전방안을 제시하는 실시간 진단·운전가이드 기능 구축",
          "시운전 완료 공장부터 운영자 교육과 데이터 기반 최적화 컨설팅을 순차 수행"
        ],
        outcome: "1차년도 단일공장 실증을 다공장 표준 운영체계로 확장. 2차년도 완료보고에는 신규 연간 절감액이 별도 확정치로 제시되지 않아 시스템 구축·확산 성과와 구분하여 공개"
      }
    ],
    modelSectionTitle: "Utility 원단위·부하율·성능진단 로직",
    baselineModels: [
      {
        name: "CDA 원단위·부하율 최적화",
        formula: "CDA 원단위 = Compressor 전력 / 압축공기 생산유량",
        method: "호기별 원단위 비교 + 시스템 가동대수/부하율 + 공급압력·Purge·무부하 운전 분석",
        performance: "고효율 호기 우선운전 사례에서 시스템 원단위 0.12897 → 0.12627kW/N㎥, 약 2.5억원/년 절감 실적"
      },
      {
        name: "냉동기 원단위·운전조건 최적화",
        formula: "Chiller 원단위 = 냉동기 전력(kW) / 냉동부하(RT)",
        method: "호기별 kW/RT, 부하율, 냉각수 입구온도, 냉수출구온도 및 펌프 조건 상관분석",
        performance: "고효율 호기 우선운전, 세관, 냉각수온·부하 Balance 등으로 냉동시스템 원단위 개선 활동 수행"
      },
      {
        name: "보일러 열생산 원단위",
        formula: "Boiler 원단위 = 가스사용량(N㎥) / 스팀생산량(ton)",
        method: "호기별 원단위와 부하율을 비교하여 고효율 기기 우선운전",
        performance: "대표 교체운전에서 원단위 약 5% 개선, 약 1.8억원/년 절감 실적"
      },
      {
        name: "실시간 Utility 효율관리",
        formula: "5분 Data → 원단위·부하율·상관관계·운전 Guide",
        method: "1차년도 실증 시스템을 2차년도 다공장 구조로 확장",
        performance: "CDA·냉동기·보일러의 실시간 진단, 공장별 효율 비교, Trend·상관관계·Alarm·운전가이드 기능 구축"
      }
    ],
    opportunityTitle: "1차년도 실증성과와 2차년도 확산 성과",
    diagnosticHeaders: ["연차 / 영역", "주요 범위", "개선·확산 결과", "정량 성과"],
    scenarios: [
      {
        name: "1차년도 · 적용 완료 11개 Item",
        baseline: "고효율 설비 운전, 저효율 설비 개선, 운전 최적점 도출, System Loss 저감",
        target: "CDA·냉동기·보일러의 원단위·부하율·Set Point 최적화",
        saving: "16.2억원/년 실적",
        note: "14개 Item 중 11개를 실제 적용해 정량 절감성과를 확인"
      },
      {
        name: "1차년도 · 후속 3개 Item",
        baseline: "공급압력 제어, 냉각수온 조건, 냉수펌프 사양 등 추가 개선대상",
        target: "후속 현장 적용 및 성과검증",
        saving: "3.5억원/년 예상",
        note: "완료보고 당시 진행 중 항목으로, 16.2억원 실적과 구분하여 예상치로 표시"
      },
      {
        name: "2차년도 · 6개 공장 확대 구축",
        baseline: "1차년도 단일 생산시설 실증",
        target: "국내 2개 생산거점 6개 공장의 CDA·냉동기·보일러 효율관리",
        saving: "확산·표준화 성과",
        note: "계측기 설치, Data Interface, 프로그램 구축, 시운전, 교육과 최적화 컨설팅을 다공장으로 확대"
      },
      {
        name: "2차년도 · 실시간 운전가이드",
        baseline: "설비별 개별 운전정보와 경험 중심 의사결정",
        target: "5분 Data 기반 원단위·부하율·상관관계·이상원인·운전가이드",
        saving: "신규 절감액 별도 미제시",
        note: "2차년도 완료보고서는 시스템 구축과 운영체계 확산을 중심으로 하며 신규 연간 절감액을 별도 확정치로 제시하지 않음"
      }
    ],
    verification: "1차년도 절감액은 실제 적용한 11개 운전·설비개선 Item의 보고 실적을 기준으로 하며, 진행 중 3개 Item의 3.5억원/년은 예상치로 구분했습니다. 2차년도는 1차년도 방법론을 6개 공장으로 확대 구축한 단계로, 완료보고서에 별도의 신규 연간 절감액이 확정치로 제시되어 있지 않아 정량절감 실적과 시스템 확산 성과를 분리하여 표기합니다.",
    sourceNote: "에스코프로 1차년도 UT 운전최적화 완료보고(2008.11) 및 2차년도 다공장 Utility 최적화 완료보고(2009.12) 기반 · 고객사명·사업장명·내부 공장코드·담당자 정보 비식별 처리"
  }


];
