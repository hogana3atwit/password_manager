chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    var domInfo = {
      url: window.location.href
    };
    response(domInfo);
  }
});
