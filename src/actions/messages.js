// Node modules import
import axios from 'axios';
import CryptoJS from "crypto-js";

// Action types import
import { CREATE_MESSAGE } from './types';

// Url for requests manipulation
const ROOT_URL  = 'https://kottands-ruby-2016-back.herokuapp.com';

// Sends request to create a new message, then fetches data from response about created record
export function createMessage(message, password) {
	return function(dispatch) {
		let encryptedString = CryptoJS.AES.encrypt(message, password).toString();

		const data = {
			body: encryptedString
		};

		axios.post(`${ROOT_URL}/messages/`, data )
			.then(response => {
				dispatch({
					type: CREATE_MESSAGE,
					payload: response.data.message
				});
			});
	}
}

