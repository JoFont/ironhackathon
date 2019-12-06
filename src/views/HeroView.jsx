import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroView = () => {
	return (
		<Jumbotron fluid className="py-5 mb-0 bg-secondary hero-banner d-flex justify-content-center align-items-center">
			<h2 className="hero-banner-title-bg w-100 pb-5 pt-2">
				<Row className="pt-5">
					<Col md={1}></Col>
					<Col className="text-light">
						<h2 className="pl-5">Welcome to</h2>

						<h1 className="display-1 font-archivo">
							THE GOOD PLACE
						</h1>
					</Col>
				</Row>
				<Row>
					<Col md={4}></Col>
					<Col md={8} className="text-light">
						<h2 className="pl-5 font-weight-normal">Bridging the Gap to a Better World</h2>
					</Col>
				</Row>
			</h2>
		</Jumbotron>
	);
};

export default HeroView;
