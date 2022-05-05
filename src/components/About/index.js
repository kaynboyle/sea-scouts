import "./style.css";
import React, { useState } from 'react';
import BB from "../../assets/images/BB Pic.PNG";
import Damon from "../../assets/images/Damon Head.PNG";
import NK from "../../assets/images/NK Photo.JPG";
const About = () => {

return(
    <main>
        <div className="bios">
                <div className="title">
                    <h1>Meet the Team</h1>
                </div>
                <div className="group-statment">
                    <div>
                        <h2>Cherry Solutions America Ltd.</h2>
                        <p> 80+ Years Experience in Marine Terminal Operations & Shipping Industry</p>
                        <p>Notable Technology Implementations by our team in reference to these products:</p>
                        <ol>
                            <li>- 1st to implement time tracking solutions on USWC</li>
                            <li>- 1st to implement OCR, EPS, technology on USWC</li>
                            <li>- Over two decades of enhancing MTO's Business Intelligence Environments</li>
                        </ol>
                    </div>
                    {/* <img src="favicon.ico" alt="icon"/> */}
                </div>
                <ul className="power-bottom">
                    <li>
                        <img className="profile" id="prof1" src={BB} alt="profile pic placeholder"/>
                        <p className="caption">Name<br></br>Position<br/>Location</p>
                        <div className="prof-info1">
                            <p>Name</p>
                            <p>Position</p>
                            <a href="https://www.linkedin.com/in/kaylin-n-boyle/">LinkedIn</a>
                        </div>
                        {/* <img className="image-layer" src="https://paragonn-cdn.nyc3.digitaloceanspaces.com/matchstic.com/imager/images/team/4167/MS_Portraits_Lauren_W360_H360_Mcrop_Q80_P50-50_9ff5117eae.png" alt="profile pic placeholder"/> */}
                    </li>
                    <li>
                        <img className="profile" id="prof2" src={Damon} alt="profile pic placeholder"/>
                        <div className="prof-info2">
                            <p>Name</p>
                            <p>Position</p>
                            <a href="https://www.linkedin.com/in/kaylin-n-boyle/">LinkedIn</a>
                        </div>
                    </li>
                    <li>
                        <img id="prof3" className="profile" src={NK} alt="profile pic placeholder"/>
                        {/* <p className="caption">Name<br></br>Position<br/>Location</p> */}
                        <div className="prof-info">
                            <p>Name</p>
                            <p>Position</p>
                            <a href="https://www.linkedin.com/in/kaylin-n-boyle/">LinkedIn</a>
                        </div>
                    </li>
                </ul>
            </div>
    </main>
    
    );
};

export default About;
