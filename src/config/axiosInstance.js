import axios from "axios";
import { BASE_URL } from "../utils/constans";

export const axiosInstance = axios.create({
    baseURL:BASE_URL,
})