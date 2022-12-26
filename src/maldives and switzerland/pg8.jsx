// import "./App.css";
import React from "react";
import image1 from "./images/maldives1.jpg";
import image2 from "./images/maldives2.jpg";
import { Link } from "react-router-dom";
import "./pg8.css";
function Mal() {
  return (
    <>
    <div class="heading4"></div>
      
        <p class="head">MALDIVES PACKAGE (5 DAYS) 55,000/-</p>
      

      <div id="vertical-line"></div>
      <div>
        <img class="image1" src={`${image1}`} alt="" />
      </div>
      <div>
        <img class="image2" src={`${image2}`} alt="" />
      </div>
      <div class="sidetext">
        <ul>
          <li>
            <div>
              DAY 1 : MALDIVES
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;on arrival at the maldives airport you
              will be transferred to the resort by speedboat rest of the day
              will be free for leisure. Overnight and dinner at the resort.
            </div>
          </li>
          <br />
          <li>
            <div>
              DAY 2 : MALDIVES BEACH
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;post breakfast at the hotel in maldives
              ;enjoy unrivaled luxury,stunning white-sand beaches and an amazing
              underwater world.Overnight stay at the resort.
            </div>
          </li>
          <br />
          <li>
            <div>
              DAY 3 : MALDIVES-COLOMBO
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;after breakfast at the resort ,head to
              airport in mala and board flight to Colombo. overnight stay at the
              Colombo resort.
            </div>
          </li>
          <br />
          <li>
            <div>
              DAY 4 : COLOMBO SIGHTSEEING
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;morning enjoy breakfast and go for Colombo
              sightseeing tour and explore places like pettah
              Bazaar,Bandaranaike Memorial International Hall,Hindu and Buddist
              temples.
            </div>
          </li>
          <br />
          <li>
            <div>DAY 5 : DEPARTURE FROM COLOMBO AIRPORT</div>
          </li>
        </ul>
      </div>
      <button class="book" ><Link to="/swi"><p class="book1">CONFIRM BOOKING</p></Link></button>
    </>
  );
}
export default Mal;
