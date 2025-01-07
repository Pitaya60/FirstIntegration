import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Donations from './pages/Donations';
import Volunteers from './pages/Volunteers';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <div>
        <h1>Aid System</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
