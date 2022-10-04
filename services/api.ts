import axios from 'axios';
import host from '../data/host';

const api = axios.create({
  baseURL: `https://${
    process.env.SERVER_MODE === 'production'
      ? host.baseUrl.production
      : host.baseUrl.development
  }/api/`,
  timeout: 1000,
  headers: { 'Cross-Origin-Resource-Policy': 'same-origin' },
});

export default api;
