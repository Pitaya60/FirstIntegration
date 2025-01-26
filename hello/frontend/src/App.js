import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Donations from './pages/Donations';
import Volunteers from './pages/Volunteers';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
        {/* Навигационное меню */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#10b981',
            color: 'white',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Aid System</h1>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '1rem',
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link
                to="/dashboard"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e0f2fe')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/donations"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e0f2fe')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Donations
              </Link>
            </li>
            <li>
              <Link
                to="/volunteers"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e0f2fe')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Volunteers
              </Link>
            </li>
            <li>
              <Link
                to="/map"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e0f2fe')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Map
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e0f2fe')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#e0f2fe')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>

        {/* Контент */}
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>

        {/* Футер */}
        <footer
          style={{
            textAlign: 'center',
            padding: '1rem',
            backgroundColor: '#10b981',
            color: 'white',
            marginTop: 'auto',
            boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p style={{ margin: 0 }}>© 2025 Aid System. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
