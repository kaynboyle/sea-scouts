import "./style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

var axios = require("axios").default;

// import { useMutation } from '@apollo/client';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js'
const CherryCola = () => {
    
return(
    <main>
       <div className="container">
       <div id="slider">
            <ul>
            <li>
                <div className="slider-container">
                SUBSTANTIAL GAINFUL ACTIVITY<br />
                    <span>Are you making more than <strong>$1,260?</strong></span>
                </div>
            </li>
            <li>
                <div className="slider-container">
                SEVERE?<br />
                <span>Do you have <strong>Objective Medical Evidence?</strong></span>      
                </div>
            </li>
            <li>
                <div className="slider-container">
                MEETS LESTING<br />
                <span>Are you properly matched to your work description?</span>
                </div>
            </li>  
            <li>
                <div className="slider-container">
                PRESENT RELATIVE WORK<br />
                <span>Are you properly matched to your work description?</span>
                </div>
            </li>
            <li>
                <div className="slider-container">
                OTHER WORK<br />
                <span>Can a Vocational Expert help you find other work?</span>
                </div>
            </li>
            </ul>
        </div>
        </div>

    </main>
    // add link and preview image to download with the kebab nav bar
)
};

export default CherryCola;