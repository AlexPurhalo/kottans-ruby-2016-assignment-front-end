import CryptoJS from "crypto-js"

export function createMessage(message, password) {
	return function() {
		let encryptedString = CryptoJS.AES.encrypt(message, password).toString();
		console.log(`submitted message: ${message}`);
		console.log(`submitted password: ${password}`);
		console.log(`encrypted message with password: ${encryptedString}`);
	}
}

