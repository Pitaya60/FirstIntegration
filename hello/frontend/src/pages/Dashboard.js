import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService'; // Предполагаем, что есть функция регистрации

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // используем useNavigate вместо history

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    const response = await register(email, password); // Предполагаем, что register возвращает объект с success
    if (response.success) {
      navigate('/login'); // Перенаправляем на страницу логина
    } else {
      alert('Регистрация не удалась');
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
