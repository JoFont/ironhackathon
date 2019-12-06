import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const PurchaseView = () => {
  return (
    <Jumbotron id="purchase" fluid className="pt-5 mb-0 pb-0 PurchaseBackground">
      <Container className="d-flex justify-content-between align-items-center">
        <div>
          <Row className="pt-5">
            <Col md={1}></Col>
            <Col>
            <h1 className="display-4 font-weight-bold text-left">PURCHASE</h1>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={2}></Col>
            <Col>
              <h1 className="font-weight-light pl-3">Bring The Good Place to your classroom</h1>
            </Col>
          </Row>
        </div>
        <div>
          <Button variant="secondary" className="btn-lg">BUY THE GAME</Button>
        </div>
      </Container>
    </Jumbotron>
  )
}

export default PurchaseView;
