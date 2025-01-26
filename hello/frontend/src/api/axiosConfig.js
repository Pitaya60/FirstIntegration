import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://your-api-endpoint.com/api',  // Указываем базовый URL API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;
