import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initModeState{
    modSelector : boolean
}

// const getInitWindowMode = () : boolean =>{
//     if (typeof window !== "undefined") {
//         // Client-side-only code
//         const isBrowserDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
//         .matches
//        const initTheme = isBrowserDarkMode ? true : false
//        return initTheme;
//       }
//         return false;
// }


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