// Debugging test
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.text === "selection") {
        // To get the selected text from DOM
        sendResponse(window.getSelection());
      }
});