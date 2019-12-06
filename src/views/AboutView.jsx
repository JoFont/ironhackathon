import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutView = () => {
  return (
    <Jumbotron id="about" fluid className="pt-5 mb-0 pb-0 bg-dark text-white">
      <Row className="pt-5">
        <Col md={5}></Col>
        <Col className="text-light">
          <h1 className="display-4 font-weight-normal text-left text-white">ABOUT <span className="font-weight-bold">THE GOOD PLACE</span></h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={7} className="text-light">
          <p className="font-weight-light pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          <br/>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </Col>
      </Row>
      <Row className="no-gutters mt-5">
        <Col>
          <img className="mw-100" src="/images/GameScreenshots.png" alt=""/>
        </Col>
        <Col>
          <img className="mw-100" src="/images/GameScreenshots-1.png" alt=""/>
        </Col>
        <Col>
          <img className="mw-100" src="/images/GameScreenshots-2.png" alt=""/>
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default AboutView;
