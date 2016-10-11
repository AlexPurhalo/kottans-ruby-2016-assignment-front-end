// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { createMessage } from '../actions/messages';

// Form for new message creating
class NewMessage extends Component {
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
		this.props.createMessage(this.state.message, this.state.password);
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

export default connect(null, { createMessage })(NewMessage);
