import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f9fafb',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '1rem 2rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>
          Dashboard
        </h1>
      </header>

      {/* Main Content */}
      <main
        style={{
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Statistics */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#374151' }}>
            Statistics
          </h2>
          <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
            Total Volunteers: <strong>120</strong>
          </p>
          <p style={{ color: '#6b7280' }}>
            Total Donations: <strong>$50,000</strong>
          </p>
          <p style={{ color: '#6b7280' }}>
            Active Projects: <strong>8</strong>
          </p>
        </div>

        {/* Manage Donations */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#374151' }}>
            Manage Donations
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            Current Balance: <strong>$20,000</strong>
          </p>
          <button
            onClick={() => navigate('/donations')}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              marginBottom: '0.5rem',
            }}
          >
            View All Donations
          </button>
          <button
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#f43f5e',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Withdraw Funds
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: 'auto',
          textAlign: 'center',
          padding: '1rem',
          backgroundColor: '#10b981',
          color: 'white',
        }}
      >
        <p style={{ margin: 0 }}>© 2025 Dashboard App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
