import React from 'react';
import Dashboard from './dashboard/Dashboard';
import SignInSide from './dashboard/SignInSide';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}

export default App;
