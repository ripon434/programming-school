import './Header.css';
import React from 'react';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';



const Header = () => {
  return (
      



    <div className="container">
      <h1>programming school</h1>
      <nav className="navbar ">
      <Link className="home" to="/home">Home</Link>
      <Link className="home" to="/about">About</Link>
      <Link　className="home" to="/course">Course</Link>
      <Link className="home" to="/details">Details</Link>
      <Link　className="home" to="/contact">Contact</Link>
      <Link className="home" to="/service">Service</Link>
      </nav>
  
    </div>
    );
};

export default Header;