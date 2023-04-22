import axios from "axios";
import authHeader from "../lib/axios";

const API_URL = "http://localhost:8080/api/v1/";


export const getWords = () => {
    return axios.get(API_URL + "words", {headers: authHeader()});
};
export const addWord = (data: any) => {
    return axios.post(API_URL + "word", data, {headers: authHeader()});
}


