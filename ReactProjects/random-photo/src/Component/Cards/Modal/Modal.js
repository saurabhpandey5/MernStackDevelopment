import React from "react";
import "./modal.css";
const Modal = ({ time, name, closeModal }) => {

  const startDate = new Date(); // Current date and time
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Add 1 hour to the start time

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Event Details</h2>
        <p>
          {formatDate(startDate)}
          <span> {formatTime(startDate)}</span>
          <span> - {formatTime(endDate)}</span>
          
          
        </p>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <button onClick={closeModal}>Close</button>
        <button>Join</button>
      </div>
    </div>
  );
};

export default Modal;
