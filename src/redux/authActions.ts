import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {getUserData} from "../services/userServices";

const backendURL = 'http://localhost:8080'
type Credentials = {
    email: string,
    password: string
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

            // const decodedJwt = jwtDecode<JwtPayload>(data.token);
            localStorage.setItem('userToken', data.token)


            return data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message)
                } else {
                    return rejectWithValue({message: error.message , status: error.response})
                }
            }
            return rejectWithValue(error);
        }
    }
)

export const getUserInfo= createAsyncThunk(
    'auth/getUserInfo',
    async ( ) => {
        const {data} = await getUserData();
        localStorage.setItem('userInfo',JSON.stringify(data))
        return data;
    }
)

export const userLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem('userInfo')
};
