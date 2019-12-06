import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class Footer extends Component {
	render() {
		return (
			<footer className="footer py-0 bg-dark">
				<Nav className="flex-column">
					<Nav.Link href="#" className="pt-3 pr-3 text-light nav-link">Link One</Nav.Link>
					<Nav.Link href="#" className="pt-3 pr-3 text-secondary nav-link">Link Two</Nav.Link>
					<Nav.Link href="#" className="pt-3 pr-3 text-secondary nav-link">Link Three</Nav.Link>
				</Nav>
				{/* <a
					className="pt-3 pr-3 text-secondary nav-link border border-primary"
					href="/about"
				>
					Link One
				</a>
				<a
					className="pt-3 pr-3 text-secondary nav-link border border-primary"
					href="/about"
				>
					Link Two
				</a>
				<a
					className="pt-3 pr-3 text-secondary nav-link border border-primary"
					href="/about"
				>
					Link Three
				</a> */}
			</footer>
		);
	}
}

export default Footer;
