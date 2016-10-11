// Node modules import
import React, { Component } from 'react';

// Form for new message creating
export default class NewMessage extends Component {
	constructor() {
		super();

		this.state = { password: '', message: '' };

		this.onChangeMessage = this.onChangeMessage.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmitMessage = this.onSubmitMessage.bind(this);
	}

	onChangeMessage(e) {
		this.setState({ message: e.target.value });
	}

	onChangePassword(e) {
		this.setState({ password: e.target.value });
	}

	onSubmitMessage(e) {
		e.preventDefault();
		console.log({ message: this.state.message, password: this.state.password });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitMessage}>
					<label>Message</label>
					<textarea
						onChange={this.onChangeMessage}
						value={this.state.message}
						className="form-control"
						placeholder="Enter your message here"/>
					<br/>
					<label>Password</label>
					<input
						onChange={this.onChangePassword}
						value={this.state.password}
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
