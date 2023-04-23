import axios from "axios";
import authHeader from "../lib/axios";
import {API_URL} from "./config";



export const getWords = () => {
    return axios.get(API_URL + "words", {headers: authHeader()});
};
export const addWord = (data: any) => {
    return axios.post(API_URL + "word", data, {headers: authHeader()});
}


