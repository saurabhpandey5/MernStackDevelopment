import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Timer = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(targetTime).getTime();
    const difference = target - now;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    return {hours, minutes};
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  },);

  return (
    <Container>
      <Row>
       
        <Col>
          <div>Hours: {timeLeft.hours}</div>
        </Col>
        <Col>
          <div>Minutes: {timeLeft.minutes}</div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Timer;
