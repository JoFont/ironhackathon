import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
	render() {
		return (
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				className="justify-content-between px-4"
			>
				<Navbar.Brand href="#home">GAME LOGO</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="justify-content-end ml-auto">
						<Nav.Link href="#problem" className="px-4">
							PROBLEM
						</Nav.Link>
						<Nav.Link href="#about" className="px-4">
							ABOUT GAME
						</Nav.Link>
						<Nav.Link href="#purchase" className="px-4">
							PURCHASE
						</Nav.Link>
						<Nav.Link href="#contact" className="px-4">
							CONTACT
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;
