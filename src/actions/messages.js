// Node modules import
import axios from 'axios';
import CryptoJS from "crypto-js"

// Url for requests manipulation
const ROOT_URL  = 'https://kottands-ruby-2016-back.herokuapp.com';

export function createMessage(message, password) {
	return function() {
		let encryptedString = CryptoJS.AES.encrypt(message, password).toString();

		const data = {
			body: encryptedString
		};

		axios.post(`${ROOT_URL}/messages/`, data )
	}
}

