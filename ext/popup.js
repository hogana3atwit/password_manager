window.onload=function(){
	document.getElementById("af-btn").addEventListener("click", autofill);
};

function autofill() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {subject: "autofill"});
	});
};

const setThreat = info => {
	if(info.threat == 0){
		document.getElementById('threat').textContent = "Status: Benign";
	}
	else if(info.threat == 1){
		document.getElementById('threat').textContent = "Status: Defacement";
	}
	else if(info.threat == 2){
		document.getElementById('threat').textContent = "Status: Phising";
	}
	else if(info.threat ==3) {
		document.getElementById('threat').textContent = "Status: Malware";
	}
};

window.addEventListener('DOMContentLoaded', () => {
	chrome.runtime.sendMessage({
		from: 'popup',
		subject: 'GetThreat'},
		setThreat
	);
});
