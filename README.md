# `Next.js로 포트폴리오 사이트 만들기`


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

