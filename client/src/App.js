// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Proj001IncrementDecrement from './components/Proj001IncrementDecrement';
import Proj002InputForm from './components/Proj002InputForm';
import Proj003ToDoList from './components/Proj003ToDoList';
import Proj004WindowDimensionDisplay from './components/Proj004WindowDimensionDisplay';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/001" element={<Proj001IncrementDecrement />} />
        <Route path="/002" element={<Proj002InputForm />} />
        <Route path="/003" element={<Proj003ToDoList />} />
        <Route path="/004" element={<Proj004WindowDimensionDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;