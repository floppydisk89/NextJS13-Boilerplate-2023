import axios from 'axios';
import host from '../data/host';

const api = axios.create({
  baseURL: `${
    process.env.NEXT_PUBLIC_SERVER_MODE === 'production'
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL
      : process.env.NEXT_PUBLIC_DEVELOPMENT_URL
  }/api/`,
  timeout: 1000,
  headers: { 'Cross-Origin-Resource-Policy': 'same-origin' },
});

export default api;
