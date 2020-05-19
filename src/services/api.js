import axios from 'axios';

const api = axios.create({
  baseURL:'https://omnistackallan-backend.herokuapp.com',
});

export default api;