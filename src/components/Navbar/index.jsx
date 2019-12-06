import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
	render() {
		return (
			<Navbar collapseOnSelect  bg="dark" variant="dark" className="justify-content-end px-4">
				<Nav>
					<Nav.Item className="px-4">
						<Nav.Link href="#problem">PROBLEM</Nav.Link>
					</Nav.Item>
					<Nav.Item className="px-4">
						<Nav.Link href="#about">ABOUT GAME</Nav.Link>
					</Nav.Item>
					<Nav.Item className="px-4">
						<Nav.Link href="#purchase">PURCHASE</Nav.Link>
					</Nav.Item>
					<Nav.Item className="px-4">
						<Nav.Link href="#contact">CONTACT</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		);
	}
}

export default NavBar;
