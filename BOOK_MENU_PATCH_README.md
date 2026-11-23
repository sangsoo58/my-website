# 홈페이지 책 읽기 판본 선택 메뉴 패치 (2026-11-23)

변경된 파일만 포함합니다. 기존 사이트 폴더에서 같은 경로로 병합하세요.

## 변경 파일
- `index.html`: 한국어 홈페이지의 「저서 온라인 열람」 링크 3곳을 `/books/`로 변경.
- `en/index.html`: 영어 홈페이지 상단 `Book` 링크를 `/books/` (Books)로 변경. 기존 영어 책 보기 링크 유지.
- `books/index.html`: 3개 판본을 선택하는 새 안내 페이지.
- `book/index.html`: 판본 선택 링크 추가. 기존 542화면 열람 기능 유지.
- `book/revised/index.html`: 판본 선택 링크 추가. 기존 582쪽/CASE 82·Chapter 30 이동 기능 유지.
- `en/book/index.html`: Choose edition 링크 추가. 영문판 열람기 기존 기능 유지.

## 적용 방법 (GitHub Desktop)
1. Repository → Show in Explorer에서 저장소 루트 위치 확인.
2. 패치 ZIP 내부의 `my-website/` 안쪽 **내용**을 저장소 루트와 병합 (my-website 폴더를 이중으로 만들지 않기).
3. Changes에서 위 6개 HTML 파일만 변경되는지 확인.
4. Commit → Push origin. GitHub Actions 배포 성공 확인.
5. https://www.energy-ai-optimization.com/books/ 에 접속 후 세 판본 링크 확인.

## 주의
- `book/revised/pages/`, `en/book/pages/`, `book/pages/` 이미지 파일은 전혀 수정하지 않았습니다.
- 외부 링크를 포함한 별도 세부 기능은 실제 운영서버에서 추가 확인하세요.
- 변경 전 ZIP을 백업한 뒤 적용하세요.
