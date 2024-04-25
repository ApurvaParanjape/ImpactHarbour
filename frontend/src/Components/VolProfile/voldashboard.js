import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VolunteerProfile = () => {
  const [volunteerData, setVolunteerData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteerData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/volunteers/vol/signin');
        setVolunteerData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchVolunteerData();
  }, []);

  return (
    <div className="profile-container">
      <h2>Volunteer Profile</h2>
      {error && <p>Error: {error}</p>}
      {volunteerData && (
        <div>
          <p>Name: {volunteerData.name}</p>
          <p>Email: {volunteerData.email}</p>
          <p>Age: {volunteerData.age}</p>
          <p>City: {volunteerData.city}</p>
          <p>Aadhar Card: {volunteerData.aadharCard}</p>
          <p>Phone: {volunteerData.phone}</p>
         
        </div>
      )}
    </div>
  );
};

export default VolunteerProfile;