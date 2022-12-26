//import React, { Component } from "react";
//import { ReactDOM } from "react";
import  "./goa.css";
import photo1 from './images/t3-tcube.png';
import photo2 from './images/t3-beach.png';
import photo3 from './images/t3-boat.png';
import photo4 from './images/Line.png';
import photo5 from './images/dot.png';
import { Link } from "react-router-dom";
// import photo6 from './images/dot.png';
// import photo7 from './images/dot.png';
// import photo8 from './images/dot.png';
function Goa(){
    return(
        <div>
            <p class="head">GOA PACKAGE(4 NIGHTS 4DAYS) 20,000 /-</p>
            <img class="bg" src={`${photo1}`} alt='images' />
            <img class="image1" src={`${photo2}`} alt='images' />
            <img class="image2" src={`${photo3}`} alt='images' />
            <img class="line" src={`${photo4}`} alt='images' />
            <img class="dot1" src={`${photo5}`} alt='images' />
            <img class="dot2" src={`${photo5}`} alt='images' />
            <img class="dot3" src={`${photo5}`} alt='images' />
            <img class="dot4" src={`${photo5}`} alt='images' />
            <p class="m1">DAY 1
            <br></br>Arrive Mumbai Airport/Train station and drive to Goa.On arrival
             check in to the hotel.Overnight stay at hotel in Manali.</p>
            <p class="m2">DAY 2
            <br></br>After breakfast spend full day to explore the North Goa.Visit Lord 
             Bodgeshwar Temple, Anjuna Beach, etc. In the evening,you will
             return to hotel for overnight.</p>
            <p class="m3">DAY 3
            <br></br>After breakfast explore South Goa. Visit Miramar Beach,Colva 
            Beach, evening boat cruise. Overnight stay at the hotel.</p> 
            <p class="m4">DAY 4
            <br></br>This day is a day of relaxation. Enjoy the sun, sand, and the sea at 
            beaches at own in Goa.</p>
            
            <button class="book"><Link to="/swi"><p class="book1">CONFIRM BOOKING</p></Link></button>
        </div>
    );
}
export default Goa;