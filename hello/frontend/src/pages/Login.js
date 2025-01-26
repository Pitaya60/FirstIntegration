import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Здесь можно добавить логику для авторизации
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9fafb',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#333',
        }}
      >
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#374151',
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              outline: 'none',
              fontSize: '1rem',
            }}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#374151',
            }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              outline: 'none',
              fontSize: '1rem',
            }}
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#059669')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#10b981')}
        >
          Log In
        </button>
      </form>
      <p
        style={{
          textAlign: 'center',
          marginTop: '1rem',
          color: '#6b7280',
        }}
      >
        Don’t have an account?{' '}
        <a
          href="/register"
          style={{
            color: '#10b981',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Register here
        </a>
      </p>
    </div>
  );
};

export default Login;
