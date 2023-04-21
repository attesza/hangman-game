import {configureStore} from '@reduxjs/toolkit'
import authReducer from "../redux/authSlice";
import gameReducer from "../redux/gameStateSlice"
import {useDispatch} from "react-redux";


const store = configureStore({
    reducer: {
        auth: authReducer,
        game: gameReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

