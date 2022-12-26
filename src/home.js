import './home.css'
import React from 'react';
import image1 from './images/logo11.png';
import image2 from './images/image1.jpg';
import image3 from './images/image2.jpg';
import image4 from './images/image3.jpg';
// import video from './images/nature.mp4';
// import { Link } from 'react-router-dom';
function Key4(){
  return(
    
    <>
    <div class="header">
        <div><img src={`${image1}`} alt="" /></div>
        <div class="head"><p>Home</p></div>
        <div><p>Gallery</p></div>
        <div class="pack"><p>Packages 🢓</p></div>
        <div class="pac">
            <div>Domestic</div>
            <div>International</div>
            <div>Treks</div>
        </div>
        <div><p>Group Tours</p></div>
        <div><p>Contact Us</p></div>
        <div><p onclick="sign_up()">Sign in</p></div>
        <div></div>
    </div>
    
    {/* <video src={video}  autoPlay="true" muted loop></video> */}

    
    <p class="para">We will take any criteria to discuss your requirements in details.</p>
    <p class="para">If you are not sure of what you might like to do then give us a call and we'll help you decide.</p>
    <div class="div">
        <div class="sec">
            <img class="img" src={`${image2}`} alt="" />
            <p>Domestic Tours</p>
        </div>
        <div class="sec"><img class="img" src={`${image3}`} alt="" /><p>International Tours</p></div>
        <div class="sec"><img class="img" src={`${image4}`} alt="" /><p>Treks</p></div>
    </div>
        
    </>  
  )}
export default Key4;