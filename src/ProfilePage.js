import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the profile page. Here you can view and edit your profile information.</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default ProfilePage;
