import React, { useEffect, useState } from "react";
import "./style.css";

import hero1 from "../../assets/images/hero-image.jpg";


//src\assets\images\cherry-slides-gif.gif
// var axios = require("axios").default;
// import { useMutation } from '@apollo/client';

const Home = () => {
  // const mouse = useMousePosition();
  // React.useEffect(() => {
  //   const canvas = document.getElementById("moss-graph");
  //   const ctx = canvas.getContext("2d");

    // var graphReady = false;
    // var graph = new Image();
    // graph.onload = loaded;

    // const circles = [
    //   { x: 90, y: 330 },
    //   { x: 220, y: 300 },
    //   { x: 350, y: 200 },
    //   { x: 460, y: 100 },
    // ];
    // const arrows = [
    //   { x1: 10, y1: 30, x2: 30, y2: 30 },
    //   { x1: 10, y1: 400, x2: 30, y2: 400 },
    //   { x: 350, y: 200 },
    //   { x: 460, y: 100 },
    // ];
    // const line1 = [
    //   { x: 90, y: 345 },
    //   { x: 90, y: 420 },
    // ];
    // const line2 = [
    //   { x: 220, y: 315 },
    //   { x: 220, y: 420 },
    // ];
    // const line3 = [
    //   { x: 350, y: 220 },
    //   { x: 350, y: 420 },
    // ];
    // const line4 = [
    //   { x: 460, y: 108 },
    //   { x: 460, y: 420 },
    // ];
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = "#191970";
    // ctx.beginPath();
    // ctx.moveTo(20, 20);
    // ctx.lineTo(20, 400);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(20, 300);
    // ctx.lineTo(520, 300);
    // // ctx.lineTo()
    // ctx.stroke();
    // function drawArrowsUp(arrows) {
    //   let height = arrows.x1 * 2 * Math.cos(Math.PI / 6);
    //   ctx.beginPath();
    //   ctx.moveTo(arrows.x1, arrows.y1);
    //   ctx.lineTo(arrows.x2, arrows.y2);
    //   ctx.lineTo(arrows.x1 * 2, arrows.y1 - height);
    //   ctx.strokeStyle = "#191970";
    //   ctx.stroke();
    //   ctx.fillStyle = "#191970";
    //   ctx.fill();
    // }
    // function drawArrowsDown(arrows) {
    //   let height = arrows.x1 * 2 * Math.cos(Math.PI / 6);
    //   ctx.beginPath();
    //   ctx.moveTo(arrows.x1, arrows.y1);
    //   ctx.lineTo(arrows.x2, arrows.y2);
    //   ctx.lineTo(arrows.x1 * 2, arrows.y1 + height);
    //   ctx.strokeStyle = "#191970";
    //   ctx.stroke();
    //   ctx.fillStyle = "#191970";
    //   ctx.fill();
    // }
    // drawArrowsUp(arrows[0]);
    // drawArrowsDown(arrows[1]);
    // function drawCircles(circles) {
    //   ctx.beginPath();
    //   ctx.lineWidth = 3;
    //   ctx.strokeStyle = "#E0FFFF";
    //   ctx.fill();
    //   ctx.fillStyle = "#FF0000";
    //   ctx.arc(circles.x, circles.y, 10, 0, 2 * Math.PI);
    //   ctx.stroke();
    //   ctx.fill();
    // }
    // drawCircles(circles[0]);
    // drawCircles(circles[1]);
    // drawCircles(circles[2]);
    // drawCircles(circles[3]);
    // function drawDottedLine(lineStart, lineEnd) {
    //   ctx.strokeStyle = "#191970";
    //   ctx.beginPath();
    //   ctx.setLineDash([5, 5]);
    //   ctx.moveTo(lineStart.x, lineStart.y);
    //   ctx.lineTo(lineEnd.x, lineEnd.y);
    //   ctx.stroke();
    //   ctx.beginPath();
    // }
    // drawDottedLine(line1[0], line1[1]);
    // drawDottedLine(line2[0], line2[1]);
    // drawDottedLine(line3[0], line3[1]);
    // drawDottedLine(line4[0], line4[1]);
    // ctx.fillRect(0, 0, 150, 100);
    // ctx.fillStyle = "red";
    // ctx.fill();
    // function drawGraph(e){
    //         x=e.clientX;

    // }
  // });
  // const ctx = canvas.getContext('2d');
  // ctx.width = window.innerWidth;
  // ctx.moveTo(0, 0);
  // ctx.lineTo(0, 100);
  // ctx.stroke();

  return (
    <main>
        <div className="shadow-2xl">
            <div className="hero-image">
                <div className="shadow-2xl" id="hero-text">
                  <div className="background">
                    <p>Optimizing Container Terminal  Performace, 
                      Tredictability & Transparancy.
                    </p>
                    <button className="button is-link is-outlined">Learn More</button>
                    <p> </p>
                    <p>Integrating People, Process & Technology 
                      by applying professional and solution serivices
                      for configuring and installing  ‘Success by Design
                    </p>
                  </div>
                </div>
             </div>
          </div>
        
    </main>
 
  ); 
};

export default Home;
