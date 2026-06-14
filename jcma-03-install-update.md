---
layout: default
title: 3. 설치 및 업데이트
parent: JCMA 마이그레이션 가이드
nav_order: 3
---

# 3. 설치 및 업데이트

JCMA는 Jira Server/Data Center용 Marketplace 앱입니다.

## 사전 설치된 버전

- Jira **8.14 이상**
- Jira Service Management **4.14 이상**

## 수동 설치 가능한 버전

- Jira Core Server **7.6 이상**
- Jira Software Server/Data Center **7.6 이상**
- Jira Service Management Server/Data Center **3.9 이상**

> 💡 **버전 1.10.17 이상으로 반드시 업데이트하세요.** 이 버전에서 마이그레이션 속도가 크게 개선되었습니다. 또한 **테스트 마이그레이션과 운영(production) 마이그레이션에 동일한 JCMA 버전을 사용**해야 합니다.

## 설치 방법

1. Jira Server/Data Center에서 **Administration > Manage apps** 이동
2. **Find new apps** 선택
3. **Jira Cloud Migration Assistant** 검색
4. **Install** 선택

## 업데이트 방법

1. **Administration > Manage apps > Manage apps**
2. **Jira Cloud Migration Assistant** 검색 → **Update**

## 실행(열기)

- **Administration > System > Migrate to Cloud** 이동 → JCMA 홈 화면 진입
- 홈 화면의 주요 카드: **앱 평가 / 사용자 평가 / 이메일 도메인 검토 / 데이터 이전**

## 설치 시 중요 특징

- **재시작·다운타임 불필요:** Marketplace 앱이므로 설치 시 Jira 재시작이나 백업이 필요 없으며, 설치 실패해도 Jira 인스턴스에 영향을 주지 않습니다.
- **방화벽 허용(allowlist) 필요:** 방화벽 뒤에 있다면 JCMA가 사용하는 Atlassian 도메인과 IP를 허용해야 합니다. 차단 시 마이그레이션이 실패합니다.
- **제한적 복구 지원 (Data Center 전용):** 서버 장애 시 일부 자동 복구를 지원합니다.
  - **Export 중 장애:** 최대 2회 자동 복구 (마이그레이션당 노드 2개, 동시에 둘 다 다운되지 않는 조건)
  - **Import 중 장애:** 무제한 자동 복구 (동일 조건)
  - 모든 노드가 다운되면 복구가 보장되지 않습니다. 권장: **마이그레이션 1건당 Data Center 노드 2개**, 한 번에 1건씩 실행

---

⬅️ 이전: **[2. 마이그레이션 전체 흐름](./jcma-02-migration-flow)** · ➡️ 다음: **[4. 무엇이 이전되고 안 되는가](./jcma-04-what-migrates)**
