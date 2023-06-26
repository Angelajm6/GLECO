import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Intro from './components/Intro';
import Footer from './components/Footer';

import '../src/App.css';

function App () {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Footer />
  </div>
  );
}

export default App;