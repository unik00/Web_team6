import axios from 'axios';

const api = axios.create({
  baseURL: `https://ad8bb52a40d8.ngrok.io`,
  headers:{
    'Content-Type': 'application/json'
  }
});

export const Signin = (account) => {
  return api.post(`/api/auth/login`,JSON.stringify(account));
} 

export const Signup = (account) => {
  return api.post(`/api/auth/login`,JSON.stringify(account));
} 