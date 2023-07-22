import { Button, Card } from "react-bootstrap";
import "./tiles.scss";



const DashboardTiles= ({
  heading,
  subheading,
  onClick,
}) => {
  return (
    <Card className="custom-card">
      <Card.Body className="no-gutters">
        <Card.Title>{heading}</Card.Title>
        <Card.Subtitle className="mb-3">{subheading}</Card.Subtitle>
        <div>
          <Button className="button" >Start</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashboardTiles;