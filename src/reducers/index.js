// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import messagesReducer from './messages';

// State holding in combine reducers
const rootReducer = combineReducers({
	messages: messagesReducer
});

export default rootReducer;
