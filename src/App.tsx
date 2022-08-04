import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CardTemplate from 'pages/CardTemplate';
import Home from 'pages/Home';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<CardTemplate />} />
    </Routes>
  );
};

export default App;
