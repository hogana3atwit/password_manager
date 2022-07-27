//let response = fetch("http://localhost:5000/api/passwords");
//let passwords = response.json();

//document.getElementById('da').textContent = passwords;


const setContentDOMInfo = info => {
	console.log(info);
	document.getElementById('url').textContent = info.url;
};

const setBackgroundDOMInfo = info => {
	console.log(info);
	document.getElementById('da').textContent = info.da;
};

window.addEventListener('DOMContentLoaded', () => {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, tabs => {
		chrome.tabs.sendMessage(
			tabs[0].id,
			{from: 'popup', subject:'DOMInfo'}, setContentDOMInfo);
	});
	chrome.runtime.sendMessage({
		from: 'popup',
		subject:'BackgroundDomInfo'},
		setBackgroundDOMInfo
	);
});

function autofill() {
	chrome.runtime.sendMessage({
		from: 'popup',
		message: 'autofill;
	});
}
