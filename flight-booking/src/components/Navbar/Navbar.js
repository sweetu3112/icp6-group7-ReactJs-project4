import React from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navBar">
      <Link to="/" className="menuItem"> Home </Link>
      <Link to="/about" className="menuItem"> About </Link>
      <Link to="/contact" className="menuItem"> Contact </Link>
    </div>
  );
}

export default Navbar; 
