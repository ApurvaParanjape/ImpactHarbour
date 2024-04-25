import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ orgId }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    location: '',
    vacancies: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/posts/createPost/${orgId}`, formData);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <input type="number" name="vacancies" placeholder="Vacancies" onChange={handleChange} />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
