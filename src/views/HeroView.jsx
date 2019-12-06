import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroView = () => {
	return (
		<Jumbotron id="home" fluid className="py-5 mb-0 bg-secondary hero-banner d-flex justify-content-center align-items-center">
			<div className="hero-banner-title-bg w-100 pb-5 pt-2">
				<Row className="pt-5">
					<Col md={1}></Col>
					<Col className="text-light">
						<h3 className="pl-5 font-montserrat">Welcome to</h3>
						<h1 className="display-1 font-archivo lh-75 page-title">
							THE GOOD PLACE
						</h1>
					</Col>
				</Row>
				<Row>
					<Col md={4} lg={4} xl={4}></Col>
					<Col className="text-light">
						<h1 className="pl-5 font-weight-normal font-montserrat">Bridging the Gap to a Better World</h1>
					</Col>
				</Row>
			</div>
		</Jumbotron>
	);
};

export default HeroView;
