import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-endpoint.com/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register function
export const register = async (email, password) => {
  try {
    const response = await api.post('/register', { email, password });
    
    if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error('Ошибка регистрации');
    }
  } catch (error) {
    console.error('Ошибка при запросе регистрации:', error);
    return { success: false }; 
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    
    if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error('Ошибка входа');
    }
  } catch (error) {
    console.error('Ошибка при запросе входа:', error);
    return { success: false };  
  }
};
