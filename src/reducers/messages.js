import { CREATE_MESSAGE } from '../actions/types';
import { INITIAL_STATE } from './initial_state';

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_MESSAGE:
			console.log(action.payload);
			return { ...state, single_message: action.payload };
		default:
			return state;
	}
}
