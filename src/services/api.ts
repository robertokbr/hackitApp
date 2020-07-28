import axios from 'axios';

const api = axios.create({
  baseURL: 'hackit.app',
});

export default api;
