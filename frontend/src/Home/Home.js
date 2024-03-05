import React from 'react'
import downimg from "./WhatsApp Image 2024-02-01 at 23.42 1.png"
import aboutngo from "./_04e1d67c-287c-4ac6-a85e-ee005281770d-removebg-preview (1).png"
import Logo from "./images/2-removebg-preview 1.png"
import "./home.css"
import Navbaar from '../Navbar/Navbar'
const Home = () => {
  return (
    <div>
      <section id='Navbar'>
<Navbaar/>
      </section>
      <section id='Home'>
        <div id="aboutngo">
        <div id='vol'>   
          <h1>Volunteer.Connect.Impact</h1>  
          <br></br>
          <h3>Let's get Started</h3>
          <br></br>
          <div id='Join'>
            <button style={{fontSize:'24px'}}><p>Join us</p></button>
          </div>
       </div>
          <div>
          <img src={aboutngo}></img>
  </div>
  </div>
 
        <div id='downimg'> 
            <img src={downimg}></img>
        </div>
      </section>
    </div>
  )
}

export default Home


