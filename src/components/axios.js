import axios from "axios";

const axiosBase = () => {
  return axios.create({
    baseURL: "https://evangadi-forum-backend-ky5j.onrender.com/api",
  });
};
export default axiosBase;
