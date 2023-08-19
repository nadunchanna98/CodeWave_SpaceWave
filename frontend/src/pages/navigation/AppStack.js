import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../user/HomePage';

function AppStack() {
  return (
    <Routes>
             <Route exact  path="/" element={<Home/>} />
    </Routes>
  );
}

export default AppStack;
