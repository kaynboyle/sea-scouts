
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Header from './components/Header';
import ProjectMngmnt from './components/ProjectMngmnt';
import Consulting from './components/Consulting';
import CherryCola from './components/CherryCola';
import CherryPie from './components/CherryPie';
import TerminalServices from './components/TerminalServices';
import AdvancedReporting from './components/AdvancedReporting';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <head>
        <link href="/dist/output.css" rel="stylesheet"/>
      </head>
      <Router>
        <header className="App-header">

        <Header />
        </header>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/project-managment" element={<ProjectMngmnt/>} />
            <Route exact path="/consulting" element={<Consulting/>} />
            <Route exact path="/project-management" element={<ProjectMngmnt/>} />
            <Route exact path= "/cherry-cola" element={<CherryCola/>} />
            <Route exact path= "/cherry-pie" element={<CherryPie/>} />
            <Route exact path= "/advanced-reporting" element={<AdvancedReporting/>} />
            <Route exact path= "/terminal-services" element={<TerminalServices/>} />
            <Route exact path="/about-us" element={<About/>} />
            <Route exact path="/contact-us" element={<ContactUs/>} />
          </Routes>
        
        <Footer/>
      </Router>
    </div>
  
  );
}

export default App;
