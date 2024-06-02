import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page. Here you can learn more about our application.</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default AboutPage;
