import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-endpoint.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getVolunteers = async () => {
  try {
    const response = await api.get('/volunteers');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении волонтеров:', error);
    return [];
  }
};
