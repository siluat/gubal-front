# 개발 기록

## 기술 선택

- React (CRA)
- TypeScript

## 프로젝트 초기화

```bash
npx create-react-app gubal-front-rebuild --template typescript
```

## 개발 규칙

- TDD를 해보려고 노력한다.
- 코드 커버리지 100%를 유지한다.

## 스토리북의 사용

리액트 컴포넌트의 시각적인 테스트를 위해 사용한다.

### 스토리북 설치

다음 명령어를 실행하면 React 프로젝트를 감지해서 자동으로 설치가 된다.

```bash
npx -p @storybook/cli sb init
```

설치가 완료되면 다음 명령어로 스토리북을 실행할 수 있다.

```bash
yarn storybook
```

### 코드 커버리지에서 스토리 파일 예외 처리

스토리 파일(\*.stories.tsx)을 코드 커버리지를 측정할 필요가 없다. 코드 커버리지를 측정하지 않을 파일 목록을 `package.json' 파일에 추가한다.

```json
{
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx}",
      "!src/**/*.stories.tsx",
      "!/node_modules/",
      "!src/index.js",
      "!src/registerServiceWorker.js"
    ]
  }
}
```
