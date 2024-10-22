import React from 'react'
import './Navbar.css';
import {toggleBar} from './Navbar.js';
import { useAuth } from '../store/auth.jsx';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  
  const {isLoggedIn}=useAuth();
  return (
    <>
    <nav className="navbar" onClick={toggleBar}>
    <div className="logo">Brand</div>
    <ul className="nav-links">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/products">Product</NavLink></li>
      {
      isLoggedIn? 
      <li><NavLink to="/logout">Log Out</NavLink></li>
      :<>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
      <li><NavLink to="/login">Log In</NavLink></li>
      </>
     }

    </ul>
  </nav>
    </>
  )
}

export default Navbar;