// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="row">
					<div className="col-md-2">
						<a href="https://twitter.com/APurhalo">My Titter</a>
					</div>
					<div className="col-md-8"></div>
					<div className="col-md-2">
						<a href="https://github.com/AlexPurhalo/kottans-ruby-2016-assignment-front-end">GitHub source</a>
					</div>
				</div>
			</div>
		);
	}
}
