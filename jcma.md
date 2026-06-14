---
layout: default
title: JCMA 마이그레이션 가이드
nav_order: 4
has_children: true
---

# Jira Cloud Migration Assistant (JCMA) 완전 교육 가이드

> Jira Server / Data Center 데이터를 Atlassian Cloud로 이전하기 위한 공식 도구인 **Jira Cloud Migration Assistant(JCMA)** 의 개념부터 실행, 문제 해결까지 정리한 교육자료입니다.
>
> **출처:** Atlassian 공식 문서 — [support.atlassian.com/migration](https://support.atlassian.com/migration/docs/jira-cloud-migration-assistant/)
> **기준일:** 2026-06 / JCMA 권장 버전 1.10.17 이상

---

## 📚 챕터 구성 (하이라키)

### 1부. 개념 이해

- **[1. JCMA란 무엇인가](./jcma-01-overview)** — 정의, 주요 기능, 지원 제품, 핵심 원칙
- **[2. 마이그레이션 전체 흐름](./jcma-02-migration-flow)** — 계획부터 사후 작업까지 11단계 흐름도

### 2부. 준비 단계

- **[3. 설치 및 업데이트](./jcma-03-install-update)** — 지원 버전, 설치·업데이트·실행, 복구 지원
- **[4. 무엇이 이전되고 안 되는가](./jcma-04-what-migrates)** — 이전 대상 ✅ / 비대상 ❌ 데이터
- **[5. 사용자와 그룹 이전 (가장 중요)](./jcma-05-users-and-groups)** — 이메일 식별, 그룹 권한 상승, 라이선스
- **[6. 사전 마이그레이션 체크리스트 (24개)](./jcma-06-pre-migration-checklist)** — 필수/권장/선택 항목
- **[7. 다운타임을 줄이는 사전 이전 전략](./jcma-07-pre-migrate-strategy)** — 사용자·첨부·앱 데이터 선이전

### 3부. 실행 단계

- **[8. 플랜 생성 및 데이터 선택](./jcma-08-create-plan-select-data)** — 플랜 생성 절차, 데이터 유형별 옵션
- **[9. 사전 점검 실행과 마이그레이션 실행](./jcma-09-checks-and-run)** — Pre-migration checks, 검토, 실행
- **[10. 마이그레이션 관리 및 모니터링](./jcma-10-manage-monitor)** — 대시보드, 상태값, 앱 마이그레이션

### 4부. 마무리 및 참고

- **[11. 마이그레이션 이후 작업](./jcma-11-post-migration)** — 사후 리포트, 사용자/그룹, 프로젝트
- **[12. 문제 해결](./jcma-12-troubleshooting)** — 알려진 이슈, 에러 코드, 사후 점검
- **[13. 핵심 요약 및 베스트 프랙티스](./jcma-13-summary-best-practices)** — 반드시 기억할 10가지, 권장 순서
- **[14. 용어 정리 및 참고 링크](./jcma-14-glossary-links)** — 용어집, 공식 문서·지원 채널

### 부록 (참고 자료)

- **[15. 실전 마이그레이션 예제 (외부 가이드)](./jcma-15-hands-on-example)** — 화면 스크린샷으로 따라하는 실습형 요약 (Software Testing Help)

---

## ⭐ 가장 먼저 알아야 할 3가지

1. **JCMA는 데이터를 "추가"만 한다** — 기존 데이터를 덮어쓰거나 삭제하지 않음 ([1장](./jcma-01-overview))
2. **Cloud 계정은 "이메일"로 식별된다** — 유효·고유 이메일 정리가 마이그레이션의 절반 ([5장](./jcma-05-users-and-groups))
3. **테스트 마이그레이션을 먼저 실행하라** — 운영 전 강력 권장 ([6장](./jcma-06-pre-migration-checklist))
