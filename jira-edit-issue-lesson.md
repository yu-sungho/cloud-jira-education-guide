---
layout: default
title: 워크 아이템 편집
nav_order: 6
---

# Jira 워크 아이템 편집하기

## Update work items in Jira — Atlassian Community Learning 정리

> **출처**: [community.atlassian.com/learning/lesson/edit-issue-in-jira](https://community.atlassian.com/learning/lesson/edit-issue-in-jira)  
> **소요 시간**: 약 10분

---

## 학습 목표

이 레슨을 마치면 다음을 할 수 있습니다:

- 워크 아이템에 **첨부 파일**을 추가할 수 있다
- 워크 아이템의 **변경 이력(History)**을 조회할 수 있다
- 워크 아이템을 다른 업무 및 콘텐츠에 **링크**할 수 있다
- 워크 아이템을 **이동(Move)**할 수 있다
- 워크 아이템을 **삭제(Delete)**할 수 있다

---

## 1. 첨부 파일 추가하기

업무에 파일을 첨부하면 더 많은 맥락을 제공할 수 있습니다. Jira는 PNG, JPG, ZIP, XML 등 다양한 파일 형식을 지원합니다.

> **예시**: 제품 버그 화면을 캡처하여 관련 버그 워크 아이템의 설명 필드에 붙여넣기 하면, 워크 아이템을 확인하는 팀원이 버그 내용을 쉽게 파악할 수 있습니다.

**첨부 방법**: `Attach` 버튼을 사용하거나 설명(Description) 필드에 직접 붙여넣기 합니다.

![워크 아이템 상세 뷰 - Attach 버튼이 강조 표시됨](https://dam-cdn.atl.orangelogic.com/AssetLink/41wq5aq4u3e22vo8tr7htk5jyohoc83x.webp)

첨부된 모든 파일은 워크 아이템의 **Attachments** 섹션에 표시됩니다.

![워크 아이템 상세 뷰 - Attachments 섹션에 2개의 첨부 파일이 표시됨](https://dam-cdn.atl.orangelogic.com/AssetLink/i7bh0o6m4j802em7wwo5bhd1po434127.webp)

---

## 2. 변경 이력 조회하기

워크 아이템이 시간이 지나면서 어떻게 변경되었는지 확인하려면 **History 탭**을 사용합니다. History 탭에는 워크 아이템에 발생한 모든 변경 사항과 변경한 사용자가 표시됩니다.

> **예시**: 마감일이 변경된 것 같다면 History 탭에서 Due Date 필드가 언제, 누구에 의해 변경되었는지 확인할 수 있습니다.

**History 탭**은 워크 아이템 하단의 Activity 섹션 안에 있습니다.

![워크 아이템 상세 뷰 - Activity 섹션이 강조 표시되고 여러 업데이트 이력이 표시됨](https://dam-cdn.atl.orangelogic.com/AssetLink/dmrp4275740p7n88ii5r3735mn778ocd.webp)

---

## 3. 워크 아이템 링크하기

Jira에서는 서로 관련 있는 워크 아이템을 연결하고 관계를 정의할 수 있습니다. 링크를 통해 다음이 가능합니다:

- 워크 아이템 간 관계를 표시하고 이동
- 워크 아이템에서 관련 Confluence 페이지로 이동
- 워크 아이템에서 관련 외부 웹 리소스로 이동

![워크 아이템 상세 뷰 - Link Issue 버튼과 드롭다운 메뉴(Link Confluence page, Add web link) 표시](https://dam-cdn.atl.orangelogic.com/AssetLink/3m4wh8w444mjkl5x04m767oal8a8q7a6.webp)

### 링크 관계 유형

두 워크 아이템을 연결할 때 사용할 수 있는 주요 관계 유형:

| 관계 유형                          | 설명                          |
| ---------------------------------- | ----------------------------- |
| **Relates to**                     | 서로 관련된 아이템            |
| **Depends on / is depended on by** | 의존 관계                     |
| **Blocks / is blocked by**         | 차단/차단됨 관계              |
| **Clones / is cloned by**          | 복제 관계 (복제 시 자동 생성) |

링크된 워크 아이템은 설명 아래 별도 섹션에 표시되며, 관계 유형·워크 아이템 키·요약·담당자 등의 정보를 확인할 수 있습니다.

![워크 아이템 상세 뷰 - Linked work item 영역이 강조 표시되고 연결된 아이템이 다른 이슈를 차단 중](https://dam-cdn.atl.orangelogic.com/AssetLink/4yvd6di6kyt5e1iy7v6t3616ev2ak61x.webp)

---

## 4. 워크 아이템 이동하기

워크 아이템의 위치나 다른 업무와의 관계를 변경하기 위해 이동할 수 있습니다. Jira에서 워크 아이템을 이동하는 방법은 3가지입니다.

### 이동 유형

| 이동 유형                                        | 설명                                             |
| ------------------------------------------------ | ------------------------------------------------ |
| **작업 유형 변경 (Move work types)**             | 워크 아이템의 유형을 변경 (예: Story → Epic)     |
| **서브태스크 이동 (Move subtasks)**              | 서브태스크를 새로운 상위 워크 아이템 아래로 이동 |
| **다른 스페이스로 이동 (Move to another space)** | 워크 아이템을 다른 스페이스로 이동               |

> **예시**: Story를 Epic으로 변경하여 작업을 재구성할 수 있습니다.

![워크 아이템 아이콘이 북마크(Story)에서 번개(Epic)로 변경되는 모습](https://dam-cdn.atl.orangelogic.com/AssetLink/57572341f3828yu337150mgsplkdkxe7.png)

### 이동 방법

1. 워크 아이템을 클릭하여 엽니다.
2. **More actions** (•••) 버튼을 클릭합니다.
3. **Move**를 클릭합니다.
4. 이동 유형을 선택합니다 (새 스페이스, 새 작업 유형, 새 상위 워크 아이템).
5. **Next**를 클릭하고 필요한 정보를 입력한 후 **Confirm**을 클릭합니다.

![워크 아이템 드롭다운 메뉴에서 "move" 옵션이 강조 표시됨](https://dam-cdn.atl.orangelogic.com/AssetLink/x5l4xa23w1457qvyy1pxr0rb1hms11b5)

> **주의**: 이동 시 특정 필드가 새 작업 유형에 존재하지 않을 수 있습니다. 예를 들어 Bug를 Story로 변경하면 Bug 전용 필드가 Story에는 없을 수 있습니다.

![Bug(Work Item 1)와 Story(Work Item 2)의 필드 차이를 보여주는 이미지](https://dam-cdn.atl.orangelogic.com/AssetLink/2pbq4q661gacgio75xn4wetx6rvnwug0.png)

---

## 5. 워크 아이템 삭제하기

더 이상 필요하지 않은 워크 아이템은 삭제할 수 있습니다.

> **주의**: 워크 아이템을 삭제하면 **되돌리거나 복구할 수 없습니다**.

삭제 시 해당 워크 아이템의 첨부 파일, 댓글, 이력, 링크, 서브태스크가 모두 삭제되며, 해당 워크 아이템 키는 재사용되지 않습니다.

### 삭제 방법

1. 워크 아이템을 클릭하여 엽니다.
2. **More actions** (•••) 버튼을 클릭합니다.
3. **Delete**를 클릭합니다.

![워크 아이템 상세 뷰 - More actions 버튼과 Delete 옵션이 강조 표시됨](https://dam-cdn.atl.orangelogic.com/AssetLink/7thte1288st0l48w4d07fwf6w07smw5i.webp)

---

## 6. 권한 안내

편집, 첨부, 링크, 이동, 삭제 등 대부분의 작업에는 **권한**이 필요합니다.  
해당 작업을 수행할 수 없는 경우, **스페이스 관리자(Space Admin)**에게 문의하세요.

---

## 핵심 개념 요약

| 기능              | 설명                        | 접근 방법                                    |
| ----------------- | --------------------------- | -------------------------------------------- |
| **첨부 파일**     | 파일을 워크 아이템에 추가   | Attach 버튼 또는 Description 필드에 붙여넣기 |
| **이력(History)** | 워크 아이템 변경 기록 조회  | 워크 아이템 하단 Activity 섹션               |
| **링크(Link)**    | 다른 아이템·페이지·URL 연결 | 워크 아이템 상세 뷰에서 Link Issue           |
| **이동(Move)**    | 유형·위치 변경              | More actions (•••) → Move                    |
| **삭제(Delete)**  | 워크 아이템 영구 삭제       | More actions (•••) → Delete                  |

---

_출처: [Atlassian Community Learning — Update work items in Jira](https://community.atlassian.com/learning/lesson/edit-issue-in-jira)_
