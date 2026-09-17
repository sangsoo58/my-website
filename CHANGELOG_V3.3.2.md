# V3.3.2

- Fixed category counts/filtering on HOME CASE STUDIES.
- Root cause: V3.3.1 merged `{...master, ...caseData}` so detailed case-data categories such as `열처리 · M&V` overwrote CASE MASTER categories such as `제조공장`.
- V3.3.2 gives CASE MASTER category/publication status precedence and adds CASE-ID fallback mapping.
- Added a compact explanation under the first-axis filter:
  - 저서 연계: 저서에 수록된 41개 사례
  - 홈페이지 확장: 홈페이지에서 추가 공개하는 10개 실무 사례
- Added accessible title/aria-label to expansion badges.
- Cache-busting updated to V3.3.2.
