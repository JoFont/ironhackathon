import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutView = () => {
  return (
    <Jumbotron id="about" fluid className="pt-5 mb-0 pb-0 LightGreyBg text-white">
      <Row className="pt-5">
        <Col md={5}></Col>
        <Col className="text-light">
          <h1 className="display-4 font-weight-normal text-left text-white">ABOUT <span className="font-weight-bold">THE GOOD PLACE</span></h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={7} className="text-light">
          <p className="font-weight-light pl-3">The Good Place is an social interaction simulation that explores the effects of common mysogynistic attitues in real life scenarios. The player takes the perspective of a character in a utopian world where gender stereoptyping and sexism doesn’t exist. To continue living in this beautiful world the player must choose the appropriate responses in everyday situations. The Good Place is a theoretically based intervention that aims to increase the skills, attitudes, and awareness needed to empower high school youth to help combat mysogony by challenging common gender based myths.</p>
        </Col>
      </Row>
      <Row className="no-gutters mt-5">
        <Col>
          <img className="w-100" src="/images/GameScreenshots.png" alt=""/>
        </Col>
        <Col>
          <img className="w-100" src="/images/GameScreenshots-1.png" alt=""/>
        </Col>
        <Col>
          <img className="w-100" src="/images/GameScreenshots-2.png" alt=""/>
        </Col>
      </Row>
    </Jumbotron>
  )
}

export default AboutView;
