import React, { useState, useEffect } from 'react';
import Card from './Card'; // Import the Card component

function VehicleCard() {
  const [vehicleData, setVehicleData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vehicledata-api.onrender.com/api/data/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVehicleData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {vehicleData.map((vehicle, index) => (
        <Card key={index} data={vehicle} />
      ))}
    </div>
  );
}

export default VehicleCard;
