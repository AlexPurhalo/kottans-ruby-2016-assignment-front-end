// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Actions import
import { createMessage } from '../actions/messages';

// Form for new message creating
class NewMessage extends Component {
	constructor() {
		super();

		this.state = {
			password: '',
			message: '',
			onCreate: true
		};

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
		this.setState({ onCreate: !this.state.onCreate })
	}

	createMessageForm() {
		return (
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
		);
	}

	linkToCreatedMessage() {
		return (
			<div>
				<p>Message was successfully created!</p>
				<p>
					Here is your link:
					<Link to={`messages/${this.props.message.link}`}>{this.props.message.link}</Link>
				</p>
			</div>
		);
	}

	render() {
		return (
			<div>{this.state.onCreate ? this.createMessageForm() : this.linkToCreatedMessage()}</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.messages.created_message };
}

export default connect(mapStateToProps, { createMessage })(NewMessage);
