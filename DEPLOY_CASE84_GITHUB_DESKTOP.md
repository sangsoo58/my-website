# CASE84 - GitHub Desktop 배포 방법

1. GitHub Desktop에서 현재 홈페이지 저장소를 엽니다.
2. Repository > Show in Explorer로 로컬 저장소 폴더를 엽니다.
3. 이 배포본의 **내용물 전체**를 저장소 루트에 복사하여 덮어씁니다.
4. GitHub Desktop Changes에서 다음 핵심 변경 파일을 확인합니다.
   - cases/case84.html
   - assets/cases/case84/01_energy_intensity_by_test.png
   - assets/cases/case84/02_change_rates_vs_test1.png
   - assets/cases/case84/03_normalized_index.png
   - data/cases-data.js
   - data/case-master-v33.js
   - data/case-library-short.js
   - cases/index.html
   - index.html
   - sitemap.xml
   - analysis/case84_anonymized_analysis.py
5. Summary: `Add CASE84 extrusion process M&V test study`
6. Commit to main -> Push origin
7. 배포 후 확인:
   - https://www.energy-ai-optimization.com/cases/case84.html
   - https://www.energy-ai-optimization.com/cases/
   - https://www.energy-ai-optimization.com/sitemap.xml
8. Google Search Console에서 case84 URL 실제 URL 테스트 후 색인 생성 요청합니다.

## 공개표현 주의
26.15%와 18.65%는 3회 Test & Adjust에서 관찰된 **에너지 원단위 개선효과**입니다. 연간 Verified Saving 또는 공장 전체 절감률로 표현하지 않습니다.
