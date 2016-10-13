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
			onCreate: true,
			errors: [],
			destroyOptions: false,
			visitsCount: null,
			existHours: null
		};

		this.onChangeMessage = this.onChangeMessage.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmitMessage = this.onSubmitMessage.bind(this);
		this.onChangeVisitsCount = this.onChangeVisitsCount.bind(this);
		this.onChangeExistHours = this.onChangeExistHours.bind(this);
		this.onClickDestroyOptions = this.onClickDestroyOptions.bind(this);
	}

	onChangeMessage(e) {
		this.setState({ message: e.target.value });
	}

	onChangePassword(e) {
		this.setState({ password: e.target.value });
	}

	onChangeVisitsCount(e) {
		this.setState({ visitsCount: e.target.value });
	}

	onChangeExistHours(e) {
		this.setState({ existHours: e.target.value });
	}
	onSubmitMessage(e) {
		e.preventDefault();
		let message 		=	this.state.message, 		password 	 = this.state.password,
				visitsCount = this.state.visitsCount, existHours = this.state.existHours;

		// if OR password OR message fields are empty don't allow to send data and shows an error
		if (message && password) {
			this.props.createMessage(message, password, visitsCount, existHours);
			this.setState({ onCreate: !this.state.onCreate });
		} else {
			this.setState({errors: 'can not be blank'})
		}
	}
	onClickDestroyOptions() {
		this.setState({ destroyOptions: !this.state.destroyOptions })
	}

	// JSX render
	createMessageForm() {
		return (
			<form onSubmit={this.onSubmitMessage}>
				<div className="row">
					<div className="col-md-8">
						<h3>Create your secret message</h3>
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
							onChange={this.onChangeExistHours}
							type="submit"
							className="btn btn-primary">
							Submit
						</button>
						<br/><br/>
						<span>{this.state.errors[0]}</span>
					</div>
					{this.state.destroyOptions ? this.openedDestroyOptions() : this.closedDestroyOptions()}
				</div>
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

	closedDestroyOptions() {
		return (
			<div className="col-md-4">
				<h3>Additional</h3>
				<p>Destroy after certain visit?</p>
				<img src="http://pics.livejournal.com/doink_the_clown/pic/00002y8q/s320x240" width="100px" height="120px"/>
				<p>Or after some time?</p>
				<button
					onClick={this.onClickDestroyOptions}
					type='reset'
					className="btn btn-danger">
					Destroy Options
				</button>
			</div>
		);
	}

	openedDestroyOptions() {
		return (
			<div className="col-md-4">
				<br/><br/>
				<label>Visits Limit</label>
				<input
					type="numbers"
					onChange={this.onChangeVisitsCount}
					className="form-control"
					placeholder="Visits count"/>
				<label>Exist Hours</label>
				<input
					type="numbers"
					onChange={this.onChangeExistHours}
					className="form-control"
					placeholder="Hours count"/>
				<br/>
				<button
					onClick={this.onClickDestroyOptions}
					type="reset"
					className="btn btn-primary pull-right">Close</button>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.state.onCreate ? this.createMessageForm() : this.linkToCreatedMessage()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.messages.created_message };
}

export default connect(mapStateToProps, { createMessage })(NewMessage);
