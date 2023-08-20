import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/layout/NavBar';
import FooterBar from './pages/layout/FooterBar';
import AuthStack from './pages/navigation/AuthStack';
import AppStack from './pages/navigation/AppStack';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/auth" element={<AuthStack />} />
        <Route exact path="/" element={<AppStack />} />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
