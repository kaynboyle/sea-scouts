import "./style.css";
import React from 'react';
import { Link } from 'react-router-dom';
// import { setContext } from '@apollo/client/link/context';


function Header() {
  // function dropDown(e) {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
  // window.onclick = function(e) {
  //   if (!e.target.matches('.dropbtn')) {
  //   var myDropdown = document.getElementById("myDropdown");
  //     if (myDropdown.classList.contains('show')) {
  //       myDropdown.classList.remove('show');
  //     }
  //   }
  // }
  let p = document.getElementById('dropdown1');
  return (
    <div className="App">
    
      <header>
        <a href="/"><img  src="https://cherry-solutions.com/wp-content/uploads/2021/04/Cherry_logo.png" width="300" height="90" alt="Cherry Solutions" id="logo" data-height-percentage="60" data-actual-width="941" data-actual-height="257.031" ></img></a>
          <Link  to="/"></Link>
        <nav class="navbar navbar-light navbar-expand-lg navbar-1 white">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Business Solutions
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/project-management">Project Management</a>
                  <a class="dropdown-item" href="/consulting">Consulting</a>
              </div>
                {/* <div class="dropdown-divider"></div> */}
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Software
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/cherry-cola">Cherry COLA</a>
                  <a class="dropdown-item" href="/cherry-pie">Cherry PIE</a>
                  <a class="dropdown-item" href="/advanced-reporting">Advanced Reporting</a>
                  <a class="dropdown-item" href="/terminal-services">Terminal Services</a>
              </div>
                {/* <div class="dropdown-divider"></div> */}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about-us">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id='contact-button' href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    </div>
      );
}

export default Header;
