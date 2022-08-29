# `Next.js로 포트폴리오 사이트 만들기`


## 사용 기술
![React](https://img.shields.io/badge/-react-3776AB.svg?&style=for-the-badge&logo=React&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-FF2222.svg?&style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-GA2410.svg?&style=for-the-badge&logo=HTML5&logoColor=white)
![GIT](https://img.shields.io/badge/-GIT-000000.svg?&style=for-the-badge&logo=GIT&logoColor=white)
![Javascript](https://img.shields.io/badge/-Javascript-fffd15.svg?&style=for-the-badge&logo=Javascript&logoColor=white)
![Next](https://img.shields.io/badge/-Next-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-ffffff.svg?&style=for-the-badge&logo=TypeScript&logoColor=blue)

## 주소
[포트폴리오 사이트](https://next-portfolio-three-henna.vercel.app/)

## 기능
 + Dark, Light 모드 지원
 + 모바일, PC 반응협 웹 지원
 + Typing Animation 

## 메인 페이지(모바일)
![image](https://user-images.githubusercontent.com/50656081/187273358-a4cd2db0-2045-4b53-9eb0-3f0c391b7b56.png)

## 메인 페이지(PC)
![image](https://user-images.githubusercontent.com/50656081/187273209-2e1daa5c-23e3-4a74-8190-ba33e399fa53.png)

## 아쉬운 점
+ 완벽한 반응형 웹은 아닙니다. 중간 지점인 태블릿에서 대형 스마트폰까지 하지 못했습니다. 그리고 user-Agent에서 직접 기기를 확인하고 나눈것이 아니라 Css로 사용한 것이 아쉽습니다.
+ 브라우저 지원을 하지 못해서 아쉽습니다.
+ Next.js를 사용했지만, 실제 DB에서 가져오는 값이 없어서 getServerSideProps같은 ssr지원 함수를 사용하지 못한 것이 아쉽습니다. 사실상 vercel에 배포하기 위해서 사용한 느낌입니다.
## `발생한 오류와 해결`
----------

|에러 | 발생 원인 |
|--|--|
|internal/modules/cjs/loader.js:983 throw err|Next build에서 로더를 찾지 못함.
|참고 사이트| 해결법|
|https://github.com/nodejs/help/issues/2644|node_module 폴더 삭제이후 다시 npm instail |


## `error `
-------------
1. ### `useSelector(state=> state) state가 unknown.`  
```typescript
export declare const useSelector: <TState = unknown, Selected = unknown>(selector: (state: TState) => Selected, equalityFn?: EqualityFn<Selected> | undefined) => Selected;
```
+ [해당 주소참고하여 해결](https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state)  
스테이트의 타입을 지정하지 않으면 기본적으로 unknown이다.  
initState를 export하여 타입을 지정하는 것으로 해결함. 
----------------------------
앞으로 에러는 이슈 탭에 작성할 예정.

