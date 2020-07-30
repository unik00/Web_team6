import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost/api`,
  headers:{
    'Content-Type': 'application/json'
  }
});

export const Signin = (account) => {
  return api.post(`/auth/login`,JSON.stringify(account));
} 

export const Signup = (account) => {
  return api.post(`/auth/signup`,JSON.stringify(account));
} 