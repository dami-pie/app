import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.ecomp.tech:33334',
});

export default api;
