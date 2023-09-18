// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import Navbarcom from "./Navbar";
// import Menu from "./Component/Menu/Menu";
import Alert1 from "./Component/abs/Alert";
import Timer from "./Component/Timer/Timer";
function App() {
  //year-month-day - hours- min-sec
  const targetTime = new Date('2023-08-07T17:59:59').toISOString();
  return (
    
    <div className="container1">
      <Navbarcom/>
      {/* <Form inline className="mt-2 ms-5">
        <Row>
          <Col sm="6">
            <Form.Control type="text" placeholder="Search" />
          </Col>
        </Row>
      </Form> */}
      <Alert1/>
      {/* <Timer targetTime={targetTime}/> */}
      {/* <Menu/> */}
    </div>
  );
}

export default App;
