import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./nav.scss";
import { FaAutoprefixer, FaAlignJustify } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav'>
      <div className='title'>
        <FaAutoprefixer />
      </div>
      <div className='links'>
        <div className='nav-link' onClick={toggleMenu}>
          <FaAlignJustify />
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Homepage</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;

