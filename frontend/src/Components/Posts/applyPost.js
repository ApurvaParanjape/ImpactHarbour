import React from 'react';
import axios from 'axios';

const ApplyToPost = ({ postId, volunteerId }) => {
  const handleApply = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/posts/applyToPost/${postId}/${volunteerId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleApply}>Apply to Post</button>
    </div>
  );
};

export default ApplyToPost;
