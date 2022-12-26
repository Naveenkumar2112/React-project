import './login.css'
import React from 'react';
import image1 from './images/profile.png';
import image2 from './images/lock.png';
// import photo from './images/image1.jpg'
import { Link } from 'react-router-dom';
function Key(){
  return(
    
    < >
        
        <div class="Division" >
        <p>LOGIN</p>
        <p>Email</p>
        <input class="mail1" type="email" placeholder="Enter your email" />
        <div class="profile1">
           <img src={`${image1}`} alt="" />
        </div>
        <p>Password</p>
        <input class="pass1" type="password" placeholder="Enter your password" />
        <div class="lock1">
             <img src={`${image2}`} alt="" />
        </div>
        <button><Link to="/manali" >LOGIN</Link></button>
        <Link to='/forgot-password' class="forgot1">Forgot Password?</Link>
        <hr class="hr1" />
        <p class="or1">OR</p>
        <Link to="/sign-up" class="dont1">Don't have an account? SIGN UP</Link>
        </div>
        
    </>  
  )}  
export default Key;