import {configureStore,MiddlewareArray} from '@reduxjs/toolkit'
import reducers from './rootReducer';
import logger from 'redux-logger'
import { useDispatch } from 'react-redux';
import type {} from 'react-redux'
import { createWrapper } from 'next-redux-wrapper';



const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispath: () => AppDispatch = useDispatch


export const wrapper = createWrapper(() =>store)



