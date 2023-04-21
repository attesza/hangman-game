import {createSlice} from '@reduxjs/toolkit'
import {userLogin} from "./authActions";

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const userInfo = localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : null

const initialState = {
    user: userInfo,
    token: userToken,
    error: null,
    loading: false,
    success: false,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(userLogin.fulfilled, (state, {payload}) => {
            state.loading = false
            state.user = payload
            state.token = payload.token
        });
       builder.addCase(userLogin.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload as any;
        });
    },
})

export default authSlice.reducer
