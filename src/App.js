
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bulma/css/bulma.min.css';
// import { setContext } from '@apollo/client/link/context';

import Donations from './components/Donations';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
      
        <Header />
          <Routes>
            <Route exact path="/" element={<About/>} />
            <Route exact path="/donations" element={<Donations/>} />
          </Routes>
        </header>
        <Footer/>
      </Router>
    </div>
  
  );
}

export default App;
