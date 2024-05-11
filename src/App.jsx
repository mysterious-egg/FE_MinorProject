import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './Map';
import VehicleCard from './Data';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehicleCard />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
};

export default App;
