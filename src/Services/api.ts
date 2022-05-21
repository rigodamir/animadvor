import axios from "axios";

const api = axios.create({
  baseURL: "https://animadvor-server.herokuapp.com",
});

export default api;
