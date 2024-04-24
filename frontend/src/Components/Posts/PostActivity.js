import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './posts.css'; 

const PostManagement = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({});
  const [deletedPostId, setDeletedPostId] = useState('');
  const [volunteerId, setVolunteerId] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts/');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/posts/createPost/${newPost.orgId}`, newPost);
      setPosts([...posts, response.data.newPost]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleUpdatePost = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/posts/updatePost/${updatedPost.postId}`, updatedPost);
      const updatedPosts = posts.map(post => {
        if (post._id === updatedPost.postId) {
          return response.data.updatedPost;
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDeletePost = async () => {
    try {
      await axios.post(`http://localhost:5000/posts/deletePost/${deletedPostId}`);
      const filteredPosts = posts.filter(post => post._id !== deletedPostId);
      setPosts(filteredPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleApplyToPost = async () => {
    try {
      await axios.post(`http://localhost:5000/posts/applyToPost/${volunteerId}`);
      // Assuming you want to update UI after applying
      fetchPosts();
    } catch (error) {
      console.error('Error applying to post:', error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <input type="text" placeholder="Title" onChange={e => setNewPost({ ...newPost, title: e.target.value })} />
      
      <button onClick={handleCreatePost}>Create</button>

      <h2>Update Post</h2>
      <input type="text" placeholder="Post ID" onChange={e => setUpdatedPost({ ...updatedPost, postId: e.target.value })} />
      
      <button onClick={handleUpdatePost}>Update</button>

      <h2>Delete Post</h2>
      <input type="text" placeholder="Post ID" onChange={e => setDeletedPostId(e.target.value)} />
      <button onClick={handleDeletePost}>Delete</button>

      <h2>Apply to Post</h2>
      <input type="text" placeholder="Volunteer ID" onChange={e => setVolunteerId(e.target.value)} />
      <button onClick={handleApplyToPost}>Apply</button>

      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostManagement;
