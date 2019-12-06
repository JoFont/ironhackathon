import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProblemView = () => {
	return (
		<Carousel id="problem" className="carousel-inner">
			<Carousel.Item className="mh-100 pt-5 mt-5">
				<Carousel.Caption className="h-100">
					<Row>
						<Col>
							<h1 className="display-4 font-weight-normal text-left text-dark">
								WHY{" "}
								<span className="font-weight-bold">
									THE GOOD PLACE?
								</span>
							</h1>
						</Col>
					</Row>
					<Row className="mt-3">
						<Col md={5} lg={4}></Col>
						<Col>
							<p className="text-left text-dark">
								Pink for girls, blue for boys; dolls for girls,
								trucks for boys; girls are fragile, boys are
								strong; girls are dependent, boys are
								autonomous.
								<br />
								These are some of the basic differential
								treatment and assumed sexual characteristics of
								the sexes that begin very early in childhood and
								the beginning of the reinforcement of the double
								standard for the sexes that persists throughout
								the process of socialization.
							</p>
						</Col>
					</Row>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="mh-100 pt-5 mt-5">
				<Carousel.Caption className="h-100">
					<Row>
						<h2 className="display-5 font-weight-normal text-left text-dark mb-3">
							WHY THIS MATTERS
						</h2>
					</Row>
					<Row>
						<Col>
							<img
								className="d-block w-100"
								src="/images/EU internet use female.png"
								alt="female-graph"
							/>
						</Col>
						<Col>
							<img
								className="d-block w-100"
								src="/images/EU internet use male.png"
								alt="male-graph"
							/>
						</Col>
					</Row>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default ProblemView;
