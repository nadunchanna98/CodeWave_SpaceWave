import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/layout/NavBar';
import FooterBar from './pages/layout/FooterBar';
import { AuthProvider } from './common/context';

import Booking from './pages/user/Booking';
import MyTrips from './pages/user/MyTrips';
import Planets from './pages/user/Planets';
import Plans from './pages/user/Plans';
import About from './pages/user/About';
import SignUp from './pages/user/SignUp';
import Login from './pages/user/Login';
import Home from './pages/user/HomePage';
import SearchResults from './pages/user/SearchResults';
import FlightDetails from './pages/user/FlightDetails';

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/search" element={<SearchResults />} />
        <Route path="/flight-details" element={<FlightDetails />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <FooterBar />
    </AuthProvider>
  );
}

export default App;
