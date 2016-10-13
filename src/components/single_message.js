// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoJS from "crypto-js";

// Actions import
import { readMessage } from '../actions/messages';

// Shows message's data
class SingleMessage extends Component {
	componentWillMount() {
		this.props.readMessage(this.props.params.id)
	}

	render() {
		return (
			<div>
				{this.props.message.body}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.messages.message_to_read }
}

export default connect(mapStateToProps, { readMessage })(SingleMessage);
