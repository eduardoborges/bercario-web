import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.azcode.com.br/',
});

export default api;
