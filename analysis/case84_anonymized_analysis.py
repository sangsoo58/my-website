# -*- coding: utf-8 -*-
"""CASE84 - 자동차부품 압출공정 3회 테스트 운전 비교분석 (비식별 공개용)"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 공개용 예제 데이터: 고객명, 공장명, 실제 LINE ID, 정확한 운전일자는 비식별 처리
test = pd.DataFrame({
    "테스트": ["Test 1", "Test 2", "Test 3"],
    "가동시간(분)": [220, 220, 310],
    "전기소비량(kWh)": [402, 297, 468],
    "생산수량": [12000, 12000, 17200],
    "생산중량(kg)": [259.20, 259.20, 371.52],
    "양품수량": [12000, 12000, 17200],
    "시간가동율(%)": [91.67, 91.67, 93.94],
    "에너지원단위(kWh/kg)": [1.5494, 1.1443, 1.2604],
})

base = test.iloc[0].copy()
metrics = [
    "가동시간(분)", "전기소비량(kWh)", "생산수량",
    "생산중량(kg)", "양품수량", "시간가동율(%)",
    "에너지원단위(kWh/kg)"
]

for col in metrics:
    test[f"{col}_Test1대비증감률(%)"] = (test[col] / base[col] - 1) * 100

test["원단위개선율(%, Test1대비)"] = -test["에너지원단위(kWh/kg)_Test1대비증감률(%)"]

# Test 2는 주요 생산조건이 Test 1과 동일하므로 직접 비교에 적합
# Test 3는 생산규모가 증가하므로 총 전력 증감과 생산조건 증감을 함께 보고,
# 에너지원단위(kWh/kg)로 정규화하여 해석
print(test.round(3))

# 해석 예
# Test 2: 원단위 26.15% 개선
# Test 3: 생산중량 +43.33%, 전기소비량 +16.42%, 원단위 18.65% 개선
# 주의: 3회 테스트 결과는 장기 Verified Saving이 아니라 Test & Adjust 수준의 비교 Evidence임.
