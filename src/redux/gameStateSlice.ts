import {createSlice} from '@reduxjs/toolkit'
import {initGame, stateAllCharacter, tryCharacter} from "./gameActions";


const initialState = {
    wrongCounter: 0,
    actualWord: '',
    triedChar: [] as any
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(tryCharacter.fulfilled, (state, {payload}) => {
            state.wrongCounter = payload.data.wrongCounter
            state.actualWord = payload.data.actualWord
        });
        builder.addCase(initGame.fulfilled, (state, {payload}) => {
            state.wrongCounter = payload.wrongCounter
            state.actualWord = payload.actualWord
        })
        builder.addCase(stateAllCharacter.fulfilled, (state,{payload})=>{
            state.triedChar.push(payload);
            // state.triedChar = payload
        })
    }
})
export default gameSlice.reducer
