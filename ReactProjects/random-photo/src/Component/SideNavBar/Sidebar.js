import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import logo from './logo.jpg'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul>
       
        <li>
          <Link to="/cardList">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
