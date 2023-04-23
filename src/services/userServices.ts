import axios from "axios";
import authHeader from "../lib/axios";
import {API_URL} from "./config";


export const getUserData = () => {
    return axios.get(API_URL + "user/getCurrentUser",  {headers: authHeader()});
}
