import axios from "axios";

const axiosInstance = axios.create({
  //  baseURL: "http://localhost:9000",s
  baseURL: "https://portfolio-projects-cuv7.onrender.com",
});

export default axiosInstance;
