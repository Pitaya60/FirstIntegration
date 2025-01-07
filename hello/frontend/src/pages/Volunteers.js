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
    <div>
      <h2>Волонтеры</h2>
      {volunteers.length ? (
        <ul>
          {volunteers.map((volunteer) => (
            <li key={volunteer.id}>
              {volunteer.name} - {volunteer.role}
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет волонтеров</p>
      )}
    </div>
  );
}

export default Volunteers;
