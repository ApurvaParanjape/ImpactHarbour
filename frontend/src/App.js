import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import OrganizationSignin from './Components/Org-Sign/OrganizationSignIn';
import OrganizationSignup from './Components/Org-Sign/OrganizationSignup';

function App() {
  return (
    <div className="App">
      
      <Router>
          
   
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/organization/signup" element={<OrganizationSignup />} />
          <Route path="/organization/signin" element={<OrganizationSignin />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
