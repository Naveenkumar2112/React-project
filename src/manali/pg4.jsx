import './pg4.css';
import React from 'react';
import image1 from './im/bg.jpg';
import image2 from './im/Arrow 2.png';
import im3 from './im/Lakhta__Image_4 1.jpg';
import im4 from './im/Rectangle 37.png';
import im5 from './im/Arrow 5.png';
import im6 from './im/3 1.png';
import im7 from './im/1 1.jpg';
import { Link } from 'react-router-dom';
function Page4() {
  return (
   <>
   {/* <div class="header"></div> */}
   <img className="bg" src={`${image1}`}/>
    
   <div className="div1">
    <p className="domestic">DOMESTIC</p>
    <img className="dom" src={`${im7}`} />
    <img className="arrow1" src={`${image2}`} />
    <a href="pg5.html"><img className="r1" src={`${im4}`}/></a>
    <p className="manali"><Link to="/manali1" >MANALI</Link></p>
    <a href="pg6.html"><img className="r2" src={`${im4}`}/></a>
    <p className="goa"><Link to="/goa1">GOA</Link></p>
</div>
<div className="div2">
    <p className="international">INTERNATIONAL</p>
    <img className="int" src={`${im3}`}/>
    <img className="arrow2" src={`${im5}`}/>
    <img className="r3" src={`${im4}`}/>
    <p className="maldives"><Link to="/maldive">MALDIVES</Link></p>
    <img className="r4" src={`${im4}`}/>
    <p className="switzerland"><Link to="/swit">SWITZERLAND</Link></p>
</div>
<div className="div3">
    <p className="trekking">TREKS</p>
    <img className="trek" src={`${im6}`}/>
    <img className="arrow3" src={`${image2}`}/>
    <img className="r5" src={`${im4}`}/>
    <p className="kokan"><Link to="/kok">KOKAN KADA</Link></p>
    <img className="r6" src={`${im4}`}/>
    <p className="himalaya"><Link to="/him">HIMALAYAS</Link></p>
       </div>
    {/* </div> */}
   </>
  );
}

export default Page4;
