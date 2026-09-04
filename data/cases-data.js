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
    id: "daesung-metal",
    status: "published",
    company: "대성금속",
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
    id: "hanseong",
    status: "published",
    company: "한성",
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
    sourceNote: "에스코프로 한성 MES·EMS 분석 및 M&V Plan 기반"
  },
  {
    id: "bucheon-casting",
    status: "published",
    company: "부천주물",
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
    sourceNote: "에스코프로 부천주물 MES·EMS 분석 및 절감잠재량 보고서 기반"
  },
  {
    id: "konec",
    status: "published",
    company: "코넥",
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
    sourceNote: "에스코프로 코넥 M&V Plan 및 수정 Baseline 절감잠재량 보고서 기반"
  },
  {
    id: "fronttech",
    status: "published",
    company: "프론텍",
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
    sourceNote: "에스코프로 프론텍 MES·EMS Baseline 분석 및 최종 절감잠재량 보고서 기반"
  }
];
