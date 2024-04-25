import React, { useState } from 'react';
import axios from 'axios';
import './signup-styles.css'; 

const OrganizationSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '', // Add city field
    description: '' // Add description field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/organization/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <h2>Organization Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Organization Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        <input type="text" name="city" placeholder="City" onChange={handleChange} /> {/* Add city input field */}
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea> {/* Add description textarea */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default OrganizationSignup;
