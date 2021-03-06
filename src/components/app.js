// Node modules import
import React, { Component } from 'react';
import s from '../../styles/main.scss';

// Components import
import Header from './header';
import Footer from './footer';

// Layout component
export default class App extends Component {
	render() {
		return (
			<div className="full-container">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}
