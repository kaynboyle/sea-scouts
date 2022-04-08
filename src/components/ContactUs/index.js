import React from 'react';
import gif from "../../assets/ezgif-5-888cbcb2d7.gif";
import prof1 from "../../assets/placeholder.png";
function ContactUs() {
    
    return (
        <div className="App">
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
                <div className="right-card">
                      <img src={gif} alt="cherry logo"/>
                </div>
            </div>
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
        </div>   
        
    );
  }
  
  export default ContactUs;
  