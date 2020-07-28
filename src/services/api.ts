import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hackit.app',
});

export default api;
