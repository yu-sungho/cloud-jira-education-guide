---
layout: default
title: Jira 제품 가이드 전체 분석
nav_order: 12
---

# Jira 제품 가이드(Product Guide) 종합 분석

## www.atlassian.com/software/jira/guides 메뉴 전체 기반 상세 자료

> **출처**: [Jira Product Guide — Atlassian](https://www.atlassian.com/software/jira/guides/getting-started/introduction)
> Atlassian 공식 Jira 제품 가이드의 **좌측 사이드바 메뉴 전체**(16개 챕터)를 기준으로, 각 항목의 상세 내용을 한국어로 정리한 교육 자료입니다. 각 챕터는 공식 가이드에서 **Overview / Tutorials / Resources** 구성을 가지며, 본 문서는 핵심 개념(Overview)을 중심으로 정리합니다.
>
> **이미지 안내**: 본 문서의 이미지는 Atlassian 공식 CDN(`wac-cdn.atlassian.com`) URL로 직접 연결되어 있습니다. Atlassian 측 정책에 따라 경로가 변경되면 깨질 수 있습니다.

---

## 📑 가이드 전체 메뉴 구조 (목차)

공식 제품 가이드의 좌측 사이드바는 다음 16개 챕터로 구성됩니다.

| #   | 챕터 (Chapter)                             | 핵심 주제                                 |
| --- | ------------------------------------------ | ----------------------------------------- |
| 1   | **Getting Started** (시작하기)             | Jira 소개, 사용 대상, 7단계 시작 가이드   |
| 2   | **Projects / Spaces** (스페이스)           | 작업 컨테이너, 스페이스 유형              |
| 3   | **Boards** (보드)                          | 스크럼/칸반 보드, 스윔레인                |
| 4   | **Work items / Issues** (워크 아이템)      | 에픽·스토리·태스크·버그·서브태스크        |
| 5   | **Workflows** (워크플로우)                 | 상태·전환·해결, 워크플로우 스킴           |
| 6   | **Integrations** (연동)                    | 마켓플레이스 앱, 팀별 추천 앱             |
| 7   | **Reports & Dashboards** (리포트·대시보드) | 리포트 4종, 가젯, 대시보드                |
| 8   | **Insights** (인사이트)                    | 백로그·보드 인사이트                      |
| 9   | **Permissions** (권한)                     | 글로벌·스페이스·워크아이템 권한, 역할     |
| 10  | **JQL**                                    | Jira 쿼리 언어, 필드·연산자·함수          |
| 11  | **Navigation** (내비게이션)                | 상단바·사이드바·프로젝트 내비·콘텐츠 영역 |
| 12  | **Automation** (자동화)                    | 트리거·조건·액션, 스마트 값               |
| 13  | **Timeline** (타임라인)                    | 기본 로드맵, 에픽·의존성                  |
| 14  | **Advanced Planning** (고급 계획)          | Plans, 용량·시나리오·다중 팀              |
| 15  | **Jira Mobile** (모바일)                   | iOS/Android 앱                            |
| 16  | **More About Jira**                        | 에디션(Free~Enterprise), 호스팅 옵션      |

> 각 챕터(1~16)는 공식 가이드에서 **Overview(개요) · Tutorials(튜토리얼) · Resources(자료)** 3개 하위 페이지로 제공됩니다. 본 문서는 Overview 중심으로 정리하되, 실습은 Tutorials를, 추가 학습은 Resources를 참고하세요.

---

## 1️⃣ Getting Started — 시작하기

### Introduction to Jira (Jira 소개)

![팀 온보딩](https://wac-cdn.atlassian.com/dam/jcr:7a93171e-4678-4d78-acbd-9955a8287356/JSW-Guides-Homepage-TeamOnboarding.png?cdnVersion=3439)

**Jira란?** "모든 팀을 한데 모아 어떤 유형의 프로젝트든 계획·추적·전달하는 업계 최고의 프로젝트 관리 도구"입니다. 2002년 출시 이후 전 세계 **30만 개 이상의 기업**이 사용 중입니다.

- **핵심 목적**: 조직 전체의 **단일 진실 공급원(Single Source of Truth)**. 일상 업무 관리부터 AI 워크플로우 기반 복잡한 프로젝트 확장까지 지원.
- **유연성**: 애자일 계획부터 리스트·타임라인·칸반·스크럼 보드까지 어떤 방법론도 수용.
- **주요 기능**: Boards(보드), Timeline(타임라인), Insights(인사이트), Integrations(6,000+ 앱 연동).

### Jira for Teams (누가 Jira를 사용하나)

![팀 협업](https://wac-cdn.atlassian.com/dam/jcr:9e0102c5-d04d-4815-87c4-96fb5d3b1791/Create,Share-Team%20Onboarding-c.png?cdnVersion=3439)

규모 **2명~2,000명**의 팀, 금융·리테일·소프트웨어·자동차·비영리·정부 등 다양한 산업이 사용합니다.

| 팀/역할            | 활용                                                |
| ------------------ | --------------------------------------------------- |
| 프로젝트 관리      | 템플릿·워크플로우로 모든 프로젝트 유형, 모바일 추적 |
| 소프트웨어 개발    | 의존성·요구사항 관리, CI/CD 연동, 피처 플래깅       |
| 마케팅             | 캠페인 관리, AI 작업 분해, 통합 가시성              |
| 디자인             | 디자인 파이프라인, 리소스 배분, Figma 연동          |
| IT                 | 이슈 추적~변경 관리, Jira Service Management 연동   |
| 운영(Operations)   | 통제 프로세스·조달·재고 관리                        |
| 프로그램/제품 관리 | 의존성 매핑, 타임라인 계획, 이해관계자 커뮤니케이션 |

### 7 Steps to Get Started (7단계 시작 가이드)

| 단계                    | 내용                                                      |
| ----------------------- | --------------------------------------------------------- |
| **1. 스페이스 생성**    | 상단 Spaces 드롭다운 → "Create space"                     |
| **2. 템플릿 선택**      | Scrum / Kanban / Bug Tracking. 팀 관리형/회사 관리형 선택 |
| **3. 컬럼 설정**        | 각 컬럼 = 워크플로우 단계                                 |
| **4. 워크 아이템 생성** | 스페이스의 빌딩 블록. "Create"로 생성                     |
| **5. 도구 연결**        | Atlassian Marketplace에서 앱 설치                         |
| **6. 팀 초대**          | 보드에 아이템이 쌓이면 협업자 초대                        |
| **7. 작업 진행**        | 컬럼 간 이동으로 진행, 스크럼은 스프린트 생성             |

**템플릿 아이콘 (스크럼 / 칸반 / 버그 트래킹)**

![Scrum](https://wac-cdn.atlassian.com/dam/jcr:b2b10b5f-0600-41e7-b587-656194b8d5d5/JSW-Guides-7-Steps-IMG1.png?cdnVersion=3439)
![Kanban](https://wac-cdn.atlassian.com/dam/jcr:545f1c93-befd-44ce-8a97-2d56c8f4197b/JSW-Guides-7-Steps-IMG2.png?cdnVersion=3439)
![Bug Tracking](https://wac-cdn.atlassian.com/dam/jcr:0726f78c-f1d8-460f-9ead-d8863e70c9a2/JSW-Guides-7-Steps-IMG3.png?cdnVersion=3439)

**워크 아이템 생성 / 작업 진행 화면**

![워크 아이템 생성](https://wac-cdn.atlassian.com/dam/jcr:4b2f4ec3-e84c-49cd-80e3-6f979b2788ba/JSW-Guides-7-Steps-IMG5.png?cdnVersion=3439)
![작업 진행](https://wac-cdn.atlassian.com/dam/jcr:6272bf05-be76-448d-9c91-73161706309a/JSW-Guides-7-Steps-IMG7.png?cdnVersion=3439)

---

## 2️⃣ Projects / Spaces — 스페이스

**스페이스(Space)** 는 "팀 전체의 작업을 조직·추적하는 컨테이너"입니다. (구 Project) 버그 추적, 기능 출시 등 다양한 업무를 담습니다.

### 스페이스의 3대 핵심 요소

1. **Work Items(워크 아이템)** — 큰 목표를 작은 관리 가능한 작업으로 분해
2. **People(사람)** — 협업할 팀원 초대
3. **Workflows(워크플로우)** — 생성→완료까지 작업을 안내하는 프로세스

### 스페이스 템플릿

- **Kanban** — 연속 흐름 시각화 + WIP(진행 중 작업) 제한
- **Scrum** — 타임박스 배포 주기, 백로그 우선순위, 스프린트 관리

### 스페이스 유형

| 구분      | 팀 관리형 (Team-managed)     | 회사 관리형 (Company-managed)   |
| --------- | ---------------------------- | ------------------------------- |
| 관리 주체 | 스페이스 관리자 (자율)       | Jira 관리자 (표준화)            |
| 설정      | 단순, 독립적                 | 공유 구성, 여러 스페이스에 적용 |
| 기능      | 기본 타임라인, 단일 스프린트 | 병렬 스프린트, 종합 리포트      |

> **💡 전환 관점**: DC의 Classic = Cloud의 Company-managed, Next-gen = Team-managed.

---

## 3️⃣ Boards — 보드

**보드(Board)** 는 "작업을 계획·시각화·관리하는 도구". 워크플로우 단계를 나타내는 컬럼에 워크 아이템을 배치하여, 미시작/진행 중/완료 상태를 가시화합니다.

> **스페이스 vs 보드**: 스페이스는 목표 달성에 필요한 모든 워크 아이템을 담는 곳, 보드는 그것을 생성→완료로 옮기는 관리 도구.

### 두 가지 보드 유형

| 구분     | 스크럼 보드 (Scrum)          | 칸반 보드 (Kanban)                 |
| -------- | ---------------------------- | ---------------------------------- |
| 철학     | 경험으로 배우고 회고로 개선  | 시각화로 역량 파악, 진행 작업 개선 |
| 주기     | 고정 길이 스프린트(보통 2주) | 연속 흐름 (고정 이터레이션 없음)   |
| 핵심기능 | 스프린트, 백로그, 인사이트   | 워크플로우 컬럼, WIP 제한          |
| 적합     | 타임박스 단위로 일하는 팀    | 작업 흐름 관리 우선 팀             |

**스크럼 보드 / 칸반 보드**

![Scrum board](https://wac-cdn.atlassian.com/dam/jcr:78080b89-38b3-4601-898d-9a3451799830/UIF-Scrum-Board.png?cdnVersion=3439)
![Kanban board](https://wac-cdn.atlassian.com/dam/jcr:87e9f899-e71e-4663-b817-c7b8169252f1/UIF-Kanban-Board.png?cdnVersion=3439)

### 추가 개념

- **다중 보드(Multiple Boards)** — 한 스페이스 내 기준별로 다른 보드
- **크로스 스페이스 보드** — 여러 스페이스의 아이템을 한 보드에 (경영진 개요용)
- **스윔레인(Swimlanes)** — 워크스트림·사용자·영역별 가로 분류

![다중 보드/프로젝트](https://wac-cdn.atlassian.com/dam/jcr:4c778645-1971-4801-b3e1-f971260c8529/Overivew%20-%20multiple%20boards%20and%20projects.png?cdnVersion=3439)
![Swimlanes](https://wac-cdn.atlassian.com/dam/jcr:52fd359e-966e-41ad-9151-bf835fc83338/UIF-Kanban-Swimlanes.png?cdnVersion=3439)

---

## 4️⃣ Work Items / Issues — 워크 아이템

**워크 아이템(Work Item, 구 Issue)** 은 Jira의 기본 추적 단위. 작업·헬프데스크 티켓·휴가 요청·기능·요구사항·버그 등을 표현합니다.

### 5가지 기본 워크 타입

| 아이콘                                                                                                              | 타입         | 설명                                        | 예시(레모네이드 가게)      |
| ------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------- | -------------------------- |
| ![Epic](https://wac-cdn.atlassian.com/dam/jcr:44fb6bf0-39c2-4cf8-ab81-64635491ebd6/epic.svg?cdnVersion=3439)        | **Epic**     | 더 큰 작업 묶음, 여러 워크 아이템의 모음    | 레모네이드 가게 시작       |
| ![Task](https://wac-cdn.atlassian.com/dam/jcr:21a80815-2cfa-4744-afb6-3c683d1e2429/task.svg?cdnVersion=3439)        | **Task**     | 해야 할 작업 (포괄적 "catch-all")           | 레모네이드 만들기          |
| ![Story](https://wac-cdn.atlassian.com/dam/jcr:618aa0cf-f845-477e-abcf-1ac258f1e210/story.svg?cdnVersion=3439)      | **Story**    | 사용자 관점의 요구사항                      | "차갑고 상큼한 레모네이드" |
| ![Bug](https://wac-cdn.atlassian.com/dam/jcr:38fa0a54-16f0-4779-ba1b-52e33e4ac22a/bug.svg?cdnVersion=3439)          | **Bug**      | 고쳐야 할 문제                              | 레모네이드가 너무 시다     |
| ![Sub-task](https://wac-cdn.atlassian.com/dam/jcr:3aeb095c-f93f-414e-a80b-8015246cedea/subtask.svg?cdnVersion=3439) | **Sub-task** | 표준 워크 아이템을 더 잘게 분해한 하위 작업 | (생성 후 추가하는 자식)    |

### 워크 아이템 계층 (Hierarchy)

![워크 아이템 계층](https://wac-cdn.atlassian.com/dam/jcr:9ad770b4-f380-40b8-a802-05abe4e4ebee/issue-hierarchy-v2.png?cdnVersion=3439)

```
Epic (큰 목표)
 └─ Work items: Story / Task / Bug (개별 작업)
      └─ Sub-task (완료에 필요한 세부 작업)
```

### 워크 아이템 구조 & 관계

![워크 아이템 전체 화면](https://wac-cdn.atlassian.com/dam/jcr:9893980a-fbb3-4f51-be7a-16c1e53ddc4c/jira-issues.png?cdnVersion=3439)

- **Parent-Child(부모-자식)**: 태스크가 서브태스크를 포함하는 식
- **Linked(연결)**: 의존 관계 — "blocks(차단)", "clones(복제)", "relates to(관련)"

![부모-자식 관계](https://wac-cdn.atlassian.com/dam/jcr:62e3c242-5cb1-439f-b248-7f2d3d4c9d83/parent-and-child-issues.png?cdnVersion=3439)
![연결된 워크 아이템](https://wac-cdn.atlassian.com/dam/jcr:c4b69339-9199-4932-89db-c9a54cd44bdd/linked-issues.png?cdnVersion=3439)

---

## 5️⃣ Workflows — 워크플로우

**워크플로우** 는 "워크 아이템이 생성→완료까지 거치는 경로".

![워크플로우란](https://wac-cdn.atlassian.com/dam/jcr:f276b118-7411-401f-9240-1f317c943d83/what-is-a-workflow.png?cdnVersion=3439)

### 3대 구성 요소

1. **Status(상태)** — 워크플로우 내 위치 (Open, In Progress, In Review, Pending)
2. **Transition(전환)** — 상태 간 이동 액션. **단방향**이므로 왕복은 2개 전환 필요
3. **Resolution(해결)** — 완료 시 적용 (Closed, Resolved, Done, Won't Do). **회사 관리형에서만** 제공

### 추가 개념

- **워크플로우 스킴(Workflow Scheme)** — 워크플로우와 워크 타입을 연결. 여러 스페이스가 공유 가능
- **워크플로우 에디터** — 그래픽 편집 도구 (팀 관리형 제공, 'Jira System Administrators' 권한 필요)
- **보드와의 관계** — 보드 컬럼 ↔ 워크플로우 상태 매핑. 복잡한 경우 여러 상태를 한 컬럼에 매핑
- **고급 설정 vs 자동화** — 고급 설정(회사 관리형)은 전환 조건 제어, 자동화는 더 넓은 적용

![워크플로우 스킴](https://wac-cdn.atlassian.com/dam/jcr:7b6e8ae4-f0af-48d8-9a56-356487b7e9ce/what-is-a-workflow-scheme.png?cdnVersion=3439)
![워크플로우 에디터](https://wac-cdn.atlassian.com/dam/jcr:b22bafd9-1376-4615-b949-f5a806b60396/workflow-editor.png?cdnVersion=3439)
![보드와 워크플로우 관계](https://wac-cdn.atlassian.com/dam/jcr:a2305d19-0dc8-4650-81f5-7fac28a36f8c/workflow-and-board-relationship.jpeg?cdnVersion=3439)

---

## 6️⃣ Integrations — 연동

### 핵심 개념

- **Jira 앱** — Jira 기능을 확장하는 설치형 컴포넌트, **3,000개 이상** 제공. 도구 분산 감소(개발자 평균 3.3개 도구 → Jira 고객 2.3개)
- **Atlassian Marketplace** — 수천 개 앱·연동의 중앙 저장소. Slack·Microsoft·Google·Zoom 등과 파트너십. 대부분 무료·간편 설치

### 팀별 추천 앱

| 팀            | 추천 앱                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| 디자인        | Figma, Adobe XD, Invision, Gliffy, Draw.io, Balsamiq, Lucidchart, Miro    |
| IT            | Opsgenie, Jenkins, Dynatrace, GitHub, ScriptRunner, Slack, Zendesk        |
| 비즈니스      | Trello, Slack, MS Teams, Google Sheets, Excel, Gmail, Outlook, Confluence |
| SW 엔지니어링 | Bitbucket, GitHub, Jenkins, CircleCI, LaunchDarkly, Optimizely, Zephyr    |

**대표 연동 로고**

![Figma](https://wac-cdn.atlassian.com/dam/jcr:634e463f-93b0-4292-aca6-019bb49c3087/jsw_integrations-image-figma@2x.png?cdnVersion=3439)
![GitHub](https://wac-cdn.atlassian.com/dam/jcr:3338e6de-f755-4f04-80b7-b887a1a23014/jsw_integrations-image-github@2x.png?cdnVersion=3439)
![Slack](https://wac-cdn.atlassian.com/dam/jcr:4394544e-8f8b-4113-8c6c-fa457903c1df/jsw_integrations-image-slack@2x.png?cdnVersion=3439)
![Bitbucket](https://wac-cdn.atlassian.com/dam/jcr:052641e0-d633-40de-bc75-8b7cc135adc3/jsw_integrations-image-bitbucket@2x.png?cdnVersion=3439)
![Confluence](https://wac-cdn.atlassian.com/dam/jcr:2560fa3e-2d97-400d-b2a7-677dc26a4931/jsw_integrations-image-confluence@2x.png?cdnVersion=3439)
![Jenkins](https://wac-cdn.atlassian.com/dam/jcr:10cf34dd-7bf6-44b9-bf68-9776e67ee965/jsw_integrations-image-jenkins-official@2x.png?cdnVersion=3439)

---

## 7️⃣ Reports & Dashboards — 리포트·대시보드

### 리포트 4종류

1. **Agile reports(애자일)** — 속도(velocity), 병목 파악, 미래 성과 예측
2. **DevOps reports** — 배포 파이프라인 빈도, 협업 강화
3. **Issue analysis reports(이슈 분석)** — 작업 유형 집중도, 업무량 관리
4. **Forecast & management(예측·관리)** — 용량 평가, 미래 성과 예측

### 대시보드

- **가젯(Gadgets)** 의 모음 — 실시간 정보를 표시하는 사전 설치 데이터 블록
- 상단 내비게이션에서 접근, **비공개/공유** 가능, **단일/다중 프로젝트** 범위
- **시스템 대시보드** — Jira Cloud 최초 접속 시 기본 대시보드. 관리자만 가젯·레이아웃 수정 가능

![Jira 대시보드](https://wac-cdn.atlassian.com/dam/jcr:0b62443a-5c57-48a5-99b8-537876ae373b/jira-dashboard.png?cdnVersion=3439)

---

## 8️⃣ Insights — 인사이트

**인사이트** 는 "현재 작업 맥락을 벗어나지 않고 데이터 기반 의사결정"을 가능하게 합니다. 보드·프로젝트의 과거 진행 데이터를 집계. 현재 스크럼 지표 중심(팀/회사 관리형 모두 지원).

### 백로그 인사이트

- **Sprint Commitment** — 최근 5개 스프린트 업무량으로 과/소 약정 판단
- **Issue Type Breakdown** — 버그·태스크·기술 부채 등 작업 유형 분포

### 보드 인사이트

- **Sprint Progress** — 상태별(완료/진행/미시작) 진행률 (스탠드업용)
- **Burndown** — 완료 vs 잔여, 스프린트 완료 가능성 예측
- **Issues That Need Attention** — 막힘/차단/플래그된 이슈 강조
- **Epic Progress** — 스프린트 작업이 에픽 목표에 기여하는 정도

---

## 9️⃣ Permissions — 권한

### 핵심 정의

- **User(사용자)** — Jira에 로그인 가능한 개인. **Group(그룹)** — 동일 글로벌 권한을 공유하는 사용자 집합 (기본: `jira-administrators`, `jira-software-users`)
- **Permission Scheme(권한 스킴)** — 그룹·역할·사용자에게 부여된 권한 조합 (스페이스 단위)

### 3가지 권한 유형

| 유형                       | 범위          | 예시                              |
| -------------------------- | ------------- | --------------------------------- |
| **Global(글로벌)**         | 시스템 전체   | 로그인, 사용자 조회, 대량 변경    |
| **Space(스페이스)**        | 특정 스페이스 | 스페이스 관리/조회, 스프린트 관리 |
| **Work Item(워크 아이템)** | 개별 아이템   | 생성·할당·편집·종료               |

### 스페이스 역할 (Space Roles)

기본 3개: **Administrators**(설정·멤버 관리), **Developers**(할당 작업 편집), **Users**(생성·코멘트). 글로벌 그룹과 달리 **스페이스별**로 관리됨.

![역할 매핑](https://wac-cdn.atlassian.com/dam/jcr:4f70da30-4a28-4c3c-a103-61127615d313/project-roles-1.png?cdnVersion=3439)
![다중 역할 할당](https://wac-cdn.atlassian.com/dam/jcr:3229cb87-cb43-45b3-baed-f7e1e8966eb9/project-roles-2.png?cdnVersion=3439)

---

## 🔟 JQL — Jira Query Language

**JQL** 은 Jira의 고급 검색 언어. 프로젝트 내·간 워크 아이템을 구조화된 쿼리로 검색하고, **필터로 저장**해 보드·뷰에서 재사용합니다.

![JQL 구성 요소](https://wac-cdn.atlassian.com/dam/jcr:951e6080-2032-494b-853d-626f6bac8cb9/Overview%20-%20elements%20of%20jql.png?cdnVersion=3439)

### 쿼리 4대 구성 요소

| 요소         | 설명                           | 예                      |
| ------------ | ------------------------------ | ----------------------- |
| **Field**    | 검색 대상 데이터 (priority 등) | `project`, `status`     |
| **Operator** | 필드·값 관계                   | `=`, `!=`, `<`, `IN`    |
| **Value**    | 찾을 실제 데이터               | `"In Progress"`         |
| **Keyword**  | 조건 결합 특수어               | `AND`, `OR`, `ORDER BY` |

### JQL 치트 시트

**연산자**

| 연산자 | 용도         | 예                                                     |
| ------ | ------------ | ------------------------------------------------------ |
| `=`    | 정확히 일치  | `Project = "Marketing Campaign"`                       |
| `!=`   | 불일치       | `assignee != currentUser()`                            |
| `AND`  | 모두 참      | `priority = High AND status = Open`                    |
| `OR`   | 하나 이상 참 | `component = "UI" OR component = "API"`                |
| `IN`   | 목록 일치    | `status IN ("In Progress", "Under Review", "Testing")` |

**주요 함수/키워드**

- `ORDER BY` → `project = "Marketing" ORDER BY created DESC`
- `WAS` → `status WAS "Resolved" AND status = "Open"`
- `CHANGED` → `status CHANGED AFTER -1w`
- `MEMBERSOF` → `assignee IN MEMBERSOF("developers")`

**자주 쓰는 쿼리**

```jql
-- 내게 할당된 높은 우선순위
priority = High AND assignee = currentUser()

-- 특정 프로젝트의 기한 초과 미완료
project = "Customer Support" AND duedate < now() AND status != Closed

-- 최근 7일 생성 항목
created >= -7d ORDER BY created DESC

-- 커스텀 필드 검색
"Custom Field Name" ~ "search term"
```

> **검색 3종**: Quick(빠른) / Basic(기본) / Advanced(JQL 고급).

---

## 1️⃣1️⃣ Navigation — 내비게이션

Jira 내비게이션은 직관적·확장 가능한 협업을 위한 **4대 구성 요소**로 이루어집니다.

1. **Top Bar(상단바)** — 모든 화면 공통. Search & Create, Rovo AI 챗, 알림, 설정, 사이트 전환
2. **Sidebar(사이드바)** — 내비게이션의 출발점. For You/Recent/Starred/Apps, Projects, Dashboards/Filters/Assets/Goals, 커스텀 항목
3. **Project Navigation(프로젝트 내비)** — 가로 탭으로 프로젝트 뷰 전환. 관리자가 표시·이름·순서·기본 뷰 커스터마이즈
4. **Main Content Area(메인 콘텐츠 영역)** — 실제 작업 공간. 사이드바 접기로 확장 가능

---

## 1️⃣2️⃣ Automation — 자동화

**자동화** 는 노코드 룰 빌더로 "작업·프로세스·워크플로우를 자동화". Jira Cloud·Confluence Cloud에서 제공.

![자동화 구성 요소](https://wac-cdn.atlassian.com/dam/jcr:12e7312c-f425-4b86-8611-228806fbfc55/Overview%20-%20elements%20of%20automation.png?cdnVersion=3439)

### 룰의 3대 빌딩 블록

1. **Trigger(트리거)** — 룰을 시작하는 이벤트 (아이템 생성, 필드 변경). 수동/조건/스케줄 실행, GitHub·Bitbucket 등 외부 서비스 발생 가능
2. **Condition(조건)** — 진행 여부 필터 (예: 높은 우선순위만 에스컬레이션). 실패 시 중단
3. **Action(액션)** — 룰이 수행하는 작업 (아이템 편집, 알림 전송, 서브태스크 생성)

### 추가 개념

- **Branching(브랜칭)** — 관련 아이템·서브태스크·에픽에 걸쳐 동작
- **Smart Values(스마트 값)** — 동적 데이터 참조 `{{now.plusDays(5)}}`, `{{issue.summary}}`
- **Rule Actor(룰 실행자)** — 룰을 실행하는 사용자, 모든 액션 권한 필요
- **Rule Status** — ENABLED / DISABLED / DRAFT
- **Audit Logs(감사 로그)** — 트리거 시점·결과·수행 액션 추적 (디버깅)

![룰 상태](https://wac-cdn.atlassian.com/dam/jcr:1f298d30-c836-4fd7-9e38-d968f3d5aa2d/Overview%20-%20rule%20status.png?cdnVersion=3439)

---

## 1️⃣3️⃣ Timeline — 타임라인 (기본 로드맵)

**타임라인** 은 **모든 요금제**에서 제공되는 계획 뷰. "단일 팀·프로젝트 내에서 작업 계획·진행 추적·의존성 매핑". 팀/회사 관리형 모두 지원.

### 핵심 구성

- **Epics(에픽)** — 큰 작업 단위. 타임라인에 **색상 막대**로 표시, 관련 작업의 부모 컨테이너
- **Child Issues(자식 이슈)** — 스토리·태스크·버그가 부모 에픽 아래 중첩. 드래그&드롭으로 재배치
- **Dependencies(의존성)** — 이슈 링크로 작업 순서·차단 요소 시각화. (Jira 관리자가 이슈 링크 활성화 필요)

![에픽](https://wac-cdn.atlassian.com/dam/jcr:dc8861f6-4395-4f35-89a3-34d6a51e4051/Overview%20-%20what%20are%20epics.png?cdnVersion=3439)
![자식 이슈](https://wac-cdn.atlassian.com/dam/jcr:25f3b2c6-5cf0-48c7-bb41-50828a82a0cf/Overview%20-%20what%20are%20child%20issues.png?cdnVersion=3439)
![의존성](https://wac-cdn.atlassian.com/dam/jcr:fc130a7b-2619-4ca5-9f64-fbdd3f637788/Overview%20-%20what%20are%20dependencies.png?cdnVersion=3439)

---

## 1️⃣4️⃣ Advanced Planning — 고급 계획 (Plans)

**고급 계획("Plans")** 은 "팀의 팀(teams of teams)이 프로그램·이니셔티브 같은 교차 기능 작업을 계획·추적"하는 기능. 실제 Jira에 반영하기 전 일정·리소스·의존성을 실험하는 **샌드박스**.

![Plans 타임라인 뷰](https://wac-cdn.atlassian.com/dam/jcr:6701a22d-a7fa-4ddd-83fe-fa50c9c97a8d/jira-advanced-planning.png?cdnVersion=3439)

### 핵심 역량

- **Work Item Sources(소스)** — 3종: 보드(스크럼/칸반), 스페이스, 필터(JQL)
- **Hierarchy(계층)** — 에픽·스토리·태스크·버그·서브태스크 + 커스텀 레벨(에픽 위 Initiative 등)
- **Team Management(팀 관리)** — Atlassian 팀 연결, 용량 기반 작업 배분

### 핵심 계획 기능

| 기능                          | 내용                                                 |
| ----------------------------- | ---------------------------------------------------- |
| **Capacity(용량) 계획**       | 스크럼=스토리 포인트/시간, 칸반=시간. 초과 예약 식별 |
| **Dependency(의존성) 매핑**   | 차단·우발 관계 시각화 (배지/라인), 전용 리포트       |
| **Scenario(시나리오) 모델링** | 날짜·리소스 조정으로 best/worst/middle 케이스 탐색   |
| **Release(릴리스) 관리**      | 마일스톤: 단일 스페이스 / 크로스 스페이스            |

![용량 관리](https://wac-cdn.atlassian.com/dam/jcr:d8e4d1d3-625b-43af-882a-08892c9cb8de/capacity-management.png?cdnVersion=3439)
![의존성 관리](https://wac-cdn.atlassian.com/dam/jcr:d1674aa1-95e3-448a-9bdc-272ddb38de2e/dependency-management.png?cdnVersion=3439)
![시나리오 모델링](https://wac-cdn.atlassian.com/dam/jcr:43cf82d9-7165-4746-9979-10f8b0b46e8f/scenario-modeling.png?cdnVersion=3439)
![요약 화면](https://wac-cdn.atlassian.com/dam/jcr:21c1993f-2e0f-4850-a0fa-8582fc760f59/jira-summary-screen.png?cdnVersion=3439)

**공유·리포트** — 요약 화면(완료율·의존성·팀 지표·용량). 직접 링크, Confluence 임베드, CSV/PNG 내보내기.

> **💡 전환 관점**: Plans(구 Advanced Roadmaps/Portfolio)는 **Jira Premium** 기능.

---

## 1️⃣5️⃣ Jira Mobile — 모바일 앱

Jira Cloud는 **iOS·Android** 앱으로 웹 경험을 보완. 모바일은 작업 생성·보드·백로그·리포트·대시보드·폼·승인을 처리하고, **웹은 권한 스킴·앱 연동 등 고급 관리 설정**을 담당.

### 핵심 이점

1. **빠른 응답** — 푸시 알림으로 즉시 업데이트·코멘트·보드 갱신
2. **유연한 협업** — Work-from-anywhere, 모바일↔웹 자동 동기화(중복 입력 불필요)
3. **실시간 추적** — 어디서나 프로젝트 상태 모니터·공유

> 역할별 활용: 개발자(빌드·커밋·PR), PM(다중 팀·의존성), 마케팅(캠페인), 디자이너(Figma), 테스터, 릴리스 매니저, IT.

---

## 1️⃣6️⃣ More About Jira — 에디션·호스팅

### Jira 에디션 (Editions)

| 에디션         | 대상               | 핵심                                            |
| -------------- | ------------------ | ----------------------------------------------- |
| **Free**       | 소규모 (최대 10명) | 거의 모든 기능, 1,000+ 앱, 기본 보안            |
| **Standard**   | 중소기업 (10명+)   | 더 많은 저장공간, 평일 업무시간 지원            |
| **Premium**    | 급성장 조직        | 무제한 저장공간, 24/7 지원(1시간 내), 99.9% SLA |
| **Enterprise** | 대기업             | 대규모 확장 (상세는 가격 페이지 참조)           |

> 차별 포인트: 사용자 수(Free 10명 상한), 저장공간(Standard 제한/Premium 무제한), 지원(업무시간 vs 24/7), 가동률(Premium 99.9%).

### 호스팅 옵션 (Hosting)

| 항목   | Cloud             | Data Center                  |
| ------ | ----------------- | ---------------------------- |
| 관리   | Atlassian 호스팅  | 자체 관리 또는 AWS/Azure 등  |
| 대상   | 빠른 시작 우선 팀 | 무중단·대규모 성능 필요 기업 |
| 복잡도 | 최소 기술 부담    | 높은 기술 소유권             |
| 통제   | 제한적            | 인프라 완전 통제             |

![Cloud](https://wac-cdn.atlassian.com/dam/jcr:8fa80af3-aaf3-4568-a259-6cf0ff35c6b3/JSW-Cloud.png?cdnVersion=3439)
![Data Center](https://wac-cdn.atlassian.com/dam/jcr:daf942e3-1b99-4000-aac9-9233f8a49e37/JSW-Server.png?cdnVersion=3439)

---

## 📌 학습 경로 제안 (Suggested Learning Path)

1. **기초** — Getting Started → Projects/Spaces → Boards → Work Items
2. **프로세스** — Workflows → Permissions → Automation
3. **계획·추적** — Timeline → Reports & Dashboards → Insights → Advanced Planning
4. **검색·확장** — JQL → Integrations → Navigation → Mobile
5. **도입 결정** — Editions → Hosting

> 각 챕터의 **Tutorials**(실습)와 **Resources**(추가 자료)는 공식 가이드의 해당 챕터 하위 페이지에서 확인할 수 있습니다.

---

_본 자료는 [Atlassian — Jira Product Guide](https://www.atlassian.com/software/jira/guides/getting-started/introduction)의 좌측 메뉴 16개 챕터(Overview)를 기반으로 한국어로 정리한 교육 참조 자료입니다. 이미지는 Atlassian 공식 CDN에 직접 링크됩니다. (작성일: 2026-06-12)_
