import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
	render() {
		return (
			<Navbar
				fixed="top"
				collapseOnSelect
				expand="lg"
				// bg="dark"
				variant="dark"
				className="justify-content-between px-4 DarkGreyBg"
			>
				<Navbar.Brand href="#home">{/* <img src="/images/download.png" alt=""/> */} </Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="justify-content-end ml-auto">
						<Nav.Link href="#problem" className="pr-4">
							Why The Good Place?
						</Nav.Link>
						<Nav.Link href="#about" className="pr-4">
							About The Good Place
						</Nav.Link>
						<Nav.Link href="#purchase" className="pr-4">
							Purchase the game
						</Nav.Link>
						<Nav.Link href="#contact" className="pr-4">
							Who are we?
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;
