---
layout: default
title: Jira Cloud 공식 문서 분석
nav_order: 11
---

# Jira Cloud 공식 리소스 종합 분석

## support.atlassian.com/jira-software-cloud/resources 전체 구조 및 상세 분석

> **출처**: [Jira Cloud resources — Atlassian Support](https://support.atlassian.com/jira-software-cloud/resources/)  
> Atlassian 공식 Jira Cloud 문서 허브의 전체 구성(6개 카테고리, 80여 개 문서)을 분석하고, 핵심 개념을 한국어로 상세 정리한 자료입니다. Datacenter → Cloud 전환 임직원의 실무 참조용입니다.

---

## 📂 리소스 허브 전체 구성

Jira Cloud 공식 문서 허브는 **6개 대분류**로 구성됩니다.

| #   | 카테고리                               | 핵심 주제                                |
| --- | -------------------------------------- | ---------------------------------------- |
| 1   | **Jira Cloud 설정** (Set up)           | 제품 구성, 다른 앱 연동, 데이터 가져오기 |
| 2   | **스페이스 관리** (Manage spaces)      | 보드·스프린트·버전·리포트·타임라인 구성  |
| 3   | **스페이스에서 작업** (Work in spaces) | 워크 아이템 생성·진행, 대시보드, 폼, AI  |
| 4   | **팀 관리형 스페이스** (Team-managed)  | 팀 자율형 스페이스 설정·관리             |
| 5   | **워크 아이템 검색** (Search)          | 검색, JQL 고급 검색, 필터                |
| 6   | **Plans (다중 스페이스 계획)**         | Advanced Roadmaps, 용량·의존성·시나리오  |

---

## 1️⃣ Jira Cloud 설정 (Set up Jira Cloud)

> Jira Cloud를 설정하고 다른 제품·애플리케이션과 통합하는 방법

### 주요 문서

| 문서                                                                                                                                                        | 내용                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Learn how Jira products work](https://support.atlassian.com/jira-software-cloud/docs/learn-how-jira-products-work/)                                        | Jira 제품군 구성과 라이선스 이해    |
| [Use Jira Cloud with other Atlassian apps](https://support.atlassian.com/jira-software-cloud/docs/use-jira-cloud-with-other-atlassian-products/)            | Confluence 등 Atlassian 제품 연동   |
| [Use Jira Cloud with other apps](https://support.atlassian.com/jira-software-cloud/docs/use-jira-cloud-with-other-applications/)                            | 외부 애플리케이션 연동              |
| [Connect Jenkins to Jira](https://support.atlassian.com/jira-software-cloud/docs/setup-decisions-necessary-when-connecting-jenkins-to-jira-software-cloud/) | Jenkins 빌드·배포 이벤트 연동       |
| [Import data into Jira](https://support.atlassian.com/jira-software-cloud/docs/import-data-into-jira/)                                                      | 데이터 가져오기 (마이그레이션 핵심) |
| [Quick space creation with bundles](https://support.atlassian.com/jira-software-cloud/docs/quick-start-project-creation-with-bundles/)                      | 번들로 빠른 스페이스 생성           |
| [Use Jira Cloud with Slack](https://support.atlassian.com/jira-software-cloud/docs/use-jira-cloud-with-slack/)                                              | Slack 연동                          |
| [Use Docs in Jira Cloud](https://support.atlassian.com/jira-software-cloud/docs/use-docs-in-jira-cloud/)                                                    | Jira 내 문서(Docs) 기능             |

### `Learn how Jira products work` 하위 문서

- [What is the Jira family of products](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-jira-family-of-products/) — Jira 제품군 구성·라이선스
- [Get started with Jira Cloud (6단계 튜토리얼)](https://support.atlassian.com/jira-software-cloud/docs/get-started-with-jira-software-cloud/)
- [Administer Jira Cloud](https://support.atlassian.com/jira-software-cloud/docs/administer-jira-software-cloud/) — 소프트웨어 스페이스 관리
- [Use Jira Cloud on Apple and Android devices](https://support.atlassian.com/jira-software-cloud/docs/use-jira-cloud-on-apple-and-android-devices/) — 모바일 앱
- [Get help with Jira Cloud](https://support.atlassian.com/jira-software-cloud/docs/get-help-with-jira-software-cloud/)

> **💡 전환 관점**: `Import data into Jira`는 DC→Cloud 데이터 이관 시 핵심 문서입니다. 또한 모바일(iPhone/iPad/Android) 지원은 Cloud의 큰 이점으로, DC 대비 별도 인프라 없이 즉시 사용 가능합니다.

---

## 2️⃣ 스페이스 관리 (Manage Jira Cloud spaces)

> 팀의 작업 방식에 맞게 Jira Cloud 스페이스를 구성하는 방법

### 주요 문서

| 문서                                                                                                                                             | 내용                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| [Start a new software space](https://support.atlassian.com/jira-software-cloud/docs/start-a-new-software-project-for-your-team/)                 | 새 소프트웨어 스페이스 시작 |
| [Company-managed vs team-managed](https://support.atlassian.com/jira-software-cloud/docs/learn-the-basics-of-team-managed-projects/)             | 두 스페이스 유형의 차이     |
| [Configure a company-managed board](https://support.atlassian.com/jira-software-cloud/docs/configure-a-company-managed-board/)                   | 회사 관리형 보드 구성       |
| [Create and plan work with Scrum and Kanban](https://support.atlassian.com/jira-software-cloud/docs/create-and-plan-work-with-scrum-and-kanban/) | 스크럼·칸반으로 작업 계획   |
| [Coordinate work with sprints](https://support.atlassian.com/jira-software-cloud/docs/coordinate-and-monitor-work-with-sprints/)                 | 스프린트로 작업 조율        |
| [Group work with components](https://support.atlassian.com/jira-software-cloud/docs/group-and-track-work-with-components/)                       | 컴포넌트로 작업 그룹화      |
| [Release work in versions](https://support.atlassian.com/jira-software-cloud/docs/release-your-teams-work-in-versions/)                          | 버전으로 작업 릴리즈        |
| [Track work with reports](https://support.atlassian.com/jira-software-cloud/docs/track-and-analyze-your-teams-work-with-reports/)                | 리포트로 작업 추적·분석     |
| [Visualize work on timeline](https://support.atlassian.com/jira-software-cloud/docs/create-manage-and-visualize-work-on-the-timeline/)           | 타임라인 시각화             |
| [Manage work in list view](https://support.atlassian.com/jira-software-cloud/docs/manage-and-update-work-in-the-list-view/)                      | 리스트 뷰 작업 관리         |
| [Schedule work in calendar view](https://support.atlassian.com/jira-software-cloud/docs/schedule-and-track-work-in-the-calendar-view/)           | 캘린더 뷰 일정 관리         |
| [Set up approvals in Jira](https://support.atlassian.com/jira-software-cloud/docs/set-up-approvals-in-jira/)                                     | 승인(Approvals) 설정        |
| [How to create workflows](https://support.atlassian.com/jira-software-cloud/docs/how-to-create-workflows/)                                       | 워크플로우 생성             |
| [Protect your team's data](https://support.atlassian.com/jira-software-cloud/docs/protect-your-teams-data/)                                      | 데이터 보호                 |
| [Delete a space](https://support.atlassian.com/jira-software-cloud/docs/delete-project/)                                                         | 스페이스 삭제               |

### 🔑 핵심 개념 상세: 회사 관리형 vs 팀 관리형 스페이스

Jira의 스페이스는 **팀 관리형(team-managed)** 또는 **회사 관리형(company-managed)** 으로 생성됩니다. 핵심 기능은 동일하지만, **누가 어떻게 관리하느냐**에서 결정적 차이가 있습니다.

> 현재 스페이스 유형 확인: 스페이스 이름 옆 **More actions(•••)** → 메뉴 하단에서 Team-managed / Company-managed 표시 확인

#### 팀 관리형 스페이스 (Team-managed)

- 팀의 **누구나** 설정·유지 가능 (Jira 관리자 불필요)
- 자율적인 팀이 **자체적으로 프로세스를 통제**하기에 이상적
- 스페이스 설정이 **단순**하고, 스페이스 관리자가 직접 통제
- 스킴(scheme)·스크린(screen) 설정에 Jira 관리자가 필요 없음

**선택 기준:**

- 빠르게 시작하기 위해 **쉬운 설정**을 원할 때
- 팀 업무를 관리할 **독립적인 스페이스**를 원할 때

#### 회사 관리형 스페이스 (Company-managed)

- **Jira 관리자**가 설정·유지
- 여러 팀이 **표준화된 방식**(예: 공유 워크플로우)으로 협업하기에 적합
- 스크린·스킴을 Jira 관리자가 구성 → 설정은 복잡하지만 **여러 스페이스에 걸쳐 워크플로우 표준화** 가능
- 관리자가 스킴/스크린을 변경하면 해당 구성을 쓰는 **모든 회사 관리형 스페이스가 함께 변경됨**

**선택 기준:**

- 조직 내 여러 스페이스의 **구성을 표준화**하고 싶을 때
- 권한·워크플로우의 **복잡한 커스터마이징**이 필요할 때

#### 유형별 기능 차이 (How features differ)

- **팀 관리형 소프트웨어 스페이스**: 기능을 **언제든 켜고 끌 수 있음** (예: 보드가 복잡해지면 백로그 추가). 프로젝트 수명 내내 유연하게 조정.
- **회사 관리형 스페이스**: 기능이 **스페이스 템플릿에 묶여 있음**. 템플릿을 고르면 그 템플릿의 기능에 고정됨.

> **💡 전환 관점**: DC의 "Classic" 프로젝트는 Cloud에서 **회사 관리형(company-managed)** 에 해당합니다. DC에서 표준화된 스킴·워크플로우를 쓰던 팀은 회사 관리형으로, 자율적 팀은 팀 관리형으로 전환을 검토하세요. 용어 변화: `Classic → Company-managed`, `Next-gen → Team-managed`.

### 🔑 핵심 개념 상세: 스크럼 & 칸반

#### 스크럼 백로그 / 칸반 백로그

- [Use your scrum backlog](https://support.atlassian.com/jira-software-cloud/docs/use-your-scrum-backlog/) — 워크 아이템 생성·업데이트, 드래그&드롭 순위 지정
- [Use your kanban backlog](https://support.atlassian.com/jira-software-cloud/docs/use-your-kanban-backlog/) — 계획 단계 항목의 방해 없이 진행 중 작업에 집중

#### 에픽 관리

- [What is an epic](https://support.atlassian.com/jira-software-cloud/docs/what-is-an-epic/) — 에픽 개념과 Jira에서의 표시 방식
- [Manage epics in a scrum project](https://support.atlassian.com/jira-software-cloud/docs/manage-epics-in-a-scrum-project/)
- [Manage epics in a kanban project](https://support.atlassian.com/jira-software-cloud/docs/manage-epics-in-a-kanban-project/)
- [Link a Confluence page to an epic](https://support.atlassian.com/jira-software-cloud/docs/link-a-confluence-page-to-an-epic/) — 에픽에 문서 연결

### 🔑 핵심 개념 상세: 스프린트 (Sprint)

**스프린트(=이터레이션)** 는 개발팀이 **잠재적으로 출시 가능한(potentially shippable)** 개별 애플리케이션 증분을 구현·전달하는 짧은 기간입니다. Jira에서는 **Backlog 탭**에서 스프린트를 계획합니다.

- **스크럼 팀만** 스프린트를 사용할 수 있습니다 (칸반은 스프린트 없음).
- 처음이라면 **고정 2주(two-week)** 기간을 권장 — 무언가를 완수하기에 충분하면서도 정기적 피드백을 받기에 적당함.
- 보드에서 스프린트를 보고 이슈를 스프린트에 할당.
- **JQL의 `Sprint` 필드**로 예정 스프린트의 이슈를 검색 가능. 개별 이슈에서도 Sprint 필드로 소속 스프린트 확인 가능.

#### 스프린트 관련 전체 문서

| 단계          | 문서                                                                                                                                                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 개념          | [What is a sprint](https://support.atlassian.com/jira-software-cloud/docs/what-is-a-sprint/), [Use Active sprints](https://support.atlassian.com/jira-software-cloud/docs/use-active-sprints/)                                                       |
| 생성·계획     | [Create sprints](https://support.atlassian.com/jira-software-cloud/docs/create-sprints-in-company-managed-projects/), [Plan a sprint](https://support.atlassian.com/jira-software-cloud/docs/plan-a-sprint/)                                         |
| 병렬 스프린트 | [What are parallel sprints](https://support.atlassian.com/jira-software-cloud/docs/what-are-parallel-sprints/), [Use parallel sprints](https://support.atlassian.com/jira-software-cloud/docs/use-parallel-sprints/)                                 |
| 모니터링      | [Monitor the progress of a sprint](https://support.atlassian.com/jira-software-cloud/docs/monitor-the-progress-of-a-sprint/)                                                                                                                         |
| 편집·이동     | [Edit a sprint](https://support.atlassian.com/jira-software-cloud/docs/edit-a-sprint-in-a-company-managed-project/), [Move/transition issues](https://support.atlassian.com/jira-software-cloud/docs/move-or-transition-issues-in-an-active-sprint/) |
| 종료·재개     | [Complete a sprint](https://support.atlassian.com/jira-software-cloud/docs/complete-a-sprint/), [Reopen a sprint](https://support.atlassian.com/jira-software-cloud/docs/reopen-a-sprint/)                                                           |

> **병렬 스프린트(Parallel sprints)**: 여러 팀이 **동일한 백로그에서 동시에** 스프린트를 운영할 수 있게 하는 기능.

### 🔑 핵심 개념 상세: 버전 (Version) & 릴리즈

**버전**은 함께 출시되는 기능들의 묶음(단일 업데이트)입니다. 릴리즈는 수개월에 걸친 여러 이터레이션 작업의 정점으로, 이터레이션 관리자가 릴리즈에 필요한 모든 작업 완료와 활동 조율을 책임집니다.

**스크럼 vs 칸반의 버전 처리 차이:**

- **스크럼 스페이스**: 버전을 **사전 계획**하고, 계획된 작업이 완료되면 릴리즈.
- **칸반 스페이스**: 버전을 **언제든** 릴리즈 가능 — 그 시점에 완료된 모든 워크 아이템을 포함.

| 문서                                                                                                                                    | 내용                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [What is a version](https://support.atlassian.com/jira-software-cloud/docs/what-is-a-version/)                                          | 버전 개념                        |
| [Check the progress of a version](https://support.atlassian.com/jira-software-cloud/docs/check-the-progress-of-a-version/)              | 버전 진행 모니터링               |
| [Use the Release page](https://support.atlassian.com/jira-software-cloud/docs/use-the-release-page-to-check-the-progress-of-a-version/) | Releases 기능으로 출시 준비 평가 |
| [Create a version](https://support.atlassian.com/jira-software-cloud/docs/create-a-version-in-a-classic-project/)                       | 버전 생성 및 작업 추가           |
| [Release a version](https://support.atlassian.com/jira-software-cloud/docs/release-a-version-in-your-classic-project/)                  | 버전 릴리즈                      |

### 🔑 핵심 개념 상세: 리포트 (Reports)

Jira Cloud는 프로젝트·버전·에픽·스프린트·작업 정보를 보여주는 다양한 리포트를 제공합니다.

| 리포트                                                                                                                                        | 용도                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [Burndown chart](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-burndown-chart/)                              | 스프린트 목표 달성 가능성 추적 (잔여 작업 소진)      |
| [Burnup chart](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-burnup-chart/)                                  | 스코프 크리프 식별, 스페이스 건전성 유지             |
| [Control chart](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-control-chart/)                                | 현재 스프린트 데이터로 미래 성과 예측 가능 여부 판단 |
| [Cumulative flow diagram](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-cumulative-flow-diagram/)            | 앱·버전·스프린트의 상태별 워크 아이템 흐름           |
| [Epic burndown](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-epic-burndown-report/)                         | 에픽 소진 속도                                       |
| [Epic report](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-epic-report/)                                    | 에픽 완료 진행률, 잔여·미추정 작업 추적              |
| [Velocity chart](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-velocity-chart/)                              | 미래 스프린트 처리 가능 작업량 예측                  |
| [Version report](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-version-report/)                              | 예상 릴리즈 날짜                                     |
| [Sprint report](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-sprint-report/)                                | 스프린트 중간 점검·회고                              |
| [Cycle time report](https://support.atlassian.com/jira-software-cloud/docs/strategies-to-reduce-your-cycle-time/)                             | 사이클 타임 단축 전략                                |
| [Deployment frequency report](https://support.atlassian.com/jira-software-cloud/docs/plan-effectively-with-your-deployment-frequency-report/) | 배포 빈도 지표                                       |
| [Release burndown](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-release-burndown-report/)                               | 릴리즈 대비 백로그 소진 속도                         |

> **💡 전환 관점**: DC에서 쓰던 애자일 리포트(번다운/번업/속도/누적흐름 등)는 Cloud에서 동일하게 제공되며, **Cycle time·Deployment frequency** 같은 DevOps 지표 리포트가 추가로 강화되었습니다.

---

## 3️⃣ 스페이스에서 작업 (Work in Jira Cloud spaces)

> 소프트웨어·비즈니스 스페이스에서 워크 아이템을 생성·검색·작업하고 프로필을 관리하는 방법

### 주요 문서

| 문서                                                                                                                                     | 내용                      |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [Create and configure your work items](https://support.atlassian.com/jira-software-cloud/docs/create-and-configure-your-work-items/)     | 워크 아이템 생성·구성     |
| [Work on and progress your work items](https://support.atlassian.com/jira-software-cloud/docs/work-on-and-progress-your-issues/)         | 작업 진행                 |
| [Update multiple work items at once](https://support.atlassian.com/jira-software-cloud/docs/update-multiple-issues-at-once/)             | 여러 아이템 일괄 업데이트 |
| [Work with dashboards](https://support.atlassian.com/jira-software-cloud/docs/work-with-dashboards-in-jira-cloud/)                       | 대시보드 활용             |
| [Add custom fields](https://support.atlassian.com/jira-software-cloud/docs/add-custom-fields-to-your-project/)                           | 커스텀 필드 추가          |
| [Collect info with forms](https://support.atlassian.com/jira-software-cloud/docs/collect-information-for-your-team-with-a-form/)         | 폼(Forms)으로 정보 수집   |
| [Create a chart from work item data](https://support.atlassian.com/jira-software-cloud/docs/create-a-chart-using-work-item-data/)        | 워크 아이템 데이터 차트   |
| [What is the summary view](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-summary-view/)                             | 요약 뷰                   |
| [What is the "For you" page](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-for-you-page/)                           | "For you" 개인 페이지     |
| [Use Loom in Jira Cloud](https://support.atlassian.com/jira-software-cloud/docs/use-loom-in-jira-cloud/)                                 | Loom 비디오 연동          |
| [Use smart replies in comments](https://support.atlassian.com/jira-software-cloud/docs/use-smart-replies-in-issue-comments/)             | 스마트 답글(AI)           |
| [Work with AI agents in Jira](https://support.atlassian.com/jira-software-cloud/docs/work-with-ai-agents-in-jira/)                       | AI 에이전트(Rovo) 활용    |
| [Work with incidents](https://support.atlassian.com/jira-software-cloud/docs/work-with-incidents-in-jira/)                               | 인시던트 작업             |
| [Work with security vulnerabilities](https://support.atlassian.com/jira-software-cloud/docs/work-with-security-vulnerabilities-in-jira/) | 보안 취약점 작업          |
| [Work with development](https://support.atlassian.com/jira-software-cloud/docs/work-with-development-in-jira-cloud/)                     | 개발(코드·PR·배포) 연동   |
| [Navigate Jira with keyboard](https://support.atlassian.com/jira-software-cloud/docs/navigate-jira-with-your-keyboard/)                  | 키보드 단축키             |

> **💡 전환 관점**: Cloud에는 DC에 없던 **AI 기능(Rovo AI 에이전트, 스마트 답글)**, **Loom 비디오**, **폼(Forms)**, **인시던트/보안 취약점 관리** 등이 기본 통합되어 있습니다. 이는 Cloud 전환의 핵심 가치 중 하나입니다.

---

## 4️⃣ 팀 관리형 스페이스 (Team-managed spaces)

> 팀 관리형 스페이스의 시작·기능 활성화·관리·운영

| 문서                                                                                                                                                  | 내용               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [Get started with team-managed spaces](https://support.atlassian.com/jira-software-cloud/docs/get-started-with-team-managed-projects/)                | 팀 관리형 시작하기 |
| [Add your team to team-managed boards](https://support.atlassian.com/jira-software-cloud/docs/add-your-team-to-team-managed-boards/)                  | 팀원 추가          |
| [Enable agile features](https://support.atlassian.com/jira-software-cloud/docs/enable-agile-features-in-team-managed-projects/)                       | 애자일 기능 활성화 |
| [Manage and administer](https://support.atlassian.com/jira-software-cloud/docs/manage-and-administer-team-managed-projects/)                          | 관리·운영          |
| [Manage how work flows](https://support.atlassian.com/jira-software-cloud/docs/manage-how-work-flows-in-your-team-managed-project/)                   | 작업 흐름 관리     |
| [Configure columns and statuses](https://support.atlassian.com/jira-software-cloud/docs/configure-columns-and-statuses-in-your-team-managed-project/) | 컬럼·상태 구성     |
| [View insights](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-insights-in-team-managed-projects/)                        | 인사이트 보기      |

> **💡 전환 관점**: 팀 관리형 스페이스는 **Jira 관리자 개입 없이** 팀이 직접 워크플로우·상태·기능을 조정할 수 있어, DC의 복잡한 관리자 의존 구조에서 벗어나려는 자율 팀에 적합합니다.

---

## 5️⃣ 워크 아이템 검색 (Search) & JQL

> 워크 아이템 검색·탐색, JQL 고급 검색, 검색 결과 활용

| 문서                                                                                                                                     | 내용               |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [Search and find your work items](https://support.atlassian.com/jira-software-cloud/docs/search-and-find-your-issues/)                   | 기본 검색·탐색     |
| [Use advanced search with JQL](https://support.atlassian.com/jira-software-cloud/docs/use-advanced-search-with-jira-query-language-jql/) | JQL 고급 검색      |
| [Save your search as a filter](https://support.atlassian.com/jira-software-cloud/docs/save-your-search-as-a-filter/)                     | 검색을 필터로 저장 |
| [Work with search results](https://support.atlassian.com/jira-software-cloud/docs/work-with-search-results/)                             | 검색 결과 활용     |

### 🔑 핵심 개념 상세: JQL (Jira Query Language)

**JQL**은 Jira에서 워크 아이템을 검색하는 **가장 강력하고 유연한** 방법입니다. 빠른 검색·기본 검색으로 정의할 수 없는 조건을 지정할 수 있습니다. 예를 들어 `ORDER BY` 절로 결과를 오름차순/내림차순 정렬할 수 있습니다.

JQL은 개발자·테스터·애자일 PM·비즈니스 사용자 **누구나** 사용할 수 있지만, 구조화된 쿼리 작성법을 알아야 합니다.

#### JQL 구성 요소 (전체 하위 문서)

| 구성 요소              | 설명                                           | 문서                                                                                   |
| ---------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Fields (필드)**      | 검색 대상 항목 (예: project, status, assignee) | [JQL fields](https://support.atlassian.com/jira-software-cloud/docs/jql-fields/)       |
| **Operators (연산자)** | 비교 연산 (=, !=, >, <, IN, ~ 등)              | [JQL operators](https://support.atlassian.com/jira-software-cloud/docs/jql-operators/) |
| **Keywords (키워드)**  | AND, OR, NOT, ORDER BY 등                      | [JQL keywords](https://support.atlassian.com/jira-software-cloud/docs/jql-keywords/)   |
| **Functions (함수)**   | currentUser(), now(), startOfDay() 등          | [JQL functions](https://support.atlassian.com/jira-software-cloud/docs/jql-functions/) |

#### 특수 JQL 검색

- [Advanced search 개요](https://support.atlassian.com/jira-software-cloud/docs/what-is-advanced-search-in-jira-cloud/)
- [JQL developer status](https://support.atlassian.com/jira-software-cloud/docs/jql-developer-status/) — 개발 진행 상태 추적
- [JQL design search](https://support.atlassian.com/jira-software-cloud/docs/jql-design-search/) — 디자인 진행 추적
- [JQL vulnerability search](https://support.atlassian.com/jira-software-cloud/docs/jql-vulnerability-search/) — 취약점 검색
- [Search custom fields from Plans](https://support.atlassian.com/jira-software-cloud/docs/search-for-custom-fields-from-plans-in-jql/)
- [JQL 최적화 권장사항](https://support.atlassian.com/jira-software-cloud/docs/jql-optimization-recommendations/)

> **JQL 예시**: `project = "ABC" AND status = "In Progress" AND assignee = currentUser() ORDER BY priority DESC`

> **💡 전환 관점**: JQL 문법은 DC와 Cloud가 **거의 동일**하여, DC에서 작성한 필터·쿼리 자산을 그대로 활용할 수 있습니다. 단, Cloud는 `developer status`, `design`, `vulnerability` 등 새로운 검색 필드가 추가되었습니다.

---

## 6️⃣ Plans — 다중 스페이스 계획 (Advanced Roadmaps)

> 여러 팀·스페이스·릴리즈에 걸친 작업을 Plans로 계획·조망 (Jira Premium 기능)

| 문서                                                                                                                                          | 내용               |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [Get started with plans](https://support.atlassian.com/jira-software-cloud/docs/get-started-with-advanced-roadmaps/)                          | Plans 시작하기     |
| [Configure Jira for plans](https://support.atlassian.com/jira-software-cloud/docs/configure-jira-software-for-advanced-roadmaps/)             | Plans용 Jira 구성  |
| [Set up your plan and settings](https://support.atlassian.com/jira-software-cloud/docs/set-up-advanced-roadmaps-and-change-plan-settings/)    | 플랜 설정          |
| [Manage and edit work items](https://support.atlassian.com/jira-software-cloud/docs/manage-and-edit-issues-in-advanced-roadmaps/)             | 플랜 내 작업 편집  |
| [Estimate and schedule work](https://support.atlassian.com/jira-software-cloud/docs/estimate-and-schedule-issues-in-advanced-roadmaps/)       | 추정·일정 수립     |
| [Plan next quarter with Program board](https://support.atlassian.com/jira-software-cloud/docs/plan-your-next-quarter-using-a-program-board/)  | 프로그램 보드      |
| [Create planning scenarios](https://support.atlassian.com/jira-software-cloud/docs/create-different-planning-scenarios-in-advanced-roadmaps/) | 시나리오 계획      |
| [Manage capacity](https://support.atlassian.com/jira-software-cloud/docs/manage-capacity-in-advanced-roadmaps/)                               | 용량 관리          |
| [Manage releases](https://support.atlassian.com/jira-software-cloud/docs/manage-releases-in-advanced-roadmaps/)                               | 릴리즈 관리        |
| [Manage teams](https://support.atlassian.com/jira-software-cloud/docs/manage-teams-in-your-advanced-roadmaps-plan/)                           | 팀 관리            |
| [View and manage dependencies](https://support.atlassian.com/jira-software-cloud/docs/view-and-manage-dependencies-in-advanced-roadmaps/)     | 의존성 관리        |
| [Resolve warnings](https://support.atlassian.com/jira-software-cloud/docs/resolve-warnings-in-advanced-roadmaps/)                             | 경고 해결          |
| [Change timeline display](https://support.atlassian.com/jira-software-cloud/docs/change-how-advanced-roadmaps-displays-your-timeline-data/)   | 타임라인 표시 변경 |
| [Review and save changes](https://support.atlassian.com/jira-software-cloud/docs/review-and-save-changes-in-advanced-roadmaps/)               | 변경 검토·저장     |
| [Share and export your plan](https://support.atlassian.com/jira-software-cloud/docs/share-and-export-your-advanced-roadmaps-plan/)            | 플랜 공유·내보내기 |

> **Plans 핵심**: 여러 팀·스페이스·릴리즈를 가로질러 **시나리오 기반 계획**, **용량(capacity) 관리**, **의존성 시각화**, **프로그램 보드(분기 계획)** 를 제공합니다. **Scenario** 기능으로 변경 사항을 실제 저장 전에 시뮬레이션할 수 있습니다.

> **💡 전환 관점**: Plans(구 Advanced Roadmaps)는 **Jira Premium** 에디션 기능입니다. DC의 Portfolio for Jira / Advanced Roadmaps를 사용하던 조직은 Cloud Premium에서 동일·강화된 다중 팀 계획 기능을 사용할 수 있습니다.

---

## 📌 Datacenter → Cloud 전환 핵심 시사점 요약

| 영역              | DC                          | Cloud                              | 전환 시사점                                   |
| ----------------- | --------------------------- | ---------------------------------- | --------------------------------------------- |
| **프로젝트 유형** | Classic / Next-gen          | Company-managed / Team-managed     | 용어·관리 모델 변경, 자율 팀은 팀 관리형 검토 |
| **데이터 이관**   | —                           | Import data into Jira              | 공식 가져오기 도구로 이관                     |
| **리포트**        | 애자일 리포트               | + Cycle time, Deployment frequency | DevOps 지표 강화                              |
| **AI**            | 없음                        | Rovo AI 에이전트, 스마트 답글      | Cloud 전용 신규 가치                          |
| **모바일**        | 별도 구성                   | iOS/Android 앱 기본 제공           | 즉시 사용                                     |
| **협업 도구**     | 제한적                      | Loom, Forms, Confluence 긴밀 통합  | 협업 생산성 향상                              |
| **다중 팀 계획**  | Portfolio/Advanced Roadmaps | Plans (Premium)                    | 시나리오·용량·의존성                          |
| **JQL**           | 지원                        | 거의 동일 + 신규 필드              | 기존 쿼리 자산 재활용 가능                    |
| **관리 부담**     | 자체 인프라·업그레이드      | Atlassian 관리형                   | 운영 부담 대폭 감소                           |

---

_본 분석은 [Atlassian Support — Jira Cloud resources](https://support.atlassian.com/jira-software-cloud/resources/) 및 하위 문서를 기반으로 한국어로 정리한 교육 참조 자료입니다. (분석일: 2026-06)_
