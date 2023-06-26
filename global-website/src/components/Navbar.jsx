import React from 'react';
// import {GiHamburgerMenu} from 'react-icons/gi';
// import {MdOutlineRestaurantMenu} from 'react-icons/md';
// import Logo from '../assets/GlecoLogo';


const Navbar = () => {
  return (
    <nav classname="app_navbar">
      <div classNamw="navbar_logo">
        {/* <img src={Logo} alt="logo" /> */}
      </div>
      <ul className="navbar-links">
        <li className="p_opensans"><a href="#home">Home</a></li>
        <li className="p_opensans"><a href="#about">About</a></li>
        <li className="p_opensans"><a href="#Products">Products</a></li>
        <li className="p_opensans"><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;