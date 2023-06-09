import axios from "axios";
import authHeader from "../lib/axios";
import {API_URL} from "./config";


export const newGame = (data: any) => {
    return axios.post(API_URL + "newGame", data, {headers: authHeader()});
}

export const stopGame = () => {
    return axios.post(API_URL + "stopGame", null, {headers: authHeader()})
}

interface PlayResponse {
    actualWord: string,
    wrongCounter: number,
    gameState: string,
    triedCharacter: string
}

export const tryChar = (char: string) => {
    return axios.post<PlayResponse>(API_URL + `tryChar?char=${char}`, null, {headers: authHeader()});
}

export const hasActiveGame = () => {
    return axios.get(API_URL + "hasActiveGame", {headers: authHeader()});
}
export const continueGame = () => {
    return axios.post(API_URL + "continueGame", null, {headers: authHeader()});
}

export const getTop = ()=>{
    return axios.get(API_URL+"topTen");
}
