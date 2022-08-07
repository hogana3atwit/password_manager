const autofillInfo = info => {
	document.getElementById("email").value = info.user;
	document.getElementById("pass").value = info.pass;
};

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.subject === 'autofill')){
	  chrome.runtime.sendMessage({
		  from: 'content',
		  subject: 'autofill'},
		  autofillInfo
	  );
    }
	if((msg.from === 'background') && (msg.subject === 'getURL')){
		var urlInfo = {
			url: window.location.href
		};
		response(urlInfo);
	}
});
