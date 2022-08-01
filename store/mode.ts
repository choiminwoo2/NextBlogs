import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initModeState{
    modSelector : boolean
}
const initialState : initModeState ={
    modSelector : false
}

const modeSlice = createSlice({
    name: 'mode',
    initialState:initialState,
    reducers:{
        permuteMode : (state) =>{
            state.modSelector = !state.modSelector
        }

    }
});

export const { permuteMode} = modeSlice.actions

export default modeSlice