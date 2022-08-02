import {configureStore,Reducer,AnyAction,CombinedState} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { useDispatch } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import {RootReducerStates, rootReducer} from './rootReducer'


    //  reducer: Reducer<S, A> | ReducersMapObject<S, A>;
    //  middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M;
    //  devTools?: boolean | DevToolsOptions;
    //  preloadedState?: PreloadedState<CombinedState<NoInfer<S>>>;
    //  enhancers?: StoreEnhancer[] | ConfigureEnhancersCallback;

const store = configureStore({
    reducer: rootReducer as Reducer<CombinedState<RootReducerStates>, AnyAction>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});
// index.ts에서 사용하기도 하지만, root reducer에서 RootState를 생성해도 상관없다. 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispath: () => AppDispatch = useDispatch

// 콜백함수로 전달해야함.
export const wrapper = createWrapper(() =>store)



