// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-light">
					<Link to="/" className="navbar-brand">Ruby Kottans 2016</Link>
				</nav>
			</div>
		);
	}
}
