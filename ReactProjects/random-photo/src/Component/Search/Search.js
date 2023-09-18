import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./search.css";


const Search = () => {
  return (
    <Form inline>
      <Row>
        <Col xs="auto" lg="6">
          <Form.Control type="text" placeholder="search..." />
        </Col>
      </Row>
    </Form>
  );
};
export default Search;
