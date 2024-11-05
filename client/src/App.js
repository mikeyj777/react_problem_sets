// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Proj001IncrementDecrement from './components/Proj001IncrementDecrement';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/001" element={<Proj001IncrementDecrement />} />
      </Routes>
    </Router>
  );
}

export default App;