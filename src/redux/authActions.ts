import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'
import jwtDecode from "jwt-decode";

const backendURL = 'http://localhost:8080'
type Credentials = {
    email: string,
    password: string
}
type JwtPayload = {
    sub: string;
}
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({email, password}: Credentials, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const {data} = await axios.post(
                `${backendURL}/api/v1/auth/authentication`,
                {email, password},
                config
            )
            localStorage.setItem('userToken', data.token)
            const decodedJwt = jwtDecode<JwtPayload>(data.token);
            localStorage.setItem('userInfo', JSON.stringify({email: decodedJwt.sub}))

            return data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message)
                } else {
                    return rejectWithValue(error.message)
                }
            }
            return rejectWithValue(error);
        }
    }
)
export const userLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem('userInfo')
};
