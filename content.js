chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.text === "selection") {
        sendResponse(window.getSelection());
      }
});