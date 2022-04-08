
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';


import BusinessSolutions from './components/BusinessSolutions';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">

        <Header />
        </header>
          <Routes>
            <Route exact path="/" element={<About/>} />
            <Route exact path="/business-solutions" element={<BusinessSolutions/>} />
            <Route exact path="/contact-us" element={<ContactUs/>} />
          </Routes>
        
        <Footer/>
      </Router>
    </div>
  
  );
}

export default App;
