import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

const backendURL = 'http://localhost:8080'

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${backendURL}/api/v1/auth/authentication`,
                { email, password },
                config
            )
            localStorage.setItem('userToken', data.token)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
