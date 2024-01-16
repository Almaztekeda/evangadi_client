import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "http://localhost:7000/api",
});

export default axiosBase;
