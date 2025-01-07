import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-endpoint.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDonations = async () => {
  try {
    const response = await api.get('/donations');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении пожертвований:', error);
    return [];
  }
};
