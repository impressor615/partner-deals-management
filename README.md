# Partner Deal Management

## 설치

```bash
# 프로젝트를 로컬 머신으로 복사합니다.
git clone git@github.com:impressor615/partner-deals-management.git

# 프로젝트 폴더로 이동합니다.
cd partner-deals-management

# 어플리케이션을 위한 dependencies들을 설치합니다.
npm install
```

## 실행

```bash
# 개발 서버를 시작합니다.
npm run dev

# /login - 로그인 페이지
# /deals - 딜 리스트 페이지
# /deals/:id - 딜 생성/수정 페이지
# /partners - 파트너 딜 페이지

```

## 배포
```bash
# 배포를 위해 build 합니다.
npm run build:prod
```