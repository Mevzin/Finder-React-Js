import axios from 'axios';

export const apiFinder = axios.create({
  baseURL: "https://finder-api-fake.herokuapp.com"
});