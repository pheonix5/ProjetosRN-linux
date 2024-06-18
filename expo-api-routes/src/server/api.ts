import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.61.20.141:8081"
});