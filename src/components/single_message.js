// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoJS from "crypto-js";

// Actions import
import { readMessage } from '../actions/messages';

// Shows message's data
class SingleMessage extends Component {
	constructor() {
		super();

		this.state = { password: '', showPassword: false, error: false };

		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
	}

	componentWillMount() {
		this.props.readMessage(this.props.params.id)
	}

	handleChangePassword(e) {
		this.setState({ password: e.target.value });
	}

	handleSubmitPassword(e) {
		e.preventDefault();
		let decryptedMessage = this.decryptMessage(this.props.message.body, this.state.password);

		if (decryptedMessage.length > 0) {
			this.setState({ showPassword: !this.state.showPassword });
			this.setState({ error: false })
		} else {
			this.setState({ error: true })
		}

	}

	decryptMessage(encryptedString, password) {
		return CryptoJS.AES.decrypt(encryptedString, password).toString(CryptoJS.enc.Utf8);
	}

	messageRender() {
		return <div>message: {this.decryptMessage(this.props.message.body, this.state.password)}</div>;
	}

	passwordFormRender() {
		return (
			<form onSubmit={this.handleSubmitPassword}>
				<label>Password</label>
				<input onChange={this.handleChangePassword}
					type="password"
					className="form-control"
					placeholder="Enter your password here"/>
				<button
					type="submit"
					className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}

	render() {
		return (
			<div>
				{this.state.showPassword ? this.messageRender() : this.passwordFormRender() }
				{this.state.error ? (<span>Wrong Password</span>) : null}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.messages.message_to_read }
}

export default connect(mapStateToProps, { readMessage })(SingleMessage);
