import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BsRecordCircleFill } from "react-icons/bs";
import "./recording.css";
import Popup from "../PopUp/Popup";
const Recording = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleRecordingClick = () => {
    setIsRecording(true);
    setShowPopup(true);
  };
  const stopRecording = () => {
    setIsRecording(false);
    setShowPopup(false);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="screen-recorder">
      {!isRecording ? (
        <Button variant="primary" onClick={handleRecordingClick}>
          <BsRecordCircleFill className="mr-2" /> Start Recording
        </Button>
      ) : (
        <Button variant="danger" onClick={stopRecording}>
          <BsRecordCircleFill className="mr-3" /> Stop Recording
        </Button>
      )}
      {showPopup && <Popup handleClosePopup={handleClosePopup} />}
    </div>
  );
};

export default Recording;
