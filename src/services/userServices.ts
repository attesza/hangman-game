import axios from "axios";
import authHeader from "../lib/axios";

const API_URL = "http://localhost:8080/api/v1/user/";

export const getUserData = () => {
    return axios.get(API_URL + "getCurrentUser",  {headers: authHeader()});
}
