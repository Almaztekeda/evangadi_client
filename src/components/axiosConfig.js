import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "https://evangadi-forum-backend-ky5j.onrender.com/api",
});

export default axiosBase;
