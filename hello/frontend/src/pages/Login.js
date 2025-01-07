import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { login } from '../services/authService'; // Исправлено на правильный импорт

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      if (response.success) {
        navigate('/dashboard');
      } else {
        alert('Логин не удался');
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);
      alert('Произошла ошибка. Попробуйте снова.');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <InputField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Пароль"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="button" label="Войти" onClick={handleLogin} />
    </div>
  );
}

export default Login;
