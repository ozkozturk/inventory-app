import axios from 'axios';

const api = axios.create({
  baseURL: 'https://inventory-app--api.herokuapp.com/',
  // baseURL: 'http://localhost:8080/',
});

export default api;
