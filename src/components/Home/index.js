import React, { useEffect, useState } from 'react';
import "./style.css";
import { useMousePosition } from "../../assets/scripts/mousePosition.js";
import gif1 from "../../assets/images/cherry-slides-gif.gif";
import terminalStock1 from "../../assets/images/isteal.jpg";
import hero1 from "../../assets/images/hero-image.jpg";
import graphic1 from "../../assets/images/fire-graphic1.png";
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

        <div className="homeFlex1">
            <div className="1HomeFlex1">
                <img src={gif1} alt="gif slideshow"/>

            </div>
            <div className= "2HomeFlex1">
                
            </div>
        </div>
        <div className="bigger-box">

            <div className="left-box">
                <h1>Left to the left left left left box</h1>
            </div>
            <div className="flexbox">
                <div className="graphTitle">
                    <p id="improving" class>Improving</p>
                    <h2>Pace of <br/>Improvment</h2>
                    <p id="declining">Declining</p>
                </div>
                <div className="graph-container">
                    <div className="canvas-container">
                        <h2>The Four Stages of <br/>Managment Operating System<br/>(MOS) Maturity</h2>
                        <canvas id="moss-graph" width="550" height="450"></canvas>
                    </div>
                    <div className="icon-container">
                        <img src={graphic1} alt="flame graphic"/>
                        <img src={graphic1} alt="flame graphic"/>
                        <img src={graphic1} alt="flame graphic"/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>here</h1>
        </div>
    </main>
    // add link and preview image to download with the kebab nav bar
)
};

export default Home;