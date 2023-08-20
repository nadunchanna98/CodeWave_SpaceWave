import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../user/HomePage';
import Booking from '../user/Booking';
import MyTrips from '../user/MyTrips';
import Planets from '../user/Planets';
import Plans from '../user/Plans';
import About from '../user/About';

function AppStack() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/booking" element={<Booking />} />
      <Route exact path="/my-trips" element={<MyTrips />} />
      <Route exact path="/planets" element={<Planets />} />
      <Route exact path="/plans" element={<Plans />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export default AppStack;
