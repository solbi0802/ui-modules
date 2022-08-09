# ui-modules

### 개발 환경
- 개발환경 및 사용 기술 : TypeScript, React, react-router-dom (라우팅 처리), emotion (스타일링), vercel (배포)

### 프로젝트 실행 방법

- 로컬 실행 
```
npm i (패키지 설치)
npm run start (로컬 실행)

```
- 웹 페이지에서 바로 보기 (https://ui-modules-xi.vercel.app)

### 프로젝트 폴더 구조와 설계 의도

```
.
.
├── public
│   ├── images
│   │   └──image.png (카드 UI에 사용한 기본 이미지)
├── src
│   ├── components
│   │   ├── Card.tsx
│   │   ├── Form.tsx
│   │   └── Rating.tsx
│   ├── pages
│   │   ├── CardTemplate.tsx (카드 UI  페이지)
│   │   ├── FormTeplate.tsx  (입력 폼 UI 페이지)
│   │   └── Home.tsx (메인 페이지)
│   ├── types
│   │   ├── CardProp.types.ts
│   └── └── FormProp.types.ts
├── App.tsx (라우팅 처리)
├── App.css
├── index.css 
├── index.tsx
├── README.md
├── tsconfig.json
├── package.json
├── package-lock.json
├── .prettierrc
├── .eslintrc.json
└── .gitignore

```
- components: 재사용 가능한 구조의 컴포넌트를 추가했습니다.
- pages: 메인 페이지, 카드 UI 페이지, 입력 폼 페이지에 대한 화면을 추가했습니다.
- types: 공통적으로 사용되는 타입들을 정의했습니다.

### 컴포넌트 구조와 설계 의도
재사용할 수 있는 구조를 만들기 위해 공통으로 사용할 컴포넌트들은 components폴더에 넣어두었습니다. <br/>
컴포넌트 별로 최대한 쪼개서 작업할 수 있게 처리했으며, 컴포넌트에 props를 전달해서 처리할 수 있게 했습니다. <br/>
ui 모듈별로 라우팅 처리를 했으며, 필요한 컴포넌트들을 추가할 수 있게 화면을 구성했습니다.
