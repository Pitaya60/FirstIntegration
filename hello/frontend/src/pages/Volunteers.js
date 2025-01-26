import React, { useState, useEffect } from 'react';
import { getVolunteers } from '../services/volunteerService'; // Сервис для получения волонтеров

function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const response = await getVolunteers();
      setVolunteers(response);
    };

    fetchVolunteers();
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #ecfdf5, #10b981)',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
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
          Volunteers
        </h2>
        {volunteers.length ? (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {volunteers.map((volunteer) => (
              <li
                key={volunteer.id}
                style={{
                  backgroundColor: '#f9fafb',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#374151',
                    marginBottom: '0.5rem',
                  }}
                >
                  {volunteer.name}
                </h3>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '1rem',
                  }}
                >
                  {volunteer.role}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p
            style={{
              textAlign: 'center',
              color: '#6b7280',
              fontSize: '1rem',
            }}
          >
            No volunteers available
          </p>
        )}
      </div>
    </div>
  );
}

export default Volunteers;
