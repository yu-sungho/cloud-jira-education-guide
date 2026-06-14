---
layout: default
title: 1. JCMA란 무엇인가
parent: JCMA 마이그레이션 가이드
nav_order: 1
---

# 1. JCMA란 무엇인가

**Jira Cloud Migration Assistant(JCMA)** 는 Jira **Server / Data Center → Cloud** 마이그레이션을 돕기 위해 Atlassian이 만든 **무료 앱(Marketplace 앱)** 입니다. 데이터 이전이 핵심 기능이지만, 그 외에도 데이터가 정상적으로 이전될 수 있는지 미리 검증하는 다양한 평가(assessment)와 점검(check) 기능을 제공합니다.

## 주요 기능

- **Marketplace 앱 평가 및 준비** — 사용 중인 앱이 Cloud에서 마이그레이션 경로를 제공하는지 평가
- **사용자 이메일 주소 평가 및 준비** — 유효하지 않거나 중복된 이메일 자동 정리
- **이메일 도메인 검토 및 신뢰 설정** — 신뢰한 도메인의 사용자만 이전
- **데이터 이전** — 전체 한 번에(Select all data) 또는 선택적으로(Choose what to migrate)
- **사전 점검, 리포트, 에러 로그** — 데이터 또는 마이그레이션 자체의 문제를 사전/사후에 확인

## 지원 제품 (소스)

- Jira Core
- Jira Software
- Jira Service Management
- Advanced Roadmaps (이슈 소스가 연결된 플랜: 프로젝트 및 단일 프로젝트 보드)

## 꼭 기억할 핵심 원칙

> 🔑 **데이터는 "추가"되며, 절대 덮어쓰거나 삭제되지 않습니다.**
> JCMA는 Cloud에 데이터를 **추가**할 뿐, Server/Data Center나 Cloud의 기존 데이터를 덮어쓰거나 삭제하지 않습니다. 따라서 비어 있는 새 Cloud 사이트로도, 이미 데이터가 있는 사이트로도 이전할 수 있습니다.

> 🔒 **개인정보 보호:** 마이그레이션 데이터는 생성일로부터 **14일** 동안만 보관됩니다.

> 📌 **Cloud 마이그레이션 가이드:** 마이그레이션이 처음이라면 도구 사용법뿐 아니라 도구 밖의 절차까지 다루는 공식 가이드(atlassian.com/migration/plan/cloud-guide)부터 시작하는 것이 좋습니다.

---

➡️ 다음: **[2. 마이그레이션 전체 흐름 한눈에 보기](./jcma-02-migration-flow)**
