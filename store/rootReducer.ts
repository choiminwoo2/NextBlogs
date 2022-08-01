import {combineReducers} from '@reduxjs/toolkit'
import modeSlice from './mode';
const rootReducer = combineReducers({
    mode : modeSlice.reducer
});
console.log(rootReducer);

export default rootReducer;
