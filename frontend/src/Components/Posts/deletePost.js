import React from 'react';
import axios from 'axios';

const DeletePost = ({ postId }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/posts/deletePost/${postId}`);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default DeletePost;
