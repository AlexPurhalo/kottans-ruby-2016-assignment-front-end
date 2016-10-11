export function createMessage(message, password) {
	return function() {
		console.log(message, password);
	}
}

