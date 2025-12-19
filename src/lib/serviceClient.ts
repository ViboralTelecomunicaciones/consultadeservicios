import axios from 'axios';

export const instance = axios.create({
  baseURL: '/api/v1',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': import.meta.env.VITE_API_KEY || '',
    },
});
