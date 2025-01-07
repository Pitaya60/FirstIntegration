import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { register } from '../services/authService'; // Исправлено на правильный импорт

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    try {
      const response = await register(email, password);
      if (response.success) {
        navigate('/login');
      } else {
        alert('Регистрация не удалась');
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      alert('Произошла ошибка. Попробуйте снова.');
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
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
      <InputField
        label="Подтвердите пароль"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button type="button" label="Зарегистрироваться" onClick={handleRegister} />
    </div>
  );
}

export default Register;
