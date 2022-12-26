// import './App.css';
import './pgx8.css';
import React from 'react';
import image1 from './images/himg1.jpg';
import image2 from './images/himg2.jpg';
import { Link } from 'react-router-dom';
function Hima()
{
    return(
        <>
        <div class="heading2"></div>
        <div class="heading">
            <h1>THE HIMALAYAS PACKAGE(3 DAYS)50,000/-</h1>
        </div>
        
        <div  id="vertical-line">
        </div>
        <div>
            <img class="image-1" src={`${image1}`} alt='maldives' />  
        </div>
         <div>
            <img class="image-2" src={`${image2}`} alt='maldives' /> 
         </div> 
         <div class="sidetext">
            <ul>
                <li>
                   <div>
                    DAY 1 : COIMBATORE-NEPAL
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Arrive at Nepal Airport.On arrival check in to the hotel. Overnight stay at hotel in Manali.
                    </div></li>
                    <br/>
                    <li>
                    <div>
                    DAY 2 : NEPAL-HIMALAYAS
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;A Journey from nepal to the reachable area to the bottom of himalayas.
                    </div></li>
                    <br/>
                    <li>
                    <div>
                     DAY 3 :HIMALAYAS
                    <br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;Joining the walk from the bottom of the mountain, crossing all the struggle paths , touching the tip of himalayas and returning back
                </div></li>
                <br/>
                <li>
                 <div>
                DAY 3 : HIMALAYAS-NEPAL
                 <br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;Returning back to nepal airport
                
                 </div></li>
                <br/>
                <li>
                <div>
                &nbsp;&nbsp;&nbsp;&nbsp;END OF JOURNEY
                </div>
             </li>
            </ul>
         </div>
        <button CLASS="booking"><Link to="/swi">CONFIRM BOOKING</Link>
        
        </button> 
        </>
    )
}
export default Hima;