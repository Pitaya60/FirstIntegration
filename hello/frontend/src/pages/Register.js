import React, { useState } from 'react';

// InputField component for handling the input fields
const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <label
      htmlFor={name}
      style={{
        display: 'block',
        marginBottom: '0.5rem',
        color: '#374151',
        fontWeight: 'bold',
      }}
    >
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        backgroundColor: '#f9fafb',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onFocus={(e) => {
        e.target.style.borderColor = '#10b981';
        e.target.style.boxShadow = '0 0 0 2px rgba(16, 185, 129, 0.3)';
      }}
      onBlur={(e) => {
        e.target.style.borderColor = '#d1d5db';
        e.target.style.boxShadow = 'none';
      }}
    />
  </div>
);

// Button component for the form submission button
const Button = ({ label, type, onClick }) => (
  <button
    type={type}
    onClick={onClick}
    style={{
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
  >
    {label}
  </button>
);

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Simulated registration logic
      const simulatedRegistration = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const success = Math.random() > 0.5;
            resolve({
              success,
              message: success ? 'Registration successful' : 'Registration failed'
            });
          }, 1000);
        });
      };

      const response = await simulatedRegistration();
      
      if (response.success) {
        alert('Registration successful! Redirecting to login.');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleLoginRedirect = () => {
    alert('Redirecting to login page');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #ecfdf5, #10b981)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
          }}
        >
          Create an Account
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <InputField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
          <Button label="Register" type="submit" />
        </form>
        <div
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#6b7280' }}>
            Already have an account?{' '}
            <span
              onClick={handleLoginRedirect}
              style={{
                color: '#10b981',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;