---
layout: default
title: 타임라인·캘린더 뷰
nav_order: 10
---

# Jira 타임라인·캘린더 뷰로 일정 관리하기

## Schedule work with the Timeline and Calendar views in Jira — Atlassian Community Learning 정리

> **출처**: [community.atlassian.com/learning/lesson/schedule-work-with-jira-timeline-and-calendar-view](https://community.atlassian.com/learning/lesson/schedule-work-with-jira-timeline-and-calendar-view)  
> **소요 시간**: 약 10분

---

## 학습 목표

이 레슨을 마치면 다음을 할 수 있습니다:

- 워크 아이템 간 **의존성(Dependencies)**을 생성할 수 있다
- 의존 관계에서 **리스크와 경고**를 시각화할 수 있다
- 주간·월간·분기별로 **일정을 계획**할 수 있다

---

## 1. Jira의 일정 관리 뷰

Jira 비즈니스 및 소프트웨어 스페이스는 일정 관리를 위한 두 가지 뷰를 제공합니다.

### 타임라인 뷰(Timeline view)

스페이스의 업무를 **왼쪽에서 오른쪽으로 시간순으로** 표시합니다.  
상위 워크 아이템 내의 하위 워크 아이템 일정 수립과 업무 간 의존성 매핑에 이상적입니다.

![타임라인 뷰 화면 - 업무 기간을 나타내는 바(bar)와 의존성을 나타내는 연결선 표시](https://dam-cdn.atl.orangelogic.com/AssetLink/471qd42oqwbey6hi28sn825p21ce4k12.png)

### 캘린더 뷰(Calendar view)

스페이스의 업무를 **월별 캘린더** 형식으로 표시합니다.  
마감일, 스프린트, 릴리즈 추적에 이상적이며, 개인 업무 관리에도 유용합니다.

![캘린더 뷰 화면 - 날짜에 예약된 워크 아이템 표시](https://dam-cdn.atl.orangelogic.com/AssetLink/ocun81xw04po67g515u145x7o4g51o2l)

> **참고**: 캘린더 뷰는 서비스 스페이스에서도 사용 가능합니다. 타임라인 뷰는 비즈니스 및 소프트웨어 스페이스 전용입니다.

---

## 2. 타임라인·캘린더 뷰 스페이스에 추가하기

대부분의 스페이스 템플릿에는 두 뷰가 기본으로 포함되어 있습니다.  
보이지 않는 경우, 스페이스 관리자가 스페이스 네비게이션에 추가할 수 있습니다.

### 추가 방법

1. 스페이스로 이동합니다.
2. 스페이스 네비게이션에서 **Add to navigation** (+)을 선택합니다.
3. Views 아래에서 **Calendar** 또는 **Timeline**을 선택하고 **Add to navigation**을 클릭합니다.
4. 위치를 변경하려면 원하는 위치로 드래그 앤 드롭합니다.

![Add to navigation이 강조 표시된 Jira 프로젝트 화면](https://dam-cdn.atl.orangelogic.com/AssetLink/72833835idp7ikturbn8747lp8fb3s1y.png)

### 타임라인 뷰 별도 활성화 방법

타임라인 뷰 옵션이 보이지 않는 경우 별도로 활성화해야 할 수 있습니다:

1. 스페이스 보드로 이동합니다.
2. 보드 이름 옆의 **More actions** (···) → **Board settings**를 선택합니다.
3. 사이드바에서 **Timeline**을 선택합니다.
4. 타임라인을 활성화합니다. (하위 워크 아이템 포함 여부, 날짜 필드 등 설정 가능)
5. **Back to board**를 선택합니다.

---

## 3. 타임라인 뷰 탐색하기

타임라인 뷰에서 할 수 있는 것:

- 워크 아이템 생성
- 워크 아이템 간 **의존성 조회 및 생성**
- 의존성 및 마감일 관련 **경고** 확인
- 에픽과 같은 상위 워크 아이템의 **완료 진행률** 확인
- 특정 담당자의 업무 조회
- **주간·스프린트·월간·분기별** 업무 조회 및 계획

> **예시**: Zarogina는 새로운 스페이스를 시작하면서 타임라인 뷰를 사용해 모든 워크 아이템을 생성하고, 각 작업의 예상 시작·종료일을 설정합니다. 팀원들에게 업무를 배정하고 의존성을 추가하여 잠재적 블로커를 파악합니다. 다른 스페이스에서 팀이 계획 중인 업무도 확인하며 조율합니다. 결과적으로 팀에게 자신 있게 예상 완료일을 전달할 수 있게 됩니다.

![Zarogina가 타임라인 뷰를 통해 프로젝트 완료 예상 시간을 산출하는 이미지](https://dam-cdn.atl.orangelogic.com/AssetLink/yom0x626x1f8qj27b271thot00160i72.png)

![타임라인 뷰 화면](https://dam-cdn.atl.orangelogic.com/AssetLink/45d2w36n2g66ur76767213ghru2j46gs.png)

---

## 4. 의존성(Dependencies) 설정하기

타임라인 뷰의 가장 강력한 기능 중 하나는 워크 아이템 간 의존성을 **선(line)**으로 시각화하는 것입니다.

> **예시**: Daniel은 고객을 위한 블로그 글을 작성 중입니다.
>
> - 먼저 초안(first draft)을 작성해야 합니다.
> - 동료 Marie의 검토(review)는 초안에 의존합니다.
> - 최종 초안(final draft)은 Marie의 검토에 의존합니다.
>
> Daniel은 의존성을 설정하여 잠재적 블로커를 미리 파악하고 정확한 계획을 세웁니다.

![Daniel의 작업 타임라인이 Marie의 검토 워크 아이템에 의존하는 모습을 보여주는 이미지](https://dam-cdn.atl.orangelogic.com/AssetLink/p3ax50f0xw2i8f5fcld1t05vpp1875qk.png)

### 의존성 표시 규칙

| 표시                     | 의미                                 |
| ------------------------ | ------------------------------------ |
| **일반 선(normal line)** | 정상적인 의존 관계                   |
| **빨간 선(red line)**    | 의존 관계에 문제 발생                |
| **링크 아이콘 클릭**     | 해당 워크 아이템 의존 관계 상세 보기 |

### 의존성 추가 방법

워크 아이템의 한쪽 끝을 다른 워크 아이템으로 **클릭 앤 드래그**합니다.

워크 아이템을 열면 연결된 의존 워크 아이템과 의존 유형("blocks", "is blocked by" 등)을 확인할 수 있습니다.

![워크 아이템 화면 - 연결된 의존 워크 아이템 표시](https://dam-cdn.atl.orangelogic.com/AssetLink/u47j010g01gcc0odsjb4u13y6tm0aqlv)

---

## 5. 캘린더 뷰 탐색하기

캘린더 뷰에서 할 수 있는 것:

- 워크 아이템 생성
- 관련 업무만 표시하도록 **캘린더 필터링**
- 미래 업무 조회 및 계획
- **스프린트 및 릴리즈** 조회
- 워크 아이템 상태 빠르게 확인

> **예시 1**: Isaac은 2개월 후 육아 휴직 예정입니다. 캘린더 뷰에서 휴직 전까지 완료해야 할 워크 아이템을 생성하고 일정을 조정합니다.

> **예시 2**: Khushbu의 팀은 보드를 주로 사용하지만, 중요한 프로젝트 마감일이 다가오고 있습니다. 캘린더 뷰에서 마감일 전까지의 일정을 계획하고 시각화하여 매일 완료해야 할 업무를 명확히 파악합니다.

![캘린더 뷰 화면](https://dam-cdn.atl.orangelogic.com/AssetLink/4td268c4qv2djd1rn7867l37oan63htq.png)

---

## 핵심 개념 요약

| 기능              | 타임라인 뷰                       | 캘린더 뷰                           |
| ----------------- | --------------------------------- | ----------------------------------- |
| **주요 용도**     | 의존성 관리, 에픽 일정 계획       | 마감일·스프린트·릴리즈 추적         |
| **시간 단위**     | 주간·스프린트·월간·분기           | 월별 캘린더                         |
| **지원 스페이스** | 비즈니스·소프트웨어 스페이스      | 비즈니스·소프트웨어·서비스 스페이스 |
| **의존성 시각화** | 선(line)으로 표시, 빨간 선은 문제 | 해당 없음                           |
| **업무 생성**     | 가능                              | 가능                                |

```
일정 관리 뷰 선택 가이드
├── 의존성·블로커 파악이 중요할 때 → 타임라인 뷰
├── 에픽 진행률 추적이 필요할 때 → 타임라인 뷰
├── 마감일·릴리즈 날짜 추적 → 캘린더 뷰
├── 스프린트 계획·조회 → 캘린더 뷰
└── 개인 업무 일정 관리 → 캘린더 뷰
```

---

_출처: [Atlassian Community Learning — Schedule work with the Timeline and Calendar views in Jira](https://community.atlassian.com/learning/lesson/schedule-work-with-jira-timeline-and-calendar-view)_
