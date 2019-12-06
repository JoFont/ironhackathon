import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactView = () => {
  return (
    <Jumbotron fluid className="py-5 mb-0">
      <Row className="pt-5">
        <Col md={7}></Col>
        <Col>
          <h1 class="display-4 font-weight-normal">CONTACT</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={5}>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default ContactView;
