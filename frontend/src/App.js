import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import OrganizationSignin from './Components/Org-Sign/OrganizationSignIn';
import OrganizationSignup from './Components/Org-Sign/OrganizationSignup';
import VolunteerSignin from './Components/Vol-Sign/volsignin';
import VolunteerSignup from './Components/Vol-Sign/volsignup';
import PostManagement from './Components/Posts/PostActivity';
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
          <Route path="/posts" element = {<PostManagement/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
