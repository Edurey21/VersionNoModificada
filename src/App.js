import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>My React App</h1>
      <nav className="main-nav">
        <Link to="/home">Home</Link>
        <Link to="/details">Details</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
