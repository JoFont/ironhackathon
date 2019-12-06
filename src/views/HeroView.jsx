import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroView = () => {
  return (
    <Jumbotron>
      <Col fluid className="py-5">
        <Row>
          <Col md={1}></Col>
          <Col>
            <h1 class="display-1 font-weight-normal">GAME NAME</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={5}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          </Col>
        </Row>
      </Col>
    </Jumbotron>
  )
}

export default HeroView;
