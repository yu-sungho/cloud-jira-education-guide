# Jira 네비게이션 시작하기

## How to Navigate Jira — Atlassian Community Learning 정리

> **출처**: [community.atlassian.com/learning/lesson/how-to-navigate-jira](https://community.atlassian.com/learning/lesson/how-to-navigate-jira)  
> **소요 시간**: 약 10분

---

## 학습 목표

이 레슨을 마치면 다음을 할 수 있습니다:

- **워크 아이템**, **스페이스**, **보드**를 정의하고 구분할 수 있다
- 상단 내비게이션과 사이드바를 탐색할 수 있다
- 서로 다른 스페이스와 보드 간에 전환할 수 있다
- 워크 아이템을 볼 때 정보를 찾을 수 있다

---

## 1. 워크 아이템 · 스페이스 · 보드 이해하기

### 워크 아이템 (Work Item)이란?

Jira에서 **개별 업무 단위**를 워크 아이템이라고 합니다.  
워크 아이템을 업데이트하여 작업 진행 상황을 표시하거나, 회의 메모·팀원에게 물어볼 질문 등 관련 정보를 추가합니다.

![엔지니어링·법무·마케팅 팀의 서로 다른 업무 예시를 보여주는 3개의 워크 아이템](https://dam-cdn.atl.orangelogic.com/AssetLink/445k2nt453kr4168c844c0fjfl1b6046.png)

워크 아이템의 크기는 팀이 사용하는 방식에 따라 달라집니다.  
완료까지 몇 달이 걸리는 워크 아이템도 있고, 몇 시간 만에 끝나는 것도 있습니다.  
Jira의 대부분처럼, 팀에 가장 잘 맞는 방식으로 자유롭게 활용할 수 있습니다.

---

### 스페이스 (Space)란?

**스페이스**는 관련된 워크 아이템들의 모음입니다.  
Jira에서 모든 워크 아이템은 반드시 하나의 스페이스에 속합니다.  
팀은 업무를 어떻게 분류하고 정리하느냐에 따라 스페이스를 다양하게 활용할 수 있습니다.

**활용 예시 1 — 팀 단위:**  
하나의 팀에 속한 모든 업무를 한 스페이스에서 추적합니다.  
예: "게임 디자인 팀", "마케팅 팀", "법무 팀"

![사용자가 "Game Design Team" 보드에서 워크 아이템을 이동하는 모습](https://dam-cdn.atl.orangelogic.com/AssetLink/3ss424yu28r85hfq06xuh0p1l854t6nu.png)

**활용 예시 2 — 대형 프로젝트 단위:**  
앱 버전 출시나 대규모 마케팅 캠페인처럼 큰 단위의 산출물을 추적합니다.  
예: "Vidzi App Release V2.7", "Fall Marketing Campaign"

#### 스페이스 찾는 방법

사이드바에서 **Spaces**를 선택하면 즐겨찾기 및 최근 스페이스 목록이 표시됩니다.  
**View all spaces**를 선택하면 사이트 내 모든 스페이스를 볼 수 있습니다.  
스페이스 안에서 작업 중일 때는 화면 좌측 상단에 스페이스 이름이 표시됩니다.

![Spaces 메뉴에서 최근 스페이스 드롭다운을 선택한 Jira 칸반 보드 스크린샷](https://dam-cdn.atl.orangelogic.com/AssetLink/vmrw0t1d321e423wn56wj0eb8anqos01)

![현재 스페이스 이름이 강조 표시된 Jira 칸반 보드 스크린샷](https://dam-cdn.atl.orangelogic.com/AssetLink/mgom28pv645366e12r566dc26s21125r.png)

#### 스페이스 키 (Space Key)

**스페이스 키**는 스페이스 이름의 축약형으로, 해당 스페이스에 속한 워크 아이템을 식별합니다.

> **예시**: 게임 디자인 팀 스페이스의 키가 `GDT`라면,  
> 해당 스페이스의 워크 아이템은 `GDT-1`, `GDT-2`… 와 같이 표시됩니다.

---

### 보드 (Board)란?

**보드**는 스페이스 안의 업무를 시각화한 도구입니다.  
보드는 여러 **컬럼(column)** 으로 구성되며, 각 컬럼은 워크 아이템이 거쳐가는 **상태(status)** 를 나타냅니다.  
보드 전체는 팀의 **워크플로우(workflow)**, 즉 워크 아이템이 거치는 상태 흐름을 표현합니다.

**예시:**  
Kate의 팀은 마케팅 보드에서 3가지 상태 —`To Do`, `In Progress`, `Done`— 를 사용합니다.  
Kate가 워크 아이템 작업을 시작하면, 해당 카드를 `To Do` 컬럼에서 `In Progress` 컬럼으로 이동합니다.

**하나의 스페이스에 여러 보드:**  
하나의 Jira 스페이스는 설정에 따라 여러 개의 보드를 가질 수 있습니다.

> **예시**: 법무팀 스페이스에는 계약팀 보드, 인수팀 보드, 특허팀 보드 3개가 있습니다.

![Farm Harvest 보드가 열려 있는 "Game Design Team" 스페이스의 3개 보드 모습](https://dam-cdn.atl.orangelogic.com/AssetLink/a0o38h51a785daq4q2r351n2d3dysqb0.png)

---

### 보드 유형: 칸반 vs 스크럼

#### 칸반 보드 (Kanban Board)

지속적인 흐름의 업무를 지원합니다.  
프로젝트 시작부터 끝까지 워크 아이템이 계속 보드에 들어오고 나갑니다.

![상단 내비게이션의 Kanban 링크와 보드 중앙이 강조 표시된 Jira 칸반 보드 스크린샷](https://dam-cdn.atl.orangelogic.com/AssetLink/am2x5601l5g1852f13pl5mmqvj1k4id4.png)

#### 스크럼 보드 (Scrum Board)

고정된 기간(주로 2주 **스프린트**) 동안 팀이 완료할 워크 아이템 묶음을 추적합니다.  
스프린트가 끝나면 팀은 다음 작업 그룹을 위한 새 스프린트를 시작합니다.

![상단 내비게이션의 Active Sprints 버튼과 보드 중앙이 강조 표시된 Jira 스크럼 보드 스크린샷](https://dam-cdn.atl.orangelogic.com/AssetLink/ho7sa4205iv77618v102h4ic3622vn4w.png)

---

## 2. Jira 내비게이션

스페이스·보드·워크 아이템을 찾고 다른 팀의 작업을 확인하려면 Jira 내에서 이동하는 방법을 알아야 합니다.

### 상단 내비게이션 (Top Navigation)

![각 내비게이션 요소를 가리키는 표시가 있는 Jira 보드 상단 내비게이션 스크린샷](https://dam-cdn.atl.orangelogic.com/AssetLink/4cuv72vba4keg1k8ni7fs0o8fs2r28s8.auto)

**상단 내비게이션 주요 요소:**

| 요소                     | 기능                                |
| ------------------------ | ----------------------------------- |
| **로고 / 홈**            | Jira 홈 화면으로 이동               |
| **검색 (Search)**        | 워크 아이템·스페이스·보드 통합 검색 |
| **만들기 (Create)**      | 새 워크 아이템 빠르게 생성          |
| **알림 (Notifications)** | 멘션·할당·변경 알림 확인            |
| **설정 (Settings)**      | 전체 사이트 관리 (관리자)           |
| **계정 (Account)**       | 프로필·개인 설정·로그아웃           |

> **참고**: 내비게이션 바의 모양은 사이트 설정과 팀 환경에 따라 다를 수 있습니다.

---

### 사이드바 (Sidebar)

![왼쪽 내비게이션 패널이 강조 표시된 Jira 보드 및 각 링크를 가리키는 표시](https://dam-cdn.atl.orangelogic.com/AssetLink/r074rp4n7w4swcox14442rqwm2ou2u07)

**사이드바 주요 요소:**

| 메뉴           | 설명                                      |
| -------------- | ----------------------------------------- |
| **For You**    | 내 최근 작업·할당 항목·즐겨찾기 개인 피드 |
| **Recent**     | 최근 방문한 스페이스·보드·워크 아이템     |
| **Starred**    | 별표로 즐겨찾기한 항목                    |
| **Spaces**     | 전체 스페이스 목록 및 탐색                |
| **Boards**     | 보드 목록                                 |
| **Dashboards** | 대시보드 목록                             |
| **Apps**       | 설치된 앱 접근                            |

> 예시 스페이스의 일부 기능이 본인의 Jira 사이트에는 보이지 않을 수 있습니다.

---

### 스페이스 툴바 (Space Toolbar)

스페이스 안에서는 보드 뷰와 함께 스페이스 툴바를 볼 수 있습니다.

![스페이스 툴바가 강조 표시된 Jira 보드 및 툴바 내 링크를 가리키는 표시](https://dam-cdn.atl.orangelogic.com/AssetLink/l2mh56uck7m632g1p084n81x1hlk13k6.png)

**스페이스 툴바 주요 요소:**

| 메뉴               | 설명                                             |
| ------------------ | ------------------------------------------------ |
| **Board**          | 현재 스페이스의 보드 뷰                          |
| **Backlog**        | 스프린트에 포함되지 않은 전체 작업 목록 (스크럼) |
| **Timeline**       | 에픽·의존성 타임라인 뷰                          |
| **Reports**        | 번다운·속도 차트 등 애자일 리포트                |
| **Space settings** | 스페이스 설정 (관리자)                           |

---

## 3. 핵심 개념 요약

```
Jira 사이트 (Site)
└── 스페이스 (Space)         ← 팀·프로젝트 단위로 업무 묶음
    ├── 보드 (Board)          ← 업무 흐름을 시각화하는 칸반/스크럼 도구
    │   └── 컬럼 (Column)     ← 각 상태(To Do / In Progress / Done 등)
    └── 워크 아이템 (Work Item) ← 개별 업무 단위 (GDT-1, GDT-2 …)
```

| 개념             | 한 줄 요약                                              |
| ---------------- | ------------------------------------------------------- |
| **워크 아이템**  | 개별 업무 단위. 팀원이 실제로 처리하는 할 일            |
| **스페이스**     | 관련 워크 아이템의 모음. 팀·프로젝트 컨테이너           |
| **보드**         | 스페이스의 업무 흐름을 시각화. 칸반 또는 스크럼         |
| **상태(Status)** | 워크 아이템의 현재 위치 (To Do / In Progress / Done 등) |
| **워크플로우**   | 워크 아이템이 거치는 상태 흐름 전체                     |
| **스페이스 키**  | 스페이스 이름의 축약형 (예: GDT, MKT)                   |

---

_출처: [Atlassian Community Learning — How to Navigate Jira](https://community.atlassian.com/learning/lesson/how-to-navigate-jira)_
