import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactView = () => {
	return (
		<Jumbotron id="contact" fluid className="py-5 mb-0 LightGreyBg">
			<Row className="pt-5">
				<Col md={7}></Col>
				<Col className="text-light">
					<h1 className="display-4 font-weight-normal">
						WHO ARE WE?
					</h1>
				</Col>
			</Row>
			<Row>
				<Col md={2}></Col>
				<Col md={6} className="text-light">
					<h2 className="font-weight-light pl-3">
						We’re a small team of good people who want to encourage
						fairness and equality in our beautiful world, because
						respect is a right that we all deserve.
					</h2>
				</Col>
			</Row>
		</Jumbotron>
	);
};

export default ContactView;
