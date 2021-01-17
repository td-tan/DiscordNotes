chrome.storage.sync.get('webhookUrl', function(data) {
    document.querySelector('#webhook').value = data.webhookUrl;
});


document.getElementById('submit').addEventListener('click', function storeWebhookUrl() {
    console.log(1);
    const webhookUrl = document.querySelector('#webhook').value;

    chrome.storage.sync.set({webhookUrl: webhookUrl}, function() {
        console.log("Webhook: " + webhookUrl);
    });
});