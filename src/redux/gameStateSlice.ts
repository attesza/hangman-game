import {createSlice} from '@reduxjs/toolkit'
import {initGame, tryCharacter} from "./gameActions";


const initialState = {
    wrongCounter: 0,
    actualWord: '',
    triedCharacter: '',
    gameState: '',
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(tryCharacter.fulfilled, (state, {payload}) => {
            state.wrongCounter = payload.data.wrongCounter
            state.actualWord = payload.data.actualWord
            state.gameState = payload.data.gameState
            state.triedCharacter = payload.data.triedCharacter
        });
        builder.addCase(initGame.fulfilled, (state, {payload}) => {
            state.wrongCounter = payload.wrongCounter
            state.actualWord = payload.actualWord
            state.gameState = payload.gameState
            state.triedCharacter = ''
        })

    }
})
export default gameSlice.reducer
