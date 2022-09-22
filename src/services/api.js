import axios from 'axios';

const api = axios.create({
  baseURL: 'https://200.133.2.29:33334',
});

export default api;