import './signup.css'
import React from 'react';
import image3 from './images/profile.png';
import image4 from './images/lock.png';
import { Link } from 'react-router-dom';
function Key1(){
    return(
        <>
        <div class="Division2">
        <p>SIGN UP</p>
        <div class="name2">
            <div class="fdiv2">

                <p>First Name</p>
                <input class="first2" type="text" placeholder="First name" />
            </div>
            <div class="sdiv2">

                <p>Last Name</p>
                <input class="last2" type="text" placeholder="Last name" />
            </div>

        </div>
        <p>Contact Number</p>
        <input class="Contact2" type="text" placeholder="Contact number" />
        <p>Email</p>
        <input class="mail2" type="text" placeholder="Enter your email" />
        <div class="profile2">
           <img src={`${image3}`} alt="" />
        </div>
        <p>Password</p>
        <input class="pass2" type="password" placeholder="Enter your password" />
        <div class="lock2">
             <img src={`${image4}`} alt="" />
        </div>
        <button class="butto"><Link to="/sig">SIGN UP</Link></button>
        <hr class="hr2" />
        <p class="or2">OR</p>
        <Link to='/' class="dont2">Already a user? LOGIN</Link>
        </div>
        </>
    )
}
export default Key1;