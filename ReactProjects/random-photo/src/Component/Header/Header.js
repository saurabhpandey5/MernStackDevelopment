import React from 'react';
import './header.css'
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      {/* <img src="/path/to/logo.png" alt="Logo" className="logo" /> */}
    </header>
  );
}

export default Header;
