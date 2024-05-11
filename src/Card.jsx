import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Card({ data }) {
    const navigate = useNavigate();
    const Click = () => {
        navigate('/Map');
      };
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 m-4" onClick={Click}>
      <h2 className="text-2xl font-semibold mb-4">Vehicle Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 font-semibold">Vehicle No:</p>
          <p className="text-lg">{data['Vehicle No']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Name of Owner:</p>
          <p className="text-lg">{data['Name of Owner']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Vehicle Registration Year:</p>
          <p className="text-lg">{data['Vehicle Registration Year']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Insurance:</p>
          <p className="text-lg">{data['Insurance']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Model Name:</p>
          <p className="text-lg">{data['Model Name']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Colour:</p>
          <p className="text-lg">{data['Colour']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Registration State:</p>
          <p className="text-lg">{data['Registration State']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">VIN No:</p>
          <p className="text-lg">{data['VIN No']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Reported Stolen:</p>
          <p className="text-lg">{data['Reported Stolen'] ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">First Owner or Multiple Owner:</p>
          <p className="text-lg">{data['First Owner or Multiple Owner']}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">State Registered In:</p>
          <p className="text-lg">{data['State Registered In']}</p>
        </div>
      </div>
    </div>
  );
}


export default Card;
