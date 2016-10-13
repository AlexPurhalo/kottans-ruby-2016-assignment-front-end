// Imports actions types
import { CREATE_MESSAGE, FETCH_MESSAGE } from '../actions/types';

// Imports initial state
import { INITIAL_STATE } from './initial_state';

// Transforms action's payload to state with data
export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_MESSAGE:
			return { ...state, created_message: action.payload };
		case FETCH_MESSAGE:
			return { ...state, message_to_read: action.payload };
		default:
			return state;
	}
}
