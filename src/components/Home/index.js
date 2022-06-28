import React, { useEffect, useState } from 'react';
import "./style.css";
import { useMousePosition } from "../../assets/scripts/mousePosition.js";
import gif1 from "../../assets/images/cherry-slides-gif.gif";
import terminalStock1 from "../../assets/images/isteal.jpg";
import hero1 from "../../assets/images/hero-image.jpg";
import flame from "../../assets/images/flame.png";
import wave from "../../assets/images/wave.png";
import graph from "../../assets/images/graph.png";
import cycle from "../../assets/images/cycle.png";

//src\assets\images\cherry-slides-gif.gif
// var axios = require("axios").default;
// import { useMutation } from '@apollo/client';

const Home = () => {
    const mouse = useMousePosition();
    React.useEffect(() => {
        const canvas = document.getElementById('moss-graph');
        const ctx = canvas.getContext('2d');
        
        // var graphReady = false;
        // var graph = new Image();
        // graph.onload = loaded;
        
        const circles = [{x:90,y:330},{x:220,y:300},{x:350,y:200},{x:460,y:100}];
        const arrows = [{x1:10,y1:30, x2:30, y2:30},{x1:10,y1:400, x2:30, y2:400},{x:350,y:200},{x:460,y:100}];
        const line1 = [{x: 90, y:345},{x: 90, y:420}];
        const line2 = [{x:220, y:315},{x: 220, y: 420}];
        const line3 = [{x:350, y:220}, {x:350, y:420}];
        const line4 = [{x: 460, y:108}, {x:460, y:420}];
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#191970";
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(20, 400);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(20, 300)
        ctx.lineTo(520, 300);
        // ctx.lineTo()
        ctx.stroke();
        function drawArrowsUp(arrows){
            let height = (arrows.x1*2)* Math.cos(Math.PI/6);
            ctx.beginPath();
            ctx.moveTo(arrows.x1, arrows.y1);
            ctx.lineTo(arrows.x2, arrows.y2);
            ctx.lineTo(arrows.x1*2, arrows.y1-height);
            ctx.strokeStyle = "#191970";
            ctx.stroke();
            ctx.fillStyle = "#191970";
            ctx.fill();
            
            
        };
        function drawArrowsDown(arrows){
            let height = (arrows.x1*2)* Math.cos(Math.PI/6);
            ctx.beginPath();
            ctx.moveTo(arrows.x1, arrows.y1);
            ctx.lineTo(arrows.x2, arrows.y2);
            ctx.lineTo(arrows.x1*2, arrows.y1+height);
            ctx.strokeStyle = "#191970";
            ctx.stroke();
            ctx.fillStyle = "#191970";
            ctx.fill();
            
        };
        drawArrowsUp(arrows[0]);
        drawArrowsDown(arrows[1]);
        function drawCircles(circles){
            ctx.beginPath();
            ctx.lineWidth =3;
            ctx.strokeStyle = "#E0FFFF";
            ctx.fill();
            ctx.fillStyle = "#FF0000";
            ctx.arc(circles.x, circles.y, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        };
        drawCircles(circles[0]);
        drawCircles(circles[1]);
        drawCircles(circles[2]);
        drawCircles(circles[3]);
        function drawDottedLine(lineStart, lineEnd){
            ctx.strokeStyle = "#191970";
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.moveTo(lineStart.x, lineStart.y);
            ctx.lineTo(lineEnd.x, lineEnd.y);
            ctx.stroke();
            ctx.beginPath();
        
        }
        drawDottedLine(line1[0], line1[1]);
        drawDottedLine(line2[0], line2[1]);
        drawDottedLine(line3[0], line3[1]);
        drawDottedLine(line4[0], line4[1]);
        // ctx.fillRect(0, 0, 150, 100);
        // ctx.fillStyle = "red";
        // ctx.fill();
        // function drawGraph(e){
        //         x=e.clientX;
            
        // }
    
    });
    // const ctx = canvas.getContext('2d');
    // ctx.width = window.innerWidth;
    // ctx.moveTo(0, 0);
    // ctx.lineTo(0, 100);
    // ctx.stroke();
    
return(
    <main>
        <div class="hero-image">
        <div class="hero-text">
          <h1>Cherry Solutions
          </h1>

        </div>
        </div>

        <div className="homeFlex1">
            <div className="shadow-2xl">
                {/* <img src={gif1} alt="gif slideshow"/> */}
                <h1>Our Mission</h1>
                <h2>
            Navigating thru change to find optimal; enabling and
            empowering organizations to envision and achieve it.</h2>

            </div>
            <div className= "2HomeFlex1">
                
            </div>
        </div>
        <div className="bigger-box">

            <div id="left-of-graph">
                <div className="shadow-2xl" id="mos-description">
                    <h1>Management Operating System: A MOS</h1>
                    <p><br/>-A Management Operating System (MOS) is the set of tools, meetings and behaviors used to manage your people and processes to deliver results. </p>
                    <p>- A Management Operating System (MOS) follows the Plan, Do, Check, Act improvement cycle to get control and steadily improve process performance.</p>
                    <p>The MOS would incorporate and employ a variety of subsystems inclusive of 'any' TOS.</p>
                </div>
                <div className="shadow-2xl" id="lower-left">
                    <div className="button-column">
                        <ul>
                            <li>
                                <img id="flame1" src={flame} alt="flame icon"/>
                            </li>
                            <li>
                                <button><img src={graph} alt="graph icon"/></button>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="button-column">
                        <ul>
                                <li>
                                    <img id="wave" src={wave} alt="wave icon"/>
                                </li>
                                <li>
                                    <img src={cycle} alt="cycle icon"/>
                                </li>
                            </ul>
                        
                    </div>
                    {/* <img id="flame" src={flame} alt="flame icon"/>
                        <img id="wave" src={wave} alt="wave icon"/>
                        <img src={graph} alt="graph icon"/>
                        <img src={cycle} alt="cycle icon"/> */}
                </div>
            </div>
            <div className="shadow-2xl" id="flexbox">
                <div className="graphTitle">
                    <p id="improving" class>Improving</p>
                    <h2>Pace of <br/>Improvement</h2>
                    <p id="declining">Declining</p>
                </div>
                <div className="graph-container">
                    <div className="canvas-container">
                        <h2>The Four Stages of <br/>Management Operating System<br/>(MOS) Maturity</h2>
                        <canvas id="moss-graph" width="550" height="450"></canvas>
                    </div>
                    <div className="icon-container">
                        <img id="flame" src={flame} alt="flame icon"/>
                        <img id="wave" src={wave} alt="wave icon"/>
                        <img src={graph} alt="graph icon"/>
                        <img src={cycle} alt="cycle icon"/>
                    </div>
                    <div className="text-container">
                        <button>Fighting<br/>Fires</button>
                        <button>Treading<br/>Water</button>
                        <button>Incrementally<br/>Improving</button>
                        <button>lskdfja;sdlkjfaskldf;ajdsf<br/>laksdjfa;lskdjfa;slkdjfalkdsjf<br/>laksdjfa;lskdjfa;slkdjfalkdsjf</button>
                        {/* <p>-Working hard but losing ground<br/>-Lack of a coherent structure in operations management<br/>-Addressing symptoms instead of root causes<br/>-Explaining away poor performance as "out of our control"</p> */}
                    </div>
                      
                </div>
            </div>
        </div>
        <div className="shadow-2xl" id="answers" >
             <p>here</p>
        </div>
    </main>
    // add link and preview image to download with the kebab nav bar
)
};

export default Home;