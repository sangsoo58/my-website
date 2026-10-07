# CASE84 하단 CASE Library 숫자 수정 패치

## 수정 내용
- `KNOWLEDGE CONNECTION` 영역의
  - `82개 사례에서 유사 사례 탐색`
  - → `84개 사례에서 유사 사례 탐색`
- `js/site.js`와 `assets/script.js` 양쪽을 동일하게 수정하여
  페이지별 스크립트 사용 차이에 관계없이 숫자가 일관되게 표시되도록 했습니다.

## 변경하지 않은 내용
- CASE84 본문
- CASE84 정량 분석결과
- CASE83 / CASE05 직접 링크
- sitemap
- CASE MASTER
- 검색 메타데이터

CASE84 본문 안에는 이미 다음 직접 링크가 들어 있습니다.
- CASE83
- CASE05
- Baseline & M&V Insight

## GitHub Desktop 적용
1. GitHub Desktop → `my-website` → **Show in Explorer**
2. 이 ZIP의 내용물을 저장소 최상위 폴더에 복사하여 덮어쓰기
3. GitHub Desktop `Changes`에서 다음 2개 파일 확인
   - `js/site.js`
   - `assets/script.js`
4. Summary:
   `Update CASE Library count to 84`
5. **Commit to main**
6. **Push origin**
7. 배포 후 CASE84 페이지를 `Ctrl + F5`로 새로고침
8. 하단 CASE Library 카드가 `84개 사례에서 유사 사례 탐색`으로 표시되는지 확인
