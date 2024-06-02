import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is the contact page. Here you can find ways to get in touch with us.</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default ContactPage;
