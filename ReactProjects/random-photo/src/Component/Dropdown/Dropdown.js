import React from 'react';
import options from './dropdown.json';
import './dropdown.css';

const Dropdown = () => {
  const handleOptionClick = (path) => {
    // Perform navigation logic here (e.g., using React Router)
    console.log(`Navigating to ${path}`);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.path}
            onClick={() => handleOptionClick(option.path)}
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
