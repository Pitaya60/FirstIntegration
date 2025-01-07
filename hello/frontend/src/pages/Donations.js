import React, { useState, useEffect } from 'react';
import { getDonations } from '../services/donationService'; // Сервис для получения пожертвований

function Donations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const response = await getDonations();
      setDonations(response);
    };

    fetchDonations();
  }, []);

  return (
    <div>
      <h2>Пожертвования</h2>
      {donations.length ? (
        <ul>
          {donations.map((donation) => (
            <li key={donation.id}>
              {donation.amount} - {donation.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет пожертвований</p>
      )}
    </div>
  );
}

export default Donations;
