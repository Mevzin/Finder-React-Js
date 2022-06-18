import axios from 'axios';

export const apiFinder = axios.create({
  baseURL: 'https://e-carros-api.herokuapp.com'
});