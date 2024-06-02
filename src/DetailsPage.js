import React from 'react';
import { Link } from 'react-router-dom';

const DetailsPage = () => {
  return (
    <div>
      <h2>Details Page</h2>
      <p>Welcome to the details page!</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default DetailsPage;
