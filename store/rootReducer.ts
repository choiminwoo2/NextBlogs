import {AnyAction, CombinedState, combineReducers} from '@reduxjs/toolkit'
import modeSlice from './mode';
import { HYDRATE } from 'next-redux-wrapper';
import {initModeState} from './mode'
export interface RootReducerStates{
    mode: initModeState
}
export const rootReducer = (state : RootReducerStates, action: AnyAction) :CombinedState<RootReducerStates>=>{
    switch(action.type){
        case HYDRATE:
            return action.payload; 
        default:{
            const combindedReducer = combineReducers({
                mode: modeSlice.reducer
            })
            return combindedReducer(state, action);
  
        }
    }
}

// const rootReducer = combineReducers({
//     mode : modeSlice.reducer
// });

