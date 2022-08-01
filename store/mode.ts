import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initModeState{
    counter : number
}
const initialState : initModeState ={
    counter : 0
}

const modeSlice = createSlice({
    name: 'mode',
    initialState:initialState,
    reducers:{
        increment:(state) =>{
            state.counter = state.counter +1;
        },
        decrement:(state) =>{
            state.counter = state.counter -1;
        },
        payloadMinus: (state, actions : PayloadAction<number>) =>{
            state.counter += actions.payload;
        }

    }
});

export const { increment, decrement, payloadMinus} = modeSlice.actions

export default modeSlice