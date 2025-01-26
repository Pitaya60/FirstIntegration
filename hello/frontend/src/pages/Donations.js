import React, { useState, useEffect } from 'react';
import { DollarSign, Calendar, TrendingUp, Users } from 'lucide-react';

function Donations() {
  const [donations, setDonations] = useState([]);

  // Mock donations data
  useEffect(() => {
    const mockDonations = [
      { id: 1, amount: 500, date: '2024-01-15', donor: 'Anonymous', project: 'Emergency Relief' },
      { id: 2, amount: 1000, date: '2024-01-20', donor: 'John Doe', project: 'Education Fund' },
      { id: 3, amount: 250, date: '2024-01-25', donor: 'Jane Smith', project: 'Healthcare Support' }
    ];
    setDonations(mockDonations);
  }, []);

  const calculateTotalDonations = () => {
    return donations.reduce((total, donation) => total + donation.amount, 0);
  };

  return (
    <div style={{
      backgroundColor: '#f0f9ff', 
      minHeight: '100vh', 
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2rem',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '1rem'
        }}>
          <DollarSign style={{ 
            color: '#10b981', 
            marginRight: '1rem', 
            width: '2rem', 
            height: '2rem' 
          }} />
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937' 
          }}>
            Donations Overview
          </h1>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: '#ecfdf5',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#10b981', fontWeight: 'bold' }}>Total Donations</p>
            <p style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#047857' 
            }}>
              ${calculateTotalDonations()}
            </p>
          </div>
          <div style={{
            backgroundColor: '#ecfdf5',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#10b981', fontWeight: 'bold' }}>Total Donors</p>
            <p style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#047857' 
            }}>
              {donations.length}
            </p>
          </div>
          <div style={{
            backgroundColor: '#ecfdf5',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#10b981', fontWeight: 'bold' }}>Latest Donation</p>
            <p style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#047857' 
            }}>
              {donations[donations.length - 1]?.date || 'N/A'}
            </p>
          </div>
        </div>

        <div>
          <h2 style={{ 
            marginBottom: '1rem', 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            color: '#1f2937' 
          }}>
            Recent Donations
          </h2>
          {donations.map((donation) => (
            <div key={donation.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f3f4f6',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '0.5rem'
            }}>
              <div>
                <p style={{ 
                  fontWeight: 'bold', 
                  color: '#111827' 
                }}>
                  ${donation.amount}
                </p>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.875rem' 
                }}>
                  {donation.donor} - {donation.project}
                </p>
              </div>
              <p style={{ 
                color: '#9ca3af', 
                fontSize: '0.875rem' 
              }}>
                {donation.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Donations;