import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';
// import Footer from './components/Footer';


function App () {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Products />
    {/* <Footer /> */}
  </div>
  );
}

export default App;

