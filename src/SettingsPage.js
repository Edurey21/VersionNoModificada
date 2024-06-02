import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  return (
    <div>
      <h2>Settings Page</h2>
      <p>This is the settings page. Here you can adjust your preferences and settings.</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default SettingsPage;
