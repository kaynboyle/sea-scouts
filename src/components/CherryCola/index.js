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
        <div id="title">
            <h1>Cherry COLA</h1>
        </div>
        <div id="slideset1">
            <div>
                <h1>Reduced Man Hours</h1>
                {/* <p>Slide 1</p> */}
                {/* <p>It has a <a href="./">link.</a> */}
            </div>
            <div>
                <h1>Transparency in the work process</h1>
            </div>
            <div>
                <h1>Increased accountability of employees</h1>
            </div>
            <div>
                <h1>Understanding costs and Ops efficiency</h1>
            </div>
            <div>
                <h1>Knowledge of resource demand</h1>
            </div>
            <div>
                <h1>Tracking costs to budget</h1>
            </div>
        </div>

    </main>
    // add link and preview image to download with the kebab nav bar
)
};

export default CherryCola;