import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" className="justify-content-end px-4">
				<Nav>
					<Nav.Item className="px-4">
						<Nav.Link href="#">PROBLEM</Nav.Link>
					</Nav.Item>
					<Nav.Item className="px-4">
						<Nav.Link href="#">ABOUT GAME</Nav.Link>
					</Nav.Item>
					<Nav.Item className="px-4">
						<Nav.Link href="#">PURCHASE</Nav.Link>
					</Nav.Item>
					<Nav.Item className="px-4">
						<Nav.Link href="#">CONTACT</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		);
	}
}

export default NavBar;
