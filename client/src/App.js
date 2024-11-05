// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Proj001IncrementDecrement from './components/Proj001IncrementDecrement';
import Proj002InputForm from './components/Proj002InputForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/001" element={<Proj001IncrementDecrement />} />
        <Route path="/002" element={<Proj002InputForm />} />
      </Routes>
    </Router>
  );
}

export default App;