//import React, { Component } from "react";
//import { ReactDOM } from "react";
import  "./lastpage.css";
import photo1 from './images/hello.png';

function Last(){
    return(
        <div>
        <img class="img1" src={`${photo1}`} alt='images' />
             <button class="done">
             DONE
            </button>
     </div>
    );
}
export default Last;