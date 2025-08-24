import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:40183", 
  timeout: 10000,
});

export default api;