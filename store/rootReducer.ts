import {combineReducers} from '@reduxjs/toolkit'
import modeSlice from './mode';
const rootReducer = combineReducers({
    mode : modeSlice.reducer
});

export default rootReducer;
