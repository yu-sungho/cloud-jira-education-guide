---
layout: default
title: 11. 마이그레이션 이후 작업
parent: JCMA 마이그레이션 가이드
nav_order: 11
---

# 11. 마이그레이션 이후 작업(Post-migration)

## 사후 리포트 확인

**Post-migration report(.zip)** 다운로드 → **Summary**(성공/실패 요약), **Requires attention**(주의 필요 항목, 예: 미지원으로 이전되지 않은 항목)

## 사용자 및 그룹

- **Administration > User management**에서 그룹 멤버 검토 및 권한 승인
- 필요 시 관리자 그룹에 사용자 추가 (`site-admins`, `system-administrators`, `atlassian-addons`, `atlassian-addons-admin`)
- 외부 사용자 관리 시스템 사용 시 동기화 확인
- 준비되면 사용자 초대: **Administration > Users > Show details > Resend invite** (개선된 사용자 관리: **Directory > Users**)

## 프로젝트

- 첨부파일이 끝나기 전에도 프로젝트 데이터가 이전되면 Cloud에서 프로젝트 확인 가능
- 프로젝트·이슈 검토, **Former User** 비정상 사례 확인(사용자 매칭 실패 의미)
- JQL/퀵 필터로 **(migrated)** 문구 확인 → 발견 시 기존 Cloud 버전과 병합 필요
- 다른 Atlassian 제품 연결: **Settings > Jira settings > Products > Application links**
- 필요한 앱 설치 및 사용자 온보딩

---

⬅️ 이전: **[10. 마이그레이션 관리 및 모니터링](./jcma-10-manage-monitor)** · ➡️ 다음: **[12. 문제 해결](./jcma-12-troubleshooting)**
