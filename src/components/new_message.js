// Node modules import
import React, { Component } from 'react';

// Form for new message creating
export default class NewMessage extends Component {
	render() {
		return (
			<div>
				<form>
					<label>Message</label>
					<textarea
						className="form-control"
						placeholder="Enter your message here"/>
					<br/>
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter your password here"/>
					<br/>
					<button
						type="submit"
						className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}
