// import "./App.css";
import React from "react";
import image3 from "./images/switzerland 1.jpg";
import image4 from "./images/switzerland 2.jpg";
import "./pg9.css";
import { Link } from "react-router-dom";
function Swi() {
  return (
    <>
    <div class="heading5"></div>
      <div id="heading">
        <h1>SWITZERLAND PACKAGE (4 DAYS) 60,000/-</h1>
      </div>
      <div>
        <img class="image-1" src={`${image3}`} />
      </div>
      <div>
        <img class="image-2" src={`${image4}`} />
      </div>
      <div id="vertical-li"></div>

      <div class="sidetext">
        <ul>
          <li>
            <p>
              {" "}
              DAY 1: MONTREUX <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Upon arrival at Montreux, you ll be
              greeted by our representative who will help you transfer to the
              hotel. After freshening up, the rest of the day will be for
              leisure.Dinner and Overnight stay at the hotel.
            </p>{" "}
          </li>
          <li>
            <p>
              {" "}
              DAY 2: <br />
              &nbsp;&nbsp;&nbsp;&nbsp;The real tour begins today as, after a
              scrumptious breakfast, you will leave to explore Montreux. A visit
              to Lake Promenade which is a popular tourist in Montreux. After
              that head back to hotel for dinner and Overnight stay
            </p>{" "}
          </li>
          <li>
            <p>
              {" "}
              DAY 3: LUCERNE TO MT.TITLIS <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Post breakfast, get enthusiastic as
              memorable experience as your Switzerland tour extends to an
              excursion to the glacier paradise of Mount Titlis which is the
              world's first revolving gondola
            </p>{" "}
          </li>
          <li>
            <p>
              {" "}
              DAY 4: DEPARTURE LUCERNE <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Day 04 will be your last day of the
              beautiful Switzerland trip.
            </p>{" "}
          </li>
        </ul>
      </div>
      <button class="booking"><Link to="/swi">CONFIRM BOOKING</Link></button>
    </>
  );
}
export default Swi;
