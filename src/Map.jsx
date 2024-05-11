import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '100vh',
    width: '100vw'
  };

  const defaultCenter = {
    lat: 28.6139,
    lng: 77.2090
  };

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState(null);
  const originAutocomplete = useRef(null);
  const destinationAutocomplete = useRef(null);

  const handleDirections = () => {
    if (origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin,
          destination,
          travelMode: 'DRIVING'
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    }
  };
  function getLocation(platePrefix) {
    const stateLocations = {
        AP: 'Amaravati, Andhra Pradesh',
        AR: 'Itanagar, Arunachal Pradesh',
        AS: 'Dispur, Assam',
        BR: 'Patna, Bihar',
        CT: 'Raipur, Chhattisgarh',
        GA: 'Panaji, Goa',
        GJ: 'Gandhinagar, Gujarat',
        HR: 'Chandigarh, Haryana',
        HP: 'Shimla, Himachal Pradesh',
        JH: 'Ranchi, Jharkhand',
        KA: 'Bengaluru, Karnataka',
        KL: 'Thiruvananthapuram, Kerala',
        MP: 'Bhopal, Madhya Pradesh',
        MH: 'Mumbai, Maharashtra',
        MN: 'Imphal, Manipur',
        ML: 'Shillong, Meghalaya',
        MZ: 'Aizawl, Mizoram',
        NL: 'Kohima, Nagaland',
        OR: 'Bhubaneswar, Odisha',
        PB: 'Chandigarh, Punjab',
        RJ: 'Jaipur, Rajasthan',
        SK: 'Gangtok, Sikkim',
        TN: 'Chennai, Tamil Nadu',
        TG: 'Hyderabad, Telangana',
        TR: 'Agartala, Tripura',
        UP: 'Lucknow, Uttar Pradesh',
        UT: 'Dehradun, Uttarakhand',
        WB: 'Kolkata, West Bengal',
    };

    const location = stateLocations[platePrefix];
    return location ? location : 'Unknown'; 
}

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAe4z0LnZQDymzk1-xQL8aK0dapyKjJJ6A"
      libraries={['places']}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px' }}>
          <Autocomplete
            onLoad={(autocomplete) => originAutocomplete.current = autocomplete}
            onPlaceChanged={() => setOrigin(originAutocomplete.current.getPlace().formatted_address)}
          >
            <input
              type="text"
              placeholder="Enter origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              style={{ padding: '10px', marginTop: '40px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }}
            />
          </Autocomplete>
          <Autocomplete
            onLoad={(autocomplete) => destinationAutocomplete.current = autocomplete}
            onPlaceChanged={() => setDestination(destinationAutocomplete.current.getPlace().formatted_address)}
          >
            <input
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{ padding: '10px', marginTop: '40px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '2' }}
            />
          </Autocomplete>
          <button onClick={handleDirections} style={{ padding: '10px 10px', marginTop: '40px', marginLeft: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Get Directions</button>
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
};

export default Map;
