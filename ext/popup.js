window.onload=function(){
	document.getElementById("af-btn").addEventListener("click", autofill);
}

function autofill() {
<<<<<<< HEAD
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {subject: "autofill"});
=======
	chrome.runtime.sendMessage({
		from: 'popup',
		message: 'autofill'
>>>>>>> refs/remotes/origin/main
	});
	//chrome.runtime.sendMessage({
	//	from: 'popup',
	//	subject: 'autofill'
	//});
	//console.log("pop");
}
