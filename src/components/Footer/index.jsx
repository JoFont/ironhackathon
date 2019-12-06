import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class Footer extends Component {
	render() {
		return (
			<footer className="footer py-2 bg-dark">
				<Nav className="flex-column">
					<Nav.Link
						href="#"
						className="py-2 pl-4 text-secondary nav-link"
					>
						Link One
					</Nav.Link>
					<Nav.Link
						href="#"
						className="py-2 pl-4 text-secondary nav-link"
					>
						Link Two
					</Nav.Link>
					<Nav.Link
						href="#"
						className="py-2 pl-4 text-secondary nav-link"
					>
						Link Three
					</Nav.Link>
				</Nav>
			</footer>
		);
	}
}

export default Footer;
