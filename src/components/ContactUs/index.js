import React from 'react';
import { useEffect, useState } from "react";
import { useMousePosition } from "../../assets/scripts/mousePosition.js";
import "./style.css";
function ContactUs() {
    const mouse = useMousePosition();
    React.useEffect(() => {
        const cvs = document.querySelector('canvas');
        const c = cvs.getContext('2d');
        cvs.width = window.innerWidth;
        

        window.addEventListener('resize', function () {
        cvs.width = window.innerWidth;
        });
        window.addEventListener('mousemove', function (e) {
            mouse.x = e.x;
            mouse.y = e.y;
          });
        class Line {
            constructor(x, y, offset) {
                this.x = x;
                this.y = y;
                this.offset = offset;
                this.radians = 0;
                this.velocity = 0.01;
        }
        draw = () => {
            c.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            c.fillStyle = 'rgba(255, 255, 255, 0.3)';
        const drawLinePath = (width = 6, color) => {
            c.beginPath();
            c.moveTo(this.x - (width / 2), this.y + (width / 2));
            c.lineTo(this.x - (width / 2) + 300, this.y - (width / 2) - 1000);
            c.lineTo(this.x + (width / 2) + 300, this.y - (width / 2) - 1000);
            c.lineTo(this.x + (width / 2), this.y - (width / 2));
            c.closePath();
            if (c.isPointInPath(mouse.x, mouse.y) && color) {
                c.strokeStyle = color;
            };
        };
        drawLinePath(150, '#baf2ef');
        drawLinePath(50, '#dcf3ff');

        c.beginPath();
        c.arc(this.x, this.y, 1, 0, Math.PI * 2, false);
        c.fill();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x + 300, this.y - 1000);
        c.stroke();
        c.closePath();
    
        this.update();
      }
    
      update = () => {
        this.radians += this.velocity;
        this.y = this.y + Math.cos(this.radians + this.offset);
      }
    }
    
    const lineArray = [];
    
    for (let i = 0; i < 100; i++) {
    
      const start = { x: -250, y: 1000 };
      const random = Math.random() - 0.5;
      const unit = 25;
    
      lineArray.push(
        new Line(
          start.x + ((unit + random) * i),
          start.y + (i + random) * -3 + Math.sin(i) * unit,
          0.1 + (1 * i)
        )
      );
    };
    
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, 1500);
      lineArray.forEach(line => {
        line.draw();
      })
    };
    
    animate();
    


      }, []);
    return (
        <div className="App">
            <canvas id="myCanvas" height="1000" ></canvas>
            <div className="flex1">
                <div class="card">
                <div class="card-body">
                <section class="mb-4">

          
                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div class="row">

                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                <div class="row">

                                
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control"/>
                                            <label for="name" class="">Your name</label>
                                        </div>
                                    </div>
                                    


                                    

                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control"/>
                                            <label for="email" class="">Your email</label>
                                        </div>
                                    </div>
                                    


                                </div>
                                

                                                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control"/>
                                            <label for="subject" class="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                

                                                                <div class="row">

                                    

                                    <div class="col-md-12">

                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>

                                    </div>
                                </div>
                                
                                            </form>

                            <div class="text-center text-md-left">
                                <a id="contact-submit" class="btn btn-outline-danger" onclick="document.getElementById('contact-form').submit();">Send</a>
                            </div>
                            <div class="status"></div>
                        </div>
                        


                        

                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Where the office is, USA</p>
                                </li>

                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@mdbootstrap.com</p>
                                </li>
                            </ul>
                        </div>
                  
                </div>

                </section>
                </div>
        
        
        
        
                </div>
                {/* <div className="right-card">
                      <img src={gif} alt="cherry logo"/>
                </div> */}
            </div>
            <div id="page-extension"></div>
        </div>   
        
    );
  }
  
  export default ContactUs;
  