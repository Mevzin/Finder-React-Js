import axios from 'axios';

export const apiFinderSecondary = axios.create({
  baseURL: 'https://monkfish-app-2xvm7.ondigitalocean.app',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export const apiFinder = axios.create({
  baseURL: "https://finder-api-fake.herokuapp.com"
});