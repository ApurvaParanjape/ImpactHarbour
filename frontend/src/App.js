import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import OrganizationSignin from './Components/Org-Sign/OrganizationSignIn';
import OrganizationSignup from './Components/Org-Sign/OrganizationSignup';
import VolunteerSignin from './Components/Vol-Sign/volsignin';
import VolunteerSignup from './Components/Vol-Sign/volsignup';
import CreatePost from './Components/Posts/createPost';
import DeletePost from './Components/Posts/deletePost';
import UpdatePost from './Components/Posts/updatePost';
import ApplyToPost from './Components/Posts/applyPost';
import Posts from './Components/Posts/posts';
import VolunteerProfile from './Components/VolProfile/voldashboard';
function App() {
  return (
    <div className="App">
      
      <Router>
          
   
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/signup" element={<OrganizationSignup />} />
          <Route path="/signin" element={<OrganizationSignin />} />
          <Route path="/vol/signup" element = {<VolunteerSignup/>} />
          <Route path="/vol/signin" element = {<VolunteerSignin/>} />
          <Route path="/posts/create/:orgId" element={<CreatePost />} />
          <Route path="/posts/delete/:postId" element={<DeletePost />} />
          <Route path="/posts/update/:postId" element={<UpdatePost />} />
          <Route path="/posts/apply/:postId/:volunteerId" element={<ApplyToPost />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/vol/profile" element={< VolunteerProfile/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
