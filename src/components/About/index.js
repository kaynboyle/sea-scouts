import React, { useState } from 'react';
import prof1 from "../../assets/placeholder.png";
const About = () => {

return(
    <main>
        <div className="bios">
                <h1>Meet the Team</h1>
                <ul className="power-bottom">
                    <li>
                        <img className="profile" src={prof1} alt="profile pic placeholder"/>
                        <img className="image-layer" src="https://paragonn-cdn.nyc3.digitaloceanspaces.com/matchstic.com/imager/images/team/4167/MS_Portraits_Lauren_W360_H360_Mcrop_Q80_P50-50_9ff5117eae.png" alt="profile pic placeholder"/>
                    </li>
                    <li>
                        <img className="profile" id="prof2" src={prof1} alt="profile pic placeholder"/>
                        <p className="caption">Kaylin Boyle<br></br>CEO<br/>Larkspur, CA</p>
                    </li>
                    <li>
                        <img id="prof3" className="profile" src={prof1} alt="profile pic placeholder"/>
                        <div className="prof-info">
                            <p>Kaylin Boyle</p>
                            <p>CEO</p>
                            <a href="https://www.linkedin.com/in/kaylin-n-boyle/">LinkedIn</a>
                        </div>
                    </li>
                </ul>
            </div>
    </main>
    
    );
};

export default About;
