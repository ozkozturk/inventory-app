import axios from 'axios';

const api = axios.create({
  baseURL: 'https://inventory-app--api.herokuapp.com/',
});

export default api;
