import {createAsyncThunk} from '@reduxjs/toolkit'
import {tryChar} from "../services/wordService";



export const tryCharacter = createAsyncThunk(
    'game/tryChar',
    async ( char: string, {rejectWithValue,dispatch}) => {
        dispatch(stateAllCharacter(char))
        return tryChar(char.toLowerCase())
    }
)
export const stateAllCharacter = createAsyncThunk(
    'game/triedAllChar',
    async ( char: string) => {
        return char
    }
)
export const initGame = createAsyncThunk(
    'game/initGame',
    async ( data: any, {rejectWithValue}) => {
        return data
    }
)
