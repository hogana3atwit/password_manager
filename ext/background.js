async function getAPIpass() {
	let resp;
	let response = await fetch("http://localhost:5000/api/passwords");
	let passwords = await response.json();
	let message = passwords[0]["sitePassword"];
	return message;
}

let val;
getAPIpass()
 .then(message => {
	 val = message;
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    chrome.pageAction.show(sender.tab.id);
  }
  if ((msg.from === 'popup') && (msg.subject === 'BackgroundDomInfo')) {
	  var domInfo = {
		  da: val
	  };
	  response(domInfo);
  }
});
