import React, { useState, useCallback } from "react";
import Cancelicon from "./Cancelicon.svg";
const Alert1 = () => {
  const [Open, setOpen] = useState(true);
  
  const handleClosePopup = useCallback(() => {
    setOpen(false);
  }, [Open]);
  return (
    <div className="alert alert-danger recording-popup d-flex" role="alert">
      <p className="flex-grow-1 recording-text text-center m-0">
        Hello Everyone Saurabh Pandey here
      </p>

      <div>
        <button
          type="button"
          className="close recording-close"
          aria-label="Close"
          onClick={handleClosePopup}
        >
          <span>
            <img src={Cancelicon} className="cancel-icon" alt="Cancel Icon" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Alert1;