chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "Send To Discord",
        id: "contextSelection",
        contexts: ["selection"],
    }); 
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "contextSelection") {
        chrome.storage.sync.get('webhookUrl', function(data) {
            const discordWebhook = data.webhookUrl;



        });

        console.log(d);


        console.log(info.selectionText);
        console.log(info.pageUrl);
        console.log(tab.title);
        console.log(info);
        /*chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
            chrome.tabs.sendMessage(tab.id, { text: 'selection'}, function (response) {
                console.log(response);
            });
        });*/
    }
});