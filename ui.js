chrome.storage.sync.get('webhookUrl', function(data) {
    // Remember submitted webhook url
    document.querySelector('#webhook').value = data.webhookUrl;
});


document.getElementById('submit').addEventListener('click', function storeWebhookUrl() {
    // Store webhook for background.js
    const webhookUrl = document.querySelector('#webhook').value;

    chrome.storage.sync.set({webhookUrl: webhookUrl}, function() {
        // Debugging
        console.log("Webhook: " + webhookUrl);
    });
});