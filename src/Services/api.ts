import axios from "axios";

const api = axios.create({
  baseURL: "localhost:4000",
});

export default api;
