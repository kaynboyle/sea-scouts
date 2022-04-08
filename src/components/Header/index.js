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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler ms auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/contact-us">Action</a>
                <a class="dropdown-item" href="/">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">link</a>
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
