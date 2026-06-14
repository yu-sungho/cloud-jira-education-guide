---
layout: default
title: 15. 실전 마이그레이션 예제 (외부 가이드)
parent: JCMA 마이그레이션 가이드
nav_order: 15
---

# 15. 실전 마이그레이션 예제 — 화면으로 따라하기

> **출처:** Software Testing Help — [Jira Cloud Migration Assistant: A Guide For Migrating Project Data](https://www.softwaretestinghelp.com/jira-cloud-migration-assistant/) (Vijay, 2025-04 업데이트)
>
> 이 챕터는 공식 문서(1~14장)의 개념을 **실제 화면 흐름**으로 보완하는 실습형 요약입니다. Jira 온프레미스(Server/Data Center)의 프로젝트 데이터를 JCMA로 Cloud에 이전하는 전 과정을 스크린샷과 함께 따라갑니다.

![Jira 온프레미스 서버에서 Jira Cloud로 프로젝트 데이터 이전 개요]({{ '/assets/jcma-sth/Migrating-project-data-from-Jira-On-Prem-Server-to-Jira-Cloud-1.png' | relative_url }})

---

## 왜 Atlassian Cloud로 이동하는가

대부분의 조직은 보안 우려 등으로 온프레미스 서버에 투자해 왔지만, 온프레미스는 다음과 같은 부담이 있습니다.

- 소프트웨어 호스팅 인프라의 투자·유지보수 비용
- 신규 릴리스 때마다 OS 업그레이드 필요
- 정기적인 서버 패치
- 네트워킹/접근성 이슈
- 성능 저하 및 다운타임

**Atlassian Cloud로 이동 시 이점:**

- 유지보수 부담에서 해방
- 향상된 보안 (조직 Active Directory 연동 포함)
- 안정적이고 관리 용이
- 조직 관리 기기에서만 접근하도록 제한 가능
- 속도·성능·접근성 개선, 더 나은 개발자 경험
- 신규 기능이 Cloud에 먼저 출시되는 경향

---

## 0단계. JCMA 앱 설치

[Atlassian Marketplace](https://marketplace.atlassian.com/apps/1222010/jira-cloud-migration-assistant?hosting=server&tab=overview)에서 앱을 설치하면 Jira 서버 인스턴스의 **Manage Apps** 목록에 표시됩니다.

![Jira 서버의 Manage Apps 목록에 설치된 Jira Cloud Migration Assistant]({{ '/assets/jcma-sth/Manage-Apps.png' | relative_url }})

진입 경로: **Jira Settings → System → (Import and Export) Migrate to the cloud**. 홈 화면에는 **3단계**가 표시됩니다.

---

## 1단계. 앱 평가 (Assess your apps)

서버/데이터센터의 앱이 Cloud에서 호환되는지 평가하고, Cloud에 필요한 앱을 정합니다. (Cloud 라이선스는 별도 구매 필요)

![Assess your apps — 첫 번째 단계 선택]({{ '/assets/jcma-sth/Assess-your-apps-1.png' | relative_url }})

각 앱에 대해 Cloud 이전 후 **필요(Needed in cloud)** 여부를 결정합니다.

![앱별로 Cloud 필요 여부 결정]({{ '/assets/jcma-sth/Migrate-to-cloud.png' | relative_url }})

결정이 끝나면 **Done**.

![앱 평가 완료]({{ '/assets/jcma-sth/Click-on-Done.png' | relative_url }})

---

## 2단계. 앱 준비 (Prepare your apps)

평가한 앱을 **Cloud 사이트에 설치**하는 단계입니다.

![Prepare Your Apps]({{ '/assets/jcma-sth/Prepare-Your-Apps-1.png' | relative_url }})

이미 Cloud 사이트가 있으면 **Choose cloud site → Continue**. 출발지(Server URL)와 도착지(Cloud 사이트) 정보를 입력합니다.

![대상 Cloud 사이트 선택]({{ '/assets/jcma-sth/Choose-cloud-site-1.png' | relative_url }})

**Confirm** 후 목적지 Cloud 사이트를 선택하고 **Continue**.

![목적지 Cloud 사이트 확인]({{ '/assets/jcma-sth/Confirm.png' | relative_url }})

Cloud에 설치할 앱 목록이 나오면 각 항목마다 **Install App**을 클릭합니다.

![앱 설치 목록 — Install App]({{ '/assets/jcma-sth/Install-App-1.png' | relative_url }})

설치가 진행되면 각 앱의 설치 상태가 표시됩니다.

![앱 설치 상태 진행]({{ '/assets/jcma-sth/installed-status.png' | relative_url }})

모든 앱 상태가 **Installed in the cloud**로 바뀝니다.

![모든 앱이 Cloud에 설치 완료]({{ '/assets/jcma-sth/Installed-in-cloud..png' | relative_url }})

**Continue** 후 정책 승인 화면이 나오면 동의합니다.

![앱 마이그레이션 정책 동의]({{ '/assets/jcma-sth/agree-to-app-migration.png' | relative_url }})

**Done**으로 앱 준비를 마칩니다.

![앱 준비 완료]({{ '/assets/jcma-sth/Click-on-Done1.png' | relative_url }})

---

## 3단계. 데이터 이전 (Migrate your data)

홈에서 **3번 항목 → Create a new migration**으로 마이그레이션 플랜을 생성합니다. 플랜은 이전 옵션(첨부, 커스텀 필드/상태 등)을 문서화하고 오류를 점검합니다.

![마이그레이션 대시보드 — Create a new migration]({{ '/assets/jcma-sth/migrations-dashboard.png' | relative_url }})

**Connect to cloud**로 진행합니다.

![작동 방식 안내 — Connect to cloud]({{ '/assets/jcma-sth/how-it-works.png' | relative_url }})

이름을 입력하고 목적지 Cloud 사이트를 선택합니다. (서버·클라우드 양쪽 모두 **Admin**이어야 연결 가능)

![이름 입력 및 목적지 선택]({{ '/assets/jcma-sth/Provide-a-name-and-choose-the-destination.png' | relative_url }})

**Choose migration options** 화면에서 이전 대상을 선택합니다.

![마이그레이션 옵션 선택]({{ '/assets/jcma-sth/Choose-migration-options.png' | relative_url }})

**플랜이 먼저, 그다음 프로젝트 데이터** 순으로 이전됩니다. Advanced Roadmap 플랜이 있으면 선택, 없으면 **Skip Plans**.

![Advanced Roadmap Plans 선택 또는 Skip]({{ '/assets/jcma-sth/Skip-Plans.png' | relative_url }})

**Projects → Select**에서 이전할 프로젝트를 고릅니다.

![이전할 프로젝트 선택]({{ '/assets/jcma-sth/select-project.png' | relative_url }})

선택 후 **Add to migration**. 한 번에 전부보다 **단계적(phase-wise) 이전**을 권장합니다(고우선순위 프로젝트 먼저).

![Add to migration — 단계적 이전 권장]({{ '/assets/jcma-sth/Add-to-migration-1.png' | relative_url }})

**Users and Groups → Select**에서 사용자/그룹 이전 옵션을 고릅니다.

![사용자 및 그룹 이전 옵션]({{ '/assets/jcma-sth/Users-and-Groups.png' | relative_url }})

사용자는 **이메일 주소** 기준으로 이전되므로, 이전 전 모든 계정의 이메일을 검증해야 합니다. Active Directory 사용 시 Cloud 디렉터리와 동기화되어야 하며, SSO(Azure AD·Okta 등) 인증을 쓰더라도 제품 접근 권한은 별도로 부여해야 합니다.

![Active Directory 연동]({{ '/assets/jcma-sth/Active-Directory.png' | relative_url }})

**Apps → Select**에서 'Needed in cloud'로 표시한 앱을 이전 대상으로 선택합니다.

![Cloud에 필요한 앱 선택]({{ '/assets/jcma-sth/Needed-in-cloud.png' | relative_url }})

**Apply Changes**로 플랜을 확정합니다.

![Apply Changes]({{ '/assets/jcma-sth/Apply-Changes.png' | relative_url }})

**Check for errors**로 오류를 점검합니다.

![Check for errors]({{ '/assets/jcma-sth/Check-for-errors.png' | relative_url }})

**Review migration**은 JCMA 버전, 사용자/그룹 데이터 정확성, 이메일 고유성, 대상 프로젝트의 Cloud 중복 여부 등을 확인합니다.

![Review migration]({{ '/assets/jcma-sth/Review-migration-1.png' | relative_url }})

문제가 없으면 **Run**으로 실행합니다.

![Run — 마이그레이션 실행]({{ '/assets/jcma-sth/Run.png' | relative_url }})

---

## 마이그레이션 결과 확인

완료 후 Cloud 사이트의 프로젝트에서 이전된 데이터를 확인합니다.

![Cloud 사이트에서 이전된 데이터 확인]({{ '/assets/jcma-sth/data-migrated.png' | relative_url }})

첨부파일, 커스텀 필드·상태 등 서버에서 한 커스터마이징이 Cloud에 반영되었는지 점검합니다.

![이전된 커스터마이징 확인]({{ '/assets/jcma-sth/customizations-1.png' | relative_url }})

![데이터센터 인스턴스와 비교]({{ '/assets/jcma-sth/data-center-instance.png' | relative_url }})

Zephyr Squad 앱으로 만든 테스트 케이스도 함께 이전됩니다.

![Zephyr Squad 앱 데이터 이전 결과]({{ '/assets/jcma-sth/Zephyr-Squad-app-1.png' | relative_url }})

---

## 마이그레이션 이후 — 사용자 관리 (User Management)

Cloud 조직 관리자는 **Settings → User Management**에서 사용자/그룹에 접근 권한을 부여합니다.

![Jira Cloud User Management]({{ '/assets/jcma-sth/Jira-Cloud-User-Management.png' | relative_url }})

**Products 탭 → Jira 옆 Manage Access**로 이동합니다.

![Manage Access next to Jira]({{ '/assets/jcma-sth/Manage-Access-next-to-Jira-Software.png' | relative_url }})

**jira-software-users** 그룹에 사용자를 추가합니다.

![jira-software-users 그룹에 사용자 추가]({{ '/assets/jcma-sth/jira-software-users.png' | relative_url }})

관리자 권한은 **Products 탭 → Manage access for Jira Administration**에서 부여합니다.

![Jira Administration 접근 관리]({{ '/assets/jcma-sth/Manage-access-for-Jira-Administration-in-the-Products.png' | relative_url }})

**jira-administrators** 그룹에 사용자를 추가합니다.

![jira-administrators 그룹에 사용자 추가]({{ '/assets/jcma-sth/jira-administrators-group.png' | relative_url }})

> 🔑 SSO가 구성되어 있으면 사용자/그룹은 IdP(Azure AD·Okta 등)에서 동기화되며, **Add groups** 버튼은 비활성화됩니다. 이 경우 IdP에서 사용자/그룹을 추가하면 자동으로 제품 접근이 부여됩니다.

---

## 마이그레이션 이후 — 프로젝트 권한 (Project Permissions)

제품 접근 권한을 부여해도 **프로젝트 접근 권한은 별도**입니다. Jira 관리자가 **Project settings → People**로 이동합니다.

![Jira Cloud 프로젝트 권한 — People]({{ '/assets/jcma-sth/Jira-Cloud-Project-Permissions.png' | relative_url }})

**Add people**로 적절한 역할에 사용자를 추가합니다.

![Add people — 역할 부여]({{ '/assets/jcma-sth/Add-people.png' | relative_url }})

---

## 참고: Jira Cloud 가격 (10명 / 연간 기준)

Jira Cloud는 월간/연간 청구의 4개 플랜을 제공합니다. 보통 SSO 등 강화된 보안이 필요하면 Premium(+Atlassian Access) 또는 Enterprise를 선택합니다.

| Free                   | Standard | Premium    | Enterprise          |
| ---------------------- | -------- | ---------- | ------------------- |
| **$0** (10명까지 무료) | **$750** | **$1,450** | Atlassian 영업 문의 |

> 최신 가격은 [Jira 공식 가격 페이지](https://www.atlassian.com/software/jira/pricing)에서 확인하세요.

---

## 핵심 포인트 & 공식 문서와의 관계

- 이 외부 가이드는 **앱 평가 → 앱 준비 → 데이터 이전**의 3단계 UI 흐름을 화면으로 잘 보여줍니다.
- 사용자가 **이메일로 식별**되고, **제품 접근 ≠ 프로젝트 접근**이라는 점은 [5장](./jcma-05-users-and-groups)·공식 문서와 동일합니다.
- **단계적(phase-wise) 이전**과 **테스트 서버 선연습** 권장도 [6장 체크리스트](./jcma-06-pre-migration-checklist)와 일치합니다.
- 다만 화면/메뉴 명칭은 작성 시점(2022~2025) 기준이며, 최신 JCMA UI는 [공식 문서](./jcma-14-glossary-links)와 다를 수 있습니다. 정확한 절차·한도는 항상 공식 문서를 우선하세요.

---

⬅️ 이전: **[14. 용어 정리 및 참고 링크](./jcma-14-glossary-links)** · 🏠 **[JCMA 가이드 목차](./jcma)**
