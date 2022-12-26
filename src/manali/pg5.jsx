import './pg5.css';
import React from 'react';
import im1 from './im/manali new 1.png';
import im2 from './im/Rectangle 18.png';
import im3 from './im/Line 16.png';
import im4 from './im/img.png';
import im5 from './im/Ellipse 1.png';
import { Link } from 'react-router-dom';

function Pg5() {
    return (
     <>
            <img className="bg" src={`${im1}`} />
            <p className="head">KULLU MANALI PACKAGE(2 NIGHTS 3DAYS) 45,000 /-</p>
            <div>
                <img className="image1" src={`${im2}`} />
                <img className="image2" src={`${im4}`} />
            </div>
            <div>
                <img className="line1" src={`${im3}`} />
                <img className="do1" src={`${im5}`} />
                <img className="do2" src={`${im5}`} />
                <img className="do3" src={`${im5}`} />
                <img className="do4" src={`${im5}`} />
            </div>
            <div>
                <p className="n1">
                    DAY 1<br/>Arrive Delhi Airport/Train station and drive to Manali.
                On arrival check in to the hotel. Overnight stay at hotel in Manali.</p>
            <p className="n2">DAY 2<br/>Today full day excursion visiting Rohtang
            Pass (Upto Snow Line in case Rohtang is closed due to snow fall)
            and Sollang Valley. Overnight at hotel.</p>
            <p className="n3">DAY 3<br/>newly constructed Buddhist Monastery - Hadimba Devi temple -
            Vashist.Overnight at hotel.</p>  
        <p className="n4">DAY 4<br/>Manali – Delhi (570 kms 15/16 hrs journey)
After having breakfast, drive to Delhi.
We transfer you to Railway station/Airport
for onward journey.</p>
</div>
<button class="book"><Link to="/swi"><p class="book1">CONFIRM BOOKING</p></Link></button>
     </>
    );
  }
  
  export default Pg5;
  