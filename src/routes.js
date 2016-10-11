// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import NewMessage from './components/new_message';

// Routes definition
export default (
	<Route path="/" component={App}>
		<IndexRoute component={NewMessage} />
	</Route>
);
