import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroView = () => {
  return (
    <div>
      <Container fluid className="py-5">
        <Row className="row mx-lg-5">
          <Col>
            <h1 class="display-1">GAME NAME</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroView;
