---
layout: default
title: 프로젝트 요약 뷰
parent: 뷰(View) 활용
grand_parent: Jira 사용법 레슨
nav_order: 2
---

# Jira 프로젝트 요약 뷰 활용하기

## Visualize your team's work with the Summary view in Jira — Atlassian Community Learning 정리

> **출처**: [community.atlassian.com/learning/lesson/use-jira-project-summary](https://community.atlassian.com/learning/lesson/use-jira-project-summary)  
> **소요 시간**: 약 5분

---

## 학습 목표

이 레슨을 마치면 다음을 할 수 있습니다:

- 예정된 업무와 진행 중인 업무를 **추적**할 수 있다
- 스페이스의 **작업 유형, 우선순위, 업무량 분포**를 분석할 수 있다

---

## 1. 요약 뷰(Summary view)란?

요약 뷰는 스페이스의 활동 현황을 한눈에 파악할 수 있는 **대시보드**입니다.  
여러 리포트와 뷰의 정보를 하나의 화면으로 통합하여 다음을 시각화합니다:

- 업무량 분포
- 워크 아이템 진행 상황
- 최근 활동
- 우선순위 분포
- 그 외 다양한 현황

![Jira 요약 뷰 화면 - 프로젝트 업무에 관한 다수의 가젯(gadget)이 표시됨](https://dam-cdn.atl.orangelogic.com/AssetLink/s7a70ee25i71114pjuchqcd75us31lt7.png)

---

## 2. 요약 뷰 스페이스에 추가하기

대부분의 스페이스 템플릿에는 요약 뷰가 기본으로 포함되어 있습니다.  
보이지 않는 경우, 스페이스 관리자가 스페이스 네비게이션에 추가할 수 있습니다.

### 추가 방법

1. 스페이스로 이동합니다.
2. 스페이스 네비게이션에서 **Add to navigation** (+)을 선택합니다.
3. Views 아래에서 **Summary**를 선택하고 **Add to navigation**을 클릭합니다.
4. 요약 뷰 위치를 변경하려면 원하는 위치로 드래그 앤 드롭합니다.

![Add to navigation이 강조 표시된 Jira 스페이스 화면](https://dam-cdn.atl.orangelogic.com/AssetLink/0d8lg1pwx6i332uhhjd68q425na3y7pp.png)

---

## 3. 요약 뷰 탐색하기

요약 뷰에서 확인할 수 있는 정보:

- 완료·업데이트·생성·마감 워크 아이템 통계를 빠르게 확인
- 워크 아이템의 최근 활동 확인
- 스페이스의 워크 아이템을 **상태, 우선순위, 작업 유형, 담당자** 기준으로 분석
- 주요 에픽의 **진행 상황** 시각화
- 더 자세한 워크 아이템 목록이 필터링된 **리스트 뷰 링크** 제공

![Jira 요약 뷰 화면](https://dam-cdn.atl.orangelogic.com/AssetLink/t2s7b3q37kd728703m10g5d3rgnh8je4)

> **예시**: 스페이스 관리자 Emma는 요약 뷰를 사용해 진행 속도가 느린 에픽을 빠르게 파악하고, 팀 업무가 고르게 분배되어 있는지 확인하며, 곧 마감되는 워크 아이템을 확인합니다.

---

## 4. 요약 뷰 주요 섹션

| 섹션                                        | 설명                              | 활용 목적                |
| ------------------------------------------- | --------------------------------- | ------------------------ |
| **최근 활동 (Recent activity)**             | 워크 아이템의 최근 변경 사항 표시 | 팀 활동 현황 파악        |
| **팀 업무량 (Team workload)**               | 담당자별 워크 아이템 수 시각화    | 업무 균등 분배 확인      |
| **에픽 진행 상황 (Epic progress)**          | 에픽별 완료율 표시                | 대형 업무 목표 달성 추적 |
| **우선순위 분포 (Priority breakdown)**      | 우선순위별 워크 아이템 수 표시    | 중요 업무 집중 관리      |
| **상태 개요 (Status overview)**             | 워크 아이템의 상태별 현황         | 진행/지연 업무 파악      |
| **작업 유형 분포 (Work type distribution)** | 에픽·스토리·버그 등 유형별 분포   | 업무 구성 분석           |

---

## 5. 스페이스 관리자를 위한 활용 팁

요약 뷰는 스페이스 관리자와 팀 리더가 특히 유용하게 활용할 수 있습니다:

```
요약 뷰 활용 체크리스트
├── Team workload → 담당자별 업무량 불균형 확인
├── Epic progress → 진행 중인 에픽의 달성률 모니터링
├── Recent activity → 팀 최근 활동 현황 파악
├── Priority breakdown → 높은 우선순위 업무 집중 확인
└── 리스트 뷰 링크 → 세부 워크 아이템 목록으로 이동
```

---

## 핵심 개념 요약

| 개념                                  | 한 줄 요약                                     |
| ------------------------------------- | ---------------------------------------------- |
| **요약 뷰(Summary view)**             | 스페이스 업무 현황을 한 화면에 통합한 대시보드 |
| **팀 업무량(Team workload)**          | 담당자별 업무량 분포 시각화                    |
| **에픽 진행 상황(Epic progress)**     | 에픽 단위 업무의 완료율 추적                   |
| **우선순위 분포(Priority breakdown)** | 우선순위별 워크 아이템 분포 확인               |
| **최근 활동(Recent activity)**        | 워크 아이템의 최근 변경 이력 표시              |

---

_출처: [Atlassian Community Learning — Visualize your team's work with the Summary view in Jira](https://community.atlassian.com/learning/lesson/use-jira-project-summary)_
