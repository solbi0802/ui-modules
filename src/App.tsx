import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import './App.css';
import CardTemplate from 'pages/CardTemplate';
import FormTemplate from 'pages/FormTemplate.';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<CardTemplate />} />
      <Route path="/form" element={<FormTemplate />} />
    </Routes>
  );
};

export default App;
