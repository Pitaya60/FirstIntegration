import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-endpoint.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDashboardData = async () => {
  try {
    const response = await api.get('/dashboard');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных для панели управления:', error);
    return {};
  }
};
