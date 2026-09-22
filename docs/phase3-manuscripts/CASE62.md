# CASE 62 | DEEP DIVE 후보 — 냉각수 입구온도 단계별 Test를 통한 냉동기 최적 운전온도 탐색

**편집상태:** PHASE 3 DRAFT / USER REVIEW REQUIRED  
**배치안:** PART 3 · Chapter 11 · 냉동기 Plant 최적화  
**Evidence:** A/C · Field Data / Test & Adjust  
**Web:** /cases/case62.html

## 현장 질문
냉각수온도를 낮추면 Chiller kW는 줄지만 Cooling Tower Fan 전력이 늘 수 있다. 어느 조건에서 Plant 전체전력이 최소가 되는가?

## Field Test
20~22.5℃ 범위에서 냉각수 입구온도별 kW/RT를 실측했다.

- 20.5℃ → 0.567 kW/RT
- 21.0℃ → 0.577
- 21.5℃ → 0.577
- 22.0℃ → 0.597
- 22.5℃ → 0.629

해당 실측표에서는 20.5℃에서 가장 낮은 kW/RT가 관찰되었다.

## 계절 운전기준
완료자료에는 동절기 기존 26℃에서 **20/17℃**, 춘·추절기 **20/17℃**, 하절기는 **외기 습구온도에 따라 변경 설정**하도록 정리되어 있다.

따라서 한 Test Point를 연중 고정 Set Point로 복사하지 않는다.

## System Boundary
최종 목적은 Minimum Chiller kW가 아니라:

**Psystem = Pchiller + PCT Fan (+ PCWP)**

RT·Wet-bulb·Cooling Water Temperature에 따른 System kW/RT Map을 만들면 계절별 Reset 기준으로 활용할 수 있다.

## Project Effect
완료자료에는 이 개선항목 Cost Reduction이 약 **0.6억원/년**으로 제시되어 있다.

## Evidence Boundary
20.5℃·0.567 kW/RT는 해당 Test 조건의 실측값이며 보편적 최적온도가 아니다. 냉동기 형식, RT, 습구온도, Tower·Pump Power에 따라 최적점이 달라진다.

## Consultant's Point
냉각수 Set Point는 ‘낮을수록 좋다’가 아니라 **Chiller와 Tower를 합한 전체 Plant 전력이 최소가 되는 조건**으로 결정한다.

## Source Note

저자 보유 프로젝트 자료와 비식별 공개사례를 바탕으로 재구성했다. 수치·성과의 성격은 본문의 Evidence Boundary를 따른다.
