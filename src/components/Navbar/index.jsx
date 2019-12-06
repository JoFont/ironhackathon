import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" className="justify-content-end px-4">
				<Nav>
					<Nav.Item className="px-4">
						<Nav.Link>PROBLEM</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>ABOUT GAME</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>PURCHASE</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>CONTACT</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		);
	}
}

export default NavBar;
