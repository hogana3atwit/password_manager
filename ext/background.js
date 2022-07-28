async function getAPI() {
	let response = await fetch("http://localhost:5000/api/passwords");
	let api = await response.json();
	let password = api[0]["sitePassword"];
	let username = api[0]["siteUsername"];
	return [password,username];
}

let password;
let username;
getAPI()
 .then(message => {
	 password = message[0];
	 username = message[1];
});

console.log(username);

chrome.runtime.onMessage.addListener((msg, sender, response) => {
	//if ((msg.from === 'popup') && (msg.subject === 'autofill')){
		//var autofill = {
		//	user: username,
		 //	pass: password
	 	//};
	  	//response(autofill);
	//	console.log(username);
	//}
	if ((msg.from === 'content') && (msg.subject === 'autofill')){
		var autofill = {
			user: username,
		 	pass: password
	 	};
	  	response(autofill);
	}
});
