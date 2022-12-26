// import './App.css';
import './pgx9.css';
import React from 'react';
import image3 from './images/kimg1.jpg';
import image4 from './images/kimg2.png';
import { Link } from 'react-router-dom';
 function Konkan()
 {
    return(
        <>
        <div class="heading2"></div>
         <div id="heading">
           <h1>KOKAN KADA PACKAGE (2 DAYS & 1 NIGHT) 20,000/-</h1> 
        </div>
        <div >
            <img class="image-1" src={`${image3}`} alt="" />
        </div>
        <div >
            <img class="image-2" src={`${image4}`} alt=""/>
        </div>
        <div id="vertical-line">
        </div>
        
        <div class="sidetext">
            <ul>
                <li>
                <p >  DAY 1: COIMBATORE-MUMBAI  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Arrive Mumbai railway station and drive to Manali.On arrival check in to the hotel. Overnight stay at hotel in Manali.
                </p> </li>
                <li>
                 <p >  DAY 2: MUMBAI-KOKAN KADA <br /> 
                 &nbsp;&nbsp;&nbsp;&nbsp;Stay in resort . Complementary dinner will be provided.Campfire party all  over the night.
                </p> </li>
                <li>
                <p >   DAY 3: KOKAN KADA <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Day starts with trekking from the bottom of kokan kada hills and building up our way to the top of hill
                Making our way down to the resort makes the end of the day . arriving back to the resort.
                </p> </li>
                <li>
                <p >  DAY 4: DEPARTURE <br />
                &nbsp;&nbsp;&nbsp;&nbsp; We transfer you to Railway station
                        for onward journey.
                </p> </li>
             </ul>
                </div>
                <button CLASS="booking-2"><Link to="/swi">CONFIRM BOOKING</Link>
                </button>
        </>
    )
 }
 export default Konkan;