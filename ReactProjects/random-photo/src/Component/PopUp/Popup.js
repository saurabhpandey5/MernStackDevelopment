import React from 'react';
import './popup.css';

const Popup = ({ handleClosePopup}) => {
  return (
    <div className="popup">
          <div className="close" onClick={handleClosePopup}>&times;</div>
          <div className='text'>This is a popup message!</div>
    </div>
    
  );
};

export default Popup;
