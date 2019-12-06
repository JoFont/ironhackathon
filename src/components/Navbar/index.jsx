import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

class NavBar extends Component {
	render() {
		return (
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				className="justify-content-end px-4"
			>
				<Navbar.Brand href="#home">GAME NAME</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
					</Nav>
					<Nav>
						<Nav.Link href="#problem" className="px-4">PROBLEM</Nav.Link>
						<Nav.Link href="#about" className="px-4">ABOUT GAME</Nav.Link>
						<Nav.Link href="#purchase" className="px-4">PURCHASE</Nav.Link>
						<Nav.Link href="#contact" className="px-4">CONTACT</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				{/* <Nav>
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
				</Nav> */}
			</Navbar>
		);
	}
}

export default NavBar;
