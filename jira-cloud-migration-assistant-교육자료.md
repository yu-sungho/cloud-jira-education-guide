# Jira Cloud Migration Assistant (JCMA) 완전 교육 가이드

> Jira Server / Data Center 데이터를 Atlassian Cloud로 이전하기 위한 공식 도구인 **Jira Cloud Migration Assistant(JCMA)** 의 개념부터 실행, 문제 해결까지 정리한 교육자료입니다.
>
> **출처:** Atlassian 공식 문서 — https://support.atlassian.com/migration/docs/jira-cloud-migration-assistant/
> **기준일:** 2026-06 / JCMA 권장 버전 1.10.17 이상

---

## 목차

1. [JCMA란 무엇인가](#1-jcma란-무엇인가)
2. [마이그레이션 전체 흐름 한눈에 보기](#2-마이그레이션-전체-흐름-한눈에-보기)
3. [설치 및 업데이트](#3-설치-및-업데이트)
4. [무엇이 이전되고 무엇이 이전되지 않는가](#4-무엇이-이전되고-무엇이-이전되지-않는가)
5. [사용자와 그룹 이전 (가장 중요)](#5-사용자와-그룹-이전-가장-중요)
6. [사전 마이그레이션 체크리스트 (24개 항목)](#6-사전-마이그레이션-체크리스트-24개-항목)
7. [다운타임을 줄이는 사전 이전 전략](#7-다운타임을-줄이는-사전-이전-전략)
8. [마이그레이션 플랜 생성 및 데이터 선택](#8-마이그레이션-플랜-생성-및-데이터-선택)
9. [사전 점검(Pre-migration checks) 실행과 마이그레이션 실행](#9-사전-점검pre-migration-checks-실행과-마이그레이션-실행)
10. [마이그레이션 관리 및 모니터링](#10-마이그레이션-관리-및-모니터링)
11. [마이그레이션 이후 작업(Post-migration)](#11-마이그레이션-이후-작업post-migration)
12. [문제 해결(Troubleshooting)](#12-문제-해결troubleshooting)
13. [핵심 요약 및 베스트 프랙티스](#13-핵심-요약-및-베스트-프랙티스)
14. [용어 정리 및 참고 링크](#14-용어-정리-및-참고-링크)

---

## 1. JCMA란 무엇인가

**Jira Cloud Migration Assistant(JCMA)** 는 Jira **Server / Data Center → Cloud** 마이그레이션을 돕기 위해 Atlassian이 만든 **무료 앱(Marketplace 앱)** 입니다. 데이터 이전이 핵심 기능이지만, 그 외에도 데이터가 정상적으로 이전될 수 있는지 미리 검증하는 다양한 평가(assessment)와 점검(check) 기능을 제공합니다.

### 주요 기능

- **Marketplace 앱 평가 및 준비** — 사용 중인 앱이 Cloud에서 마이그레이션 경로를 제공하는지 평가
- **사용자 이메일 주소 평가 및 준비** — 유효하지 않거나 중복된 이메일 자동 정리
- **이메일 도메인 검토 및 신뢰 설정** — 신뢰한 도메인의 사용자만 이전
- **데이터 이전** — 전체 한 번에(Select all data) 또는 선택적으로(Choose what to migrate)
- **사전 점검, 리포트, 에러 로그** — 데이터 또는 마이그레이션 자체의 문제를 사전/사후에 확인

### 지원 제품 (소스)

- Jira Core
- Jira Software
- Jira Service Management
- Advanced Roadmaps (이슈 소스가 연결된 플랜: 프로젝트 및 단일 프로젝트 보드)

### 꼭 기억할 핵심 원칙

> 🔑 **데이터는 "추가"되며, 절대 덮어쓰거나 삭제되지 않습니다.**
> JCMA는 Cloud에 데이터를 **추가**할 뿐, Server/Data Center나 Cloud의 기존 데이터를 덮어쓰거나 삭제하지 않습니다. 따라서 비어 있는 새 Cloud 사이트로도, 이미 데이터가 있는 사이트로도 이전할 수 있습니다.

> 🔒 **개인정보 보호:** 마이그레이션 데이터는 생성일로부터 **14일** 동안만 보관됩니다.

> 📌 **Cloud 마이그레이션 가이드:** 마이그레이션이 처음이라면 도구 사용법뿐 아니라 도구 밖의 절차까지 다루는 공식 가이드(atlassian.com/migration/plan/cloud-guide)부터 시작하는 것이 좋습니다.

---

## 2. 마이그레이션 전체 흐름 한눈에 보기

```
[1단계] 계획 수립
   └─ 마이그레이션 방식 선택, Cloud 사이트 준비, 사용자 전략 결정
        │
[2단계] JCMA 설치/업데이트 (최신 버전 1.10.17+ 권장)
        │
[3단계] 평가(Assessment)
   ├─ 앱 평가 및 준비
   ├─ 사용자 이메일 평가/정리 (유효성·중복)
   └─ 이메일 도메인 신뢰 검토
        │
[4단계] 사전 체크리스트 (24개 항목) 점검
        │
[5단계] 테스트 마이그레이션 (강력 권장)
        │
[6단계] 사전 이전으로 다운타임 절감 (사용자/그룹·첨부파일·앱 데이터 선이전)
        │
[7단계] 마이그레이션 플랜 생성 + 데이터 선택
        │
[8단계] 사전 점검(Pre-migration checks) 실행 → 오류/경고 해결
        │
[9단계] 검토(Review) → 실행(Run) 또는 저장(Save)
        │
[10단계] 대시보드에서 진행 상황 모니터링
        │
[11단계] 마이그레이션 이후 작업 (사용자 초대, 권한 검토, 통합 재설정 등)
```

---

## 3. 설치 및 업데이트

JCMA는 Jira Server/Data Center용 Marketplace 앱입니다.

### 사전 설치된 버전

- Jira **8.14 이상**
- Jira Service Management **4.14 이상**

### 수동 설치 가능한 버전

- Jira Core Server **7.6 이상**
- Jira Software Server/Data Center **7.6 이상**
- Jira Service Management Server/Data Center **3.9 이상**

> 💡 **버전 1.10.17 이상으로 반드시 업데이트하세요.** 이 버전에서 마이그레이션 속도가 크게 개선되었습니다. 또한 **테스트 마이그레이션과 운영(production) 마이그레이션에 동일한 JCMA 버전을 사용**해야 합니다.

### 설치 방법

1. Jira Server/Data Center에서 **Administration > Manage apps** 이동
2. **Find new apps** 선택
3. **Jira Cloud Migration Assistant** 검색
4. **Install** 선택

### 업데이트 방법

1. **Administration > Manage apps > Manage apps**
2. **Jira Cloud Migration Assistant** 검색 → **Update**

### 실행(열기)

- **Administration > System > Migrate to Cloud** 이동 → JCMA 홈 화면 진입
- 홈 화면의 주요 카드: **앱 평가 / 사용자 평가 / 이메일 도메인 검토 / 데이터 이전**

### 설치 시 중요 특징

- **재시작·다운타임 불필요:** Marketplace 앱이므로 설치 시 Jira 재시작이나 백업이 필요 없으며, 설치 실패해도 Jira 인스턴스에 영향을 주지 않습니다.
- **방화벽 허용(allowlist) 필요:** 방화벽 뒤에 있다면 JCMA가 사용하는 Atlassian 도메인과 IP를 허용해야 합니다. 차단 시 마이그레이션이 실패합니다.
- **제한적 복구 지원 (Data Center 전용):** 서버 장애 시 일부 자동 복구를 지원합니다.
  - **Export 중 장애:** 최대 2회 자동 복구 (마이그레이션당 노드 2개, 동시에 둘 다 다운되지 않는 조건)
  - **Import 중 장애:** 무제한 자동 복구 (동일 조건)
  - 모든 노드가 다운되면 복구가 보장되지 않습니다. 권장: **마이그레이션 1건당 Data Center 노드 2개**, 한 번에 1건씩 실행

---

## 4. 무엇이 이전되고 무엇이 이전되지 않는가

JCMA는 Cloud 사이트에 데이터를 **추가**하며 기존 데이터를 덮어쓰지 않습니다.

### ✅ 이전되는 주요 데이터

**프로젝트 & 이슈 데이터**

- 프로젝트 상세(이름, 키, 유형, 카테고리, 설명, 리드, 기본 담당자), 프로젝트 역할
- 이슈 유형/스킴, 화면(Screen)/화면 스킴, 워크플로우 & 워크플로우 스킴, 필드 구성 스킴
- 권한 스킴, 알림 스킴(기본 알림이 있는 시스템 이벤트만), 이슈 보안, 우선순위 & 우선순위 스킴
- 이슈 데이터: 요약, 설명, 유형, 상태, 해결됨, 라벨, 생성자/보고자/담당자, 마감일, 하위작업, @멘션, 와처/투표, 이슈 링크, 첨부파일, 댓글(보안 댓글 포함), 스토리 포인트, 작업 로그, 이슈 히스토리, 이슈 키 히스토리
- 일부 커스텀 필드(텍스트, 날짜, 숫자, 시간, 라벨, 선택목록, 체크박스, 사용자 선택기, 단일 프로젝트 선택기, URL, 멀티라인 텍스트, 라디오버튼, 환경 등)
- 아카이브된 이슈/프로젝트

**Jira Software**

- 이슈 랭크, 에픽(에픽 이름/색상/링크/상태), 스프린트, 버전(affects/fix versions)
- 보드(이름, 관리자, 필터·권한, 위치, 컬럼·상태 매핑, 퀵 필터, 스윔레인, 스프린트 권한, 카드 색상, 추정 설정 등)

**Jira Service Management**

- JSM 프로젝트, 모든 사용자/에이전트/그룹/고객
- 요청 유형 및 요청 유형 그룹, 커스텀 필드(고객 조직, 승인, SLA)
- 프로젝트 설정(레거시 자동화 플로우, 고객 알림 템플릿, 포털 설정, 캘린더, 워크플로우, 언어 지원, CSAT, 리포트), 큐

**사용자/그룹** — 활성 디렉터리의 사용자/그룹(아래 5장 참조)

**Advanced Roadmaps 플랜** — 프로젝트/필터/보드를 이슈 소스로 하는 플랜, 사용자/그룹, 공유 팀, 글로벌 구성, 커스텀 이슈 유형·필드·계층 매핑

**Marketplace 앱 데이터** — Advanced Roadmaps, Automation for Jira, ProForma, Assets 등 **벤더가 자동 마이그레이션 경로를 제공하는 앱**

### ❌ 이전되지 않는 주요 항목

- **워크플로우 부가 설정:** 일부 속성(properties), 트리거, UI 다이어그램 위치
- **글로벌 항목:** 글로벌 권한, 일반 구성(타임존·언어 등), 웹훅, 댓글 반응, 커스터마이즈된 필터 컬럼
- **사용자 프로필:** 아바타, 비밀번호(SSO 미설정 시 재설정 필요), 타임존, 활동 스트림, Jira 사용자 속성
- **프로젝트 설정:** 커스텀 필드 언어 번역, 프로젝트 아바타, 정형 응답(canned responses), 시스템 대시보드, 커스텀/표준 이슈 유형 아이콘, 프로젝트 단축키, 메일 핸들러, 이슈 콜렉터, 서비스 프로젝트에 연결된 지식베이스 문서
- **비활성 디렉터리의 사용자/그룹** — 디렉터리를 활성화해야 이전됨
- **Server/Data Center의 서비스(Services)**
- 마이그레이션에 포함되지 않은 항목으로의 링크

> 📝 **누락 필드는 CSV로 보완 가능:** 앱 커스텀 필드 등 이전되지 않은 항목은 마이그레이션 후 Cloud에서 필드를 생성하고, Server에서 CSV(이슈 키 + 요약 + 누락 필드)를 export → Cloud로 import 하여 채울 수 있습니다.

> 🔍 **사전 리포트로 확인:** 무엇이 포함되는지 **사전 마이그레이션 리포트(Pre-migration report)** 로 확인할 수 있습니다(Review your migration 단계 또는 대시보드의 Logs and reports).

---

## 5. 사용자와 그룹 이전 (가장 중요)

마이그레이션에서 가장 까다롭고 실수가 잦은 영역입니다.

### 핵심: Cloud 계정은 "이메일"로 식별됩니다

- Cloud에서 사용자 계정의 고유 식별자는 **이메일 주소**입니다. (Server에서는 이메일이 필수가 아니었음)
- 마이그레이션 시 각 사용자에 대해 Cloud에 새 계정을 생성합니다. **이미 같은 이메일이 Cloud에 존재하면 새로 만들지 않고**, 해당 사용자의 데이터를 기존 계정에 **연결(link)** 합니다.
- 그룹은 **그룹 이름**으로 연결됩니다 → **권한 상승(permission escalation)** 위험이 있으니 마이그레이션 전 그룹을 반드시 확인하세요.

### 사용자 이전 방식 2가지

**① 사전 이전 (권장):** 홈 화면 **Migrate your users in advance** 카드 사용

- 모든 사용자/그룹 이전 (선택: 그룹 멤버십, JSM 고객)

**② 데이터 이전과 함께:** **Migrate your data** 카드 사용

- 모든 사용자/그룹 이전, 또는
- 프로젝트에서 참조되는 사용자/그룹만 이전 (프로젝트 데이터 무결성을 위한 최소 범위)
  - 추가 옵션: 이전 대상 프로젝트 역할에 할당된 사용자/그룹, 이전 그룹의 멤버 사용자

### 그룹 멤버십 보존 옵션 (라이선스에 직접 영향)

| 옵션                      | 설명                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| **사용자/그룹 별도 이전** | 그룹에 추가하지 않고 이전. Atlassian 계정은 생기지만 제품/프로젝트 접근 권한 없음 → **라이선스 미소비** |
| **그룹 멤버십 보존**      | 그룹 멤버십 유지. 프로젝트 접근 권한 부여 → **라이선스 카운트에 포함**                                  |

### ⚠️ 재이전(re-migration) 시 권한 상승 주의

그룹을 다시 이전할 때, **기존 멤버십은 변경하지 않고 새 사용자만 추가**합니다.

- 예: Server에서 _Admins_ 그룹의 사용자를 제거하고 재이전해도, Cloud의 _Admins_ 그룹에서는 제거되지 않습니다.
- 단계적(phased) 마이그레이션 시 "이미 이전된 것은 그대로 유지된다"고 가정하고, Server에서 그룹을 변경하면 Cloud 그룹도 **수동으로 동일하게** 변경하세요.

### 삭제·비활성 사용자 처리

- 삭제된 사용자나 비활성 디렉터리의 사용자가 데이터에서 참조되면 → **Former user(former user)** 로 표시됩니다. 참조를 살리려면 이전 전에 재활성화하세요.
- Server에서 **disabled** 상태인 사용자 → Cloud에서 **활성이지만 앱 접근 권한 없음**으로 이전 → **과금 대상 아님**.

### 그 밖의 핵심 포인트

- **초대 메일은 자동 발송되지 않습니다.** 마이그레이션 후 Administration에서 직접 초대하거나 로그인 링크를 공유하세요.
- **권한 검토:** 첫 마이그레이션 후 그룹 권한을 검토·승인해야 하며, 승인 시 활성 사용자가 과금에 추가됩니다. 글로벌 설정·사이트 권한은 이전되지 않으므로 수동 설정 필요.
- **프로젝트 역할 한계:** Cloud에서 프로젝트를 삭제해도 역할이 제거되지 않아, 동일 프로젝트 재이전 시 역할에 `(migrated)` 접미사가 붙는 알려진 이슈가 있습니다(수동 정리 필요).
- **외부 IdP 사용 시:** 이전 전 로컬 디렉터리와 **동기화(sync)** 하여 사용자/그룹을 최신 상태로 유지하세요.
- **과금:** Jira Cloud는 사용자당 구독 기반(월/연 단위)입니다.

> ⚠️ **Jira Work Management 관련 변경:** Jira Software와 Jira Work Management 통합으로 인해 Jira Core(=Jira Work Management의 Server판) 제품 접근 권한은 그룹 단위로 Cloud에 이전되지 않습니다. 이전 후 영향받는 그룹을 식별하고 앱 접근 권한을 수동 할당해야 합니다.

---

## 6. 사전 마이그레이션 체크리스트 (24개 항목)

JCMA가 자동으로 검사하지 못하는 부분이 있으므로, 마이그레이션 전 다음을 반드시 점검하세요.

> 💡 **공통 권장:** 마이그레이션 기간에는 불필요한 예약 작업(scheduled jobs)을 중지하세요. 여러 작업의 누적 부하가 성능 저하를 유발합니다.

### 🔴 필수(Mandatory)

| #   | 항목                                   | 핵심 내용                                                                                                                                                        |
| --- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **사용자 마이그레이션 플랜 수립**      | 외부 디렉터리 동기화. AD에서 UPN/Email 이중 설정 시 중복 계정 발생 주의 → IdP 식별자를 **Email**로 설정                                                          |
| 2   | **Jira DC 버전 확인**                  | 지원 버전인지 확인 (3장 참조)                                                                                                                                    |
| 3   | **잘못된/중복 이메일 수정**            | JCMA의 **Assess and prepare users**로 평가 후 수동/자동 수정                                                                                                     |
| 4   | **권한 확인**                          | 실행자는 소스의 **System admin** + 대상 Cloud의 **organization admin**, `<Jira home>/export` 디렉터리 접근 권한, 이전 대상 전 프로젝트의 **Browse project** 권한 |
| 5   | **그룹 이름 충돌 확인**                | Cloud와 동일한 그룹 이름은 의도치 않은 병합 유발. `@connect.atlassian.com` 앱 사용자도 정리                                                                      |
| 6   | **방화벽 허용 규칙 업데이트**          | Atlassian 도메인/IP 차단 시 마이그레이션 실패                                                                                                                    |
| 7   | **앱 마이그레이션 방식 결정**          | 각 Marketplace 벤더에 Cloud 마이그레이션 경로 지원 여부 확인                                                                                                     |
| 8   | **공개 접근(Public access) 설정 확인** | 익명 접근 프로젝트는 이전 전 제거 권장(이전 시 로그인 사용자 전용으로 변경됨)                                                                                    |
| 9   | **Data Center 설정 검토**              | JVM 힙 **최소 4GB**, Open Files **~32768**, DB 커넥션 풀 기본 20 → **40까지** 증설 권장                                                                          |
| 10  | **문자 수 제한 확인**                  | 이슈 설명/댓글은 Cloud에서 **32,767자** 초과 불가                                                                                                                |
| 11  | **Assets 엔티티 한도 확인**            | Objects(Premium 50K/Enterprise 500K, 최대 1천만 확장), Object schemas 100, 이슈당 연결 객체 20, 객체 유형당 속성 120/유니크 2                                    |

### 🟡 권장(Recommended)

| #   | 항목                                      | 핵심 내용                                                                                       |
| --- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 12  | Advanced Roadmaps 공유 팀 검토            | 멤버 없는 팀은 기본 멤버(org admin)가 할당됨                                                    |
| 13  | Advanced Roadmaps 플랜 연결 프로젝트 식별 | API: `GET /rest/migration/latest/advanced-roadmaps/all-plan-projects-map`                       |
| 14  | 공유 구성 이름 중복 수정                  | 워크플로우/권한 스킴 이름 충돌 방지                                                             |
| 15  | Data Center 디스크 여유 공간 확보         | 임시 파일용 추가 공간 고려                                                                      |
| 16  | Cloud 저장 용량 한도 확인                 | 플랜별 스토리지 한도 사전 점검                                                                  |
| 17  | Data Center 인스턴스 준비                 | Database Integrity Checker 실행, 필수 필드 null 금지, 커스텀 필드 설명의 HTML/JS 제거(XSS 방지) |
| 18  | Cloud 사이트 준비                         | **소스와 동일한 제품 구성**, **동일한 언어** 설정, Atlassian Guard 사전 설정                    |
| 19  | 외부 애플리케이션 통합 수정               | 이전 후 ID 변경 → CTT(Cloud Transition Tools)로 보정                                            |
| 21  | 데이터 백업                               | 소스(및 데이터 있는 대상 Cloud) 백업                                                            |
| 22  | **테스트 마이그레이션 실행**              | 운영 전 강력 권장. 스테이징 사용 시 Server ID 보존                                              |
| 23  | 지원팀에 마이그레이션 계획 통지           | 주말/휴일 또는 **1,000명 이상**이면 1~2개월 전 통지                                             |
| 24  | 네트워크 대역폭 확인                      | 운영 직전 속도 테스트(Speedtest CLI), egress 스캐너 등 확인                                     |

### 🟢 선택(Optional)

| 20 | Jira Align 준비 | 사용 시 Jira Align 지원팀과 사전/중/사후 추가 작업 필요 |

---

## 7. 다운타임을 줄이는 사전 이전 전략

프로젝트 데이터 이전 전에 다음을 **미리 이전**하면 마이그레이션 당일 시간을 크게 절약할 수 있습니다.

- **사용자 및 그룹 사전 이전** — 본 이전 시 재이전 불필요 (특히 전체 사용자 이전 시 효과적)
- **첨부파일 사전 이전** — 이미 이전된 첨부파일은 재전송하지 않음
- **앱 데이터 사전 로드(Preload)** — 앱 데이터를 미리 보냄

> 💡 이미 이전된 첨부파일은 본 마이그레이션 시 자동으로 인식하여 다시 전송하지 않으므로, 대용량 첨부파일을 미리 보내는 것이 다운타임 절감의 핵심입니다.

---

## 8. 마이그레이션 플랜 생성 및 데이터 선택

데이터 이전에는 두 가지 방식이 있습니다: **전체 한 번에(Select all data)** 또는 **선택적으로(Choose what to migrate)**. 선택형은 하나의 플랜에 모두 담거나 여러 플랜으로 나눌 수 있습니다.

### 시작 전 확인

- 이전 대상 확인(4장), JCMA 버전 일치(테스트=운영), 방화벽/도메인 허용, 사전 체크리스트(6장), 사용자·그룹·첨부 사전 이전(7장)
- **권한:** 소스 System admin + 대상 organization admin

### 플랜 생성 절차

1. JCMA 열기 → **Create new migration** 선택
2. **Connect to your cloud site** 화면에서:
   - **마이그레이션 이름** 지정
   - **단계 선택**: production / testing (대시보드 구분용, 동작에는 영향 없음)
   - **대상 Cloud 사이트 선택** (없으면 무료 Cloud 마이그레이션 트라이얼로 생성)
3. **Migration options** 화면에서 **Select all data** 또는 **Choose what to migrate** 선택

### Select all data (전체 이전)에 포함되는 항목

모든 프로젝트(첨부·아카이브 포함), 모든 Advanced Roadmaps 플랜, 모든 크로스 프로젝트 보드/필터, 모든 사용자/그룹, 모든 JSM 고객, 모든 Marketplace 앱, 모든 JSM Assets

### Choose what to migrate (선택 이전) — 데이터 유형별 옵션

**프로젝트**
| 옵션 | 설명 |
|---|---|
| All | 선택 프로젝트의 지원되는 모든 데이터·구성 이전 |
| Include all archived issues | + 아카이브된 이슈 포함 |
| Attachments only | 첨부파일만 이전 |

> ⚠️ 아카이브 이슈를 포함하면 데이터 크기가 커져 마이그레이션 시간이 늘어납니다. Cloud의 이슈 아카이브 기능은 Premium 전용(API로만 접근)입니다.

**Advanced Roadmaps 플랜:** 선택 프로젝트 관련 플랜만 / 전체 / 없음

**대시보드:** 선택 프로젝트에 연결된 것만 / 전체 / 없음

**보드 & 필터**
| 옵션 | 설명 |
|---|---|
| 선택 프로젝트에 공유된 필터·보드만 | 단일/크로스 프로젝트 보드 모두. 비공개/특정 사용자·그룹/비이전 프로젝트 공유 단일 필터는 제외 |
| 모든 필터·크로스 프로젝트 보드 | 공유 범위 무관 전체(비이전 프로젝트의 단일 프로젝트 보드는 제외) |
| 없음 | (알려진 이슈 MIG-1654로 일부는 그래도 이전될 수 있음) |

**사용자 & 그룹:** 선택 프로젝트 관련만 / 전체 + 멤버십 보존 여부 선택 (5장 참조)

**JSM 고객:** 전체 / 선택 프로젝트 관련만 / 없음

**Marketplace 앱:** 'Needed in cloud'로 표시했고 벤더 마이그레이션 경로가 있는 앱 전체(All) / 없음(None)

> 📌 **여러 번 이전 시 데이터 연결:** 동일 구성 항목은 중복을 피하기 위해 자동 연결됩니다.
> 📌 **ID 매핑:** 이전 후 Cloud에서 Jira 엔티티 ID가 변경됩니다. 필요 시 ID 매핑 조회 API를 사용하세요.

---

## 9. 사전 점검(Pre-migration checks) 실행과 마이그레이션 실행

플랜을 만들면 JCMA가 데이터가 Cloud로 이전 가능한지 검증하는 사전 점검을 실행합니다.

### 점검 항목 (그룹)

System, Users and groups, Customers, Projects, Cross-project boards and filters, Advanced Roadmaps plans, Marketplace apps(+App vendor checks), Assets

대표 검증 예시: 대상 사이트에 Cloud 앱 설치 여부, 사용자/고객 이메일의 고유성·유효성, 사용자·저장 한도 초과 여부

### 점검 상태 표시

| 상태             | 의미                                                 |
| ---------------- | ---------------------------------------------------- |
| ✅ 성공          | 통과, 진행 가능                                      |
| ⚠️ 경고(Warning) | 진행 가능하나 잠재 이슈 인지 필요 (펼쳐서 상세 확인) |
| ⛔ 오류(Error)   | 해결 전까지 진행 불가                                |
| 🔧 점검 미완료   | 예기치 못한 오류 → 새로고침 또는 지원팀 문의         |

> 💡 **캐싱으로 시간 절약:** 최신 버전은 성공한 점검 결과를 **30일간 캐시**하여 재실행 시간을 단축합니다. **마이그레이션 며칠 전에 미리 사전 점검을 실행**해 두면 당일 시간을 절약할 수 있습니다. 일부 데이터 준비 오류는 **CSV 다운로드 → 수정 → 업로드**로 인플라이트 해결이 가능합니다(JCMA 109, 130, 133, 135, 149, 152, 154, 522, 523).

### 사전 점검 중지

'data preparation' 단계 점검이 멈춰 있거나 너무 오래 걸리면 화면 하단 **Stop** 버튼으로 중지할 수 있습니다(되돌릴 수 없음, 적용에 수 분 소요). 다른 유형의 점검은 중지 불가.

### 검토(Review) → 실행(Run)/저장(Save)

1. 점검 통과 후 **Review migration** 화면으로 진행 → **사전 마이그레이션 리포트** 다운로드 권장(이전 대상 상세 + 주의 필요 항목 확인)
2. **Run**(즉시 실행) 또는 **Save**(나중에 실행) 선택 → 두 경우 모두 대시보드에 저장되어 모니터링 가능

---

## 10. 마이그레이션 관리 및 모니터링

저장/실행한 마이그레이션은 **Migrations 대시보드**에 추가되어 상세 확인과 진행 모니터링이 가능합니다.

### 대시보드 기능

모든 마이그레이션 상세 보기, 실행/복사/편집/삭제/아카이브, 진행 모니터링, 사전 점검 경고·오류 확인, 사전/사후 리포트 및 에러 로그 다운로드

### 마이그레이션 상태

| 상태           | 의미                                                                                    |
| -------------- | --------------------------------------------------------------------------------------- |
| **SAVED**      | 저장됨, 실행 준비 완료                                                                  |
| **RUNNING**    | 진행 중                                                                                 |
| **FINISHED**   | 모든 작업 완료                                                                          |
| **INCOMPLETE** | 완료되었으나 일부 항목 이전 실패. 재이전 전 Cloud에서 일부 데이터 삭제가 필요할 수 있음 |
| **FAILED**     | 실패(예: 프로젝트 키 중복, 예기치 못한 오류)                                            |

### 마이그레이션 상세 (View details)

- **Configuration overview** — 구성 상세 및 상태
- **This migration includes** — 이전 항목별 상세·상태
- **Logs and reports** — 다운로드 가능:
  - **사전 마이그레이션 리포트:** 이전에 포함되는 내용
  - **사후 마이그레이션 리포트:** 이전됨/안 됨 상세
  - **에러 로그:** 마이그레이션 관련 오류

### Marketplace 앱 마이그레이션 상태

| 상태       | 의미                                |
| ---------- | ----------------------------------- |
| READY      | 실행 준비                           |
| RUNNING    | 진행 중                             |
| SUCCESS    | 성공                                |
| INCOMPLETE | 일부 미이전 → **Re-run**으로 재시도 |
| FAILED     | 실패 → **Re-run**으로 재시도        |
| TIMED OUT  | 허용 시간 초과 → 벤더 문의          |

> 📌 **앱 재실행 한도:** 최초 실행 후 **12일 이내**에만 failed/incomplete 앱을 재실행할 수 있습니다.
> 📌 앱 로그는 **30일** 이벤트 이력 한도, **최대 4,000건**까지. 앱 문제는 해당 **Marketplace 벤더에 직접 문의**하세요.
> 📌 앱별 **취소(Cancel)** 가능하며, 다른 앱 진행에는 영향 없음(취소는 되돌릴 수 없음).

---

## 11. 마이그레이션 이후 작업(Post-migration)

### 사후 리포트 확인

**Post-migration report(.zip)** 다운로드 → **Summary**(성공/실패 요약), **Requires attention**(주의 필요 항목, 예: 미지원으로 이전되지 않은 항목)

### 사용자 및 그룹

- **Administration > User management**에서 그룹 멤버 검토 및 권한 승인
- 필요 시 관리자 그룹에 사용자 추가 (`site-admins`, `system-administrators`, `atlassian-addons`, `atlassian-addons-admin`)
- 외부 사용자 관리 시스템 사용 시 동기화 확인
- 준비되면 사용자 초대: **Administration > Users > Show details > Resend invite** (개선된 사용자 관리: **Directory > Users**)

### 프로젝트

- 첨부파일이 끝나기 전에도 프로젝트 데이터가 이전되면 Cloud에서 프로젝트 확인 가능
- 프로젝트·이슈 검토, **Former User** 비정상 사례 확인(사용자 매칭 실패 의미)
- JQL/퀵 필터로 **(migrated)** 문구 확인 → 발견 시 기존 Cloud 버전과 병합 필요
- 다른 Atlassian 제품 연결: **Settings > Jira settings > Products > Application links**
- 필요한 앱 설치 및 사용자 온보딩

---

## 12. 문제 해결(Troubleshooting)

> 💡 공식 문제 해결 페이지에서 **Ctrl+F / Cmd+F** 로 에러 메시지를 검색해 관련 KB 문서를 찾으세요.

### 알려진 이슈(Known issues)

| 주제                    | 내용                                                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **데이터 무결성**       | 고도로 커스터마이즈된 Server는 추가 이슈 가능. 필수 필드의 null 값은 Cloud 미지원 → 마이그레이션 실패. 사전 정리 권장 |
| **불완전 마이그레이션** | INCOMPLETE = 일부 엔티티 이전 실패(예: 커스텀 필드 null로 이슈 1건 실패). 대개 큰 문제 아님 → 에러 로그로 원인 확인   |
| **Server 변경 후 대기** | Server에서 변경 후 **최소 10분** 기다린 뒤 이전(데이터 반영 시간)                                                     |
| **프로젝트 키 변경**    | 키 변경 시 모든 구성·필터·보드가 새 키로 갱신되었는지 확인                                                            |
| **미포함 항목 링크**    | 배치 이전 시 아직 이전 안 된 프로젝트/이슈로의 링크는 해당 항목 이전 전까지 누락                                      |
| **히스토리 참조 누락**  | 누락된 링크/첨부 참조 히스토리는 미이전(추후 해당 항목 이전 시 갱신)                                                  |
| **보드 결과 불일치**    | 이전 후 보드 JQL이 다른 결과 가능 → 이전 후 보드 JQL 수정                                                             |
| **Jira Align 문제**     | 사용 시 전/중/후 추가 작업 필요                                                                                       |

### 사전 점검에서 자주 보는 문제 (예시)

| 메시지                                                                 | 해결                                                                         |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| We are currently updating the migration service / We couldn't check... | JCMA **인증 토큰 만료** 가능 → 토큰 갱신                                     |
| Projects already exist in your cloud site                              | 프로젝트 이름·키 충돌 → KB 참조                                              |
| Multiple users have the same email address                             | 중복 이메일 수정                                                             |
| Invalid email addresses                                                | 유효하지 않은 이메일 수정                                                    |
| 이메일 별칭(alias) 한도 초과                                           | 단일 기본 이메일당 별칭 10개 한도(시간당) → CSV로 식별 후 개별 이메일화/삭제 |

### 데이터 준비 오류 (CSV로 수정 가능한 대표 코드)

- **JCMA 109** — 우선순위 없음 → 유효한 Priority Id 입력
- **JCMA 130** — 필터 소유자 없음 → 유효한 user key 입력
- **JCMA 133** — 그룹 참조 없음 → 유효한 그룹명 입력
- **JCMA 135** — 보드가 유효하지 않은 필터 ID 참조 → 유효한 filter ID 입력
- **JCMA 149** — 이슈 유형에 해당 상태 없음 → 워크플로우 연결 상태 입력
- **JCMA 152** — 유효하지 않은 이슈 유형 → 유효한 issue type ID 입력
- **JCMA 522** — SLA 이름 중복(대소문자 무시) → 새 이름 입력
- **JCMA 523** — 요청 유형에 누락 이슈 유형 → 유효한 issue type ID 입력

> UI로 직접 수정해야 하는 코드도 있습니다: **124**(보드 관리자), **147**(보드↔Business 프로젝트), **151**(전이 화면), **510**(요청 유형 이슈 유형 스킴), **701**(SQL Server collation) 등.

### 사후 단계 확인 항목

실패/불완전 시: **에러 로그**, **앱 진행 로그**, **사후 리포트** 확인.

대표 import 오류: Project Component/Version 중복·누락 의존성, Sprint 커스텀 필드 누락, 댓글/설명 32,767자 초과, 권한 스킴의 존재하지 않는 사용자/그룹 참조, OutOfMemory, PKIX(SSL 인증서), 방화벽(UnknownHost/Connection refused), PostgreSQL 커넥션 한도, LexoRank 무결성 오류 등.

JSM/Assets 특화 오류: 이슈당 Asset 객체 한도, Object history Select 속성 100개, 객체 유형당 유니크 속성 2개, 속성별 카디널리티(20,000) 및 문자 수 한도, AQL 미해결 등.

> 🆘 **지원 문의:** 위 페이지로 해결되지 않으면 **Support ZIP**을 첨부해 Atlassian Support에 문의하면 빠른 응답을 받을 수 있습니다.

---

## 13. 핵심 요약 및 베스트 프랙티스

### 반드시 기억할 10가지

1. **JCMA는 데이터를 추가만 한다** — 덮어쓰기·삭제 없음. 마이그레이션 데이터는 14일 보관.
2. **항상 최신 버전(1.10.17+)** 으로, 테스트와 운영에 동일 버전 사용.
3. **Cloud 계정은 이메일로 식별** — 유효·고유 이메일 정리가 마이그레이션의 절반.
4. **그룹은 이름으로 연결** — 권한 상승 위험, 이전 전 그룹 점검 필수.
5. **사전 체크리스트 24개 항목** 을 빠짐없이 점검(특히 11개 필수 항목).
6. **테스트 마이그레이션을 먼저** 실행하고 스테이징 Server ID를 보존.
7. **사용자·그룹·첨부파일을 사전 이전** 해 당일 다운타임 절감.
8. **사전 점검은 며칠 전 미리 실행**(30일 캐시 활용), CSV 인플라이트 수정 활용.
9. **소스와 Cloud의 제품 구성·언어를 일치** 시키고 방화벽/도메인 허용.
10. **이전 후** 권한 검토·사용자 초대·통합(Application links/CTT) 재설정.

### 권장 진행 순서

```
계획 → JCMA 설치/업데이트 → 앱·사용자·도메인 평가
→ 체크리스트 점검 → 테스트 마이그레이션 → 사용자·첨부 사전 이전
→ 플랜 생성·데이터 선택 → 사전 점검(미리) → 검토 → 실행 → 모니터링 → 사후 작업
```

---

## 14. 용어 정리 및 참고 링크

### 용어

| 용어                             | 의미                                        |
| -------------------------------- | ------------------------------------------- |
| **JCMA**                         | Jira Cloud Migration Assistant (이 도구)    |
| **Source / Destination**         | 소스(Server·Data Center) / 대상(Cloud)      |
| **Pre-migration checks**         | 마이그레이션 전 데이터 검증 점검            |
| **Pre/Post-migration report**    | 이전 전/후 포함·결과 리포트(ZIP)            |
| **Former user**                  | 사용자 매칭 실패로 표시되는 계정            |
| **Permission escalation**        | 그룹 이름 연결로 인한 의도치 않은 권한 상승 |
| **CTT (Cloud Transition Tools)** | 이전 후 외부 통합 ID 보정 도구              |
| **Marketplace Partner / 벤더**   | 앱 제공사 (앱 마이그레이션 경로 책임)       |

### 주요 공식 문서 링크

- JCMA 홈: https://support.atlassian.com/migration/docs/jira-cloud-migration-assistant/
- JCMA란?: https://support.atlassian.com/migration/docs/what-is-jira-cloud-migration-assistant/
- 설치·업데이트: https://support.atlassian.com/migration/docs/update-or-install-the-jira-cloud-migration-assistant/
- 무엇이 이전되는가: https://support.atlassian.com/migration/docs/what-gets-migrated-with-the-jira-cloud-migration-assistant/
- 사용자·그룹 이전: https://support.atlassian.com/migration/docs/migrate-users-and-groups/
- 사전 체크리스트: https://support.atlassian.com/migration/docs/jira-pre-migration-checklist/
- 데이터 선택 이전: https://support.atlassian.com/migration/docs/choose-what-jira-data-to-migrate-using-the-assistant/
- 사전 점검·실행: https://support.atlassian.com/migration/docs/run-pre-migration-checks-review-and-run-a-jira-migration/
- 관리·모니터링: https://support.atlassian.com/migration/docs/manage-and-view-the-details-of-jira-migration-plans/
- 문제 해결: https://support.atlassian.com/migration/docs/troubleshoot-migration-with-jira-cloud-migration-assistant/
- Cloud 마이그레이션 가이드: https://www.atlassian.com/migration/plan/cloud-guide

### 지원 채널

- Atlassian Cloud Migration Center: https://www.atlassian.com/migration/cloud
- 기술 지원 문의: https://www.atlassian.com/migration/help
- Atlassian Community: https://community.atlassian.com/t5/Atlassian-Cloud-Migration/ct-p/atlassian-cloud-migration
- Atlassian Partner: https://www.atlassian.com/partners/migrate

---

_본 교육자료는 Atlassian 공식 지원 문서(support.atlassian.com/migration)를 기반으로 정리되었습니다. 실제 마이그레이션 전에는 최신 공식 문서를 반드시 확인하세요. (Server 제품 지원은 2024년 2월 종료)_
