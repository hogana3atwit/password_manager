const autofillInfo = info => {
	document.getElementById("username").text = info.user;
	document.getElementById("password").text = info.pass;
};



chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});



chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    var domInfo = {
      url: window.location.href
    };
    response(domInfo);
  }
  if ((msg.from === 'popup') && (msg.subject === 'autofill')){
	  chrome.runtime.sendMessage({
		  from: 'content',
		  subject: 'autofill'},
		  autofillInfo
	  );
  }
});
