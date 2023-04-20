import { createSlice } from '@reduxjs/toolkit'
import { userLogin} from "./authActions";
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null
const initialState = {
    user: {},
    token: userToken,
    error: null,
    loading: false,
    success: false,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = payload
            state.token = payload.token
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

export default authSlice.reducer
