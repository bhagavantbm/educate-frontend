import axios from 'axios';

console.log("BASE URL FROM ENV:", process.env.REACT_APP_API_BASE); // Add this

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = token;
  return req;
});

export default API;
