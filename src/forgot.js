import './forgot.css'
import React from 'react';
import image5 from './images/password.webp';
import image6 from './images/mail.png';
import { Link } from 'react-router-dom';

function Key3()
{
    return(
        <>
        <div class="Division3">
        <img class="pass3" src={`${image5}`} alt="" />
        <p>Forgot Password</p>
        <p>Enter your email and we'll send you a link to reset your password</p>
        <input type="text" placeholder="Enter your email" />
        <div class="message3"><img class="mess" src={`${image6}`} alt="" /></div>
        <button onclick="sign_up()"><Link to="/">Submit</Link></button>
        <Link to='/' class="login3">  Back to Login </Link>
        </div>
        </>
    )
}
export default Key3;