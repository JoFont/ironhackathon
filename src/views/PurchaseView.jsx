import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutView = () => {
  return (
    <Jumbotron fluid className="py-5 mb-0">
      <Row className="pt-5">
        <Col md={1}></Col>
        <Col>
          <h1 className="display-4 font-weight-normal">PURCHASE</h1>
        </Col>
      </Row>
      <Row>
        <Col md={3} lg={2}></Col>
        <Col md={5}>
          <h1 className="font-weight-light pl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default AboutView;
