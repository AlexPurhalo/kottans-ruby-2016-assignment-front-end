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

		const errors = [], 																				// stocks the strings with error's text to array
					regExpInt = /^\d+$/,	regExpFloat = /^-?\d*(\.\d+)?$/; 						 // holds regular expression


		// if validation wasn't passed pushes error string to array
		if (!message)																	errors.push("message can't be blank");
		if (!password) 																errors.push("password can't be blank");

		// if visits count param is present parses it to integer if it passed through validation
		if (visitsCount) {
			!regExpInt.test(visitsCount) ? errors.push('only numbers for visits limit field') : parseInt(visitsCount);
		}

		// if exist hours param is present and has a valid data, parses to float type
		if (existHours) {
			!regExpFloat.test(existHours) ? errors.push('only numbers for exist hours field') : parseFloat(existHours);
		}

		// if doesn't have any errors in errors array sends post request to create a new message
		if (errors.length < 1) {
			this.props.createMessage(message, password, visitsCount, existHours);
			this.setState({ onCreate: !this.state.onCreate });
		} else {
			this.setState({errors: errors}); // if errors array is not empty changes state of global errors variable
		}																																// passing there strings with errors texts
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
						<ul>
							{this.state.errors.map(error => {
								return <li key={error}>{error}</li>;
							})}
						</ul>
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
					placeholder="0.016 ~ one minute"/>
				<br/>
				<button
					onClick={this.onClickDestroyOptions}
					type="reset"
					className="btn btn-primary pull-right">Close</button>
			</div>
		);
	}

	banner() {
		return (
			<div className="banner-container">
				<div className="banner">
					<h1 className="banner-title">
						<p>Kottans Ruby 2016</p>
						<p>Slef-Destruction</p>
					</h1>
				</div>
			</div>
		);
	}
	render() {
		return (
			<div>
				{this.banner()}
				<div className="container">
					{this.state.onCreate ? this.createMessageForm() : this.linkToCreatedMessage()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.messages.created_message };
}

export default connect(mapStateToProps, { createMessage })(NewMessage);
