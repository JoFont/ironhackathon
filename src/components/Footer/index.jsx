import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer className="footer py-0 bg-dark">
				<a
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
				</a>
			</footer>
		);
	}
}

export default Footer;
