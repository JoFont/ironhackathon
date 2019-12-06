import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PurchaseView = () => {
  return (
    <Jumbotron id="purchase" fluid className="py-5 mb-0 PurchaseBackground">
      <Row className="pt-5">
        <Col md={1}></Col>
        <Col>
          <h1 className="display-4 font-weight-normal">PURCHASE</h1>
        </Col>
      </Row>
      <Col>
        <Col md={3} lg={2}></Col>
        <Col md={5}>
          <h1 className="font-weight-light pl-3">Bring The Good Place to your classroom</h1>
          <Button variant="secondary">BUY THE GAME</Button>
        </Col>
      </Col>
    </Jumbotron>
  )
}

export default PurchaseView;
