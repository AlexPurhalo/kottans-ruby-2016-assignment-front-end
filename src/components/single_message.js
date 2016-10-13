// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { readMessage } from '../actions/messages';

// Shows message's data
class SingleMessage extends Component {
	componentWillMount() {
		this.props.readMessage(this.props.params.id)
	}

	render() {
		return (
			<div>Here is single message page</div>
		);
	}
}

export default connect(null, { readMessage })(SingleMessage);
