import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apresentacao from '../Pages/Apresentacao';
import Home from '../Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/apresentacao' element={<Apresentacao />} />
      </Routes>
    </Router>
  );
}

export default App;
