import React from 'react';
// import {GiHamburgerMenu} from 'react-icons/gi';
// import {MdOutlineRestaurantMenu} from 'react-icons/md';
import Logo from '../../assets/GlecoLogo.png';
import '../Navbar/Navbar.css';


const Navbar = () => {
  return (
    <nav className="app_navbar">
      <div className="navbar_logo">
        <img src={Logo} alt="logo Gleco" />
      </div>
      <ul className="navbar_links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Products">Products</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div>
        <a href="#login" className="p_opensans">Log In / Register</a>
      </div>

    </nav>
  );
};

export default Navbar;