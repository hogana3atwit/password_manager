let password;
let username;
let url;
let threat;

async function getAPI() {
	let response = await fetch("http://localhost:5000/api/passwords");
	let api = await response.json();
	let password = api[0]["sitePassword"];
	let username = api[0]["siteUsername"];
	return [password,username];
}

async function getThreat(url){
	url = url.replace(/(^\w+:|^)\/\//, '');
	//if(url.slice(url.length -1) === '/'){
		url = url.slice(0, url.length -1)
	//}
	let response = await fetch("http://localhost:5001/check/"+url);
	if(response.status === 200) {
		let api = await response.json();
		let threat = api["result"];
		return threat;
	}
	let threat = 3;
	return threat;
}

getAPI()
 .then(message => {
	 password = message[0];
	 username = message[1];
});

const setURL = info => {
	url = info.url;
	getThreat(url).then(message => {threat = message;});
};

chrome.runtime.onMessage.addListener((msg, sender, response) => {
	if ((msg.from === 'popup') && (msg.subject === 'GetThreat')){
		chrome.tabs.query({active: true, currentWindow: true}, tabs => {
			chrome.tabs.sendMessage(tabs[0].id,
				{from: "background",subject: "getURL"}, setURL);
		});
		var threatInfo = {
			threat: threat
	 	};
	  	response(threatInfo);
	}
	if ((msg.from === 'content') && (msg.subject === 'autofill')){
		var autofill = {
			user: username,
		 	pass: password
	 	};
	  	response(autofill);
	}
});
