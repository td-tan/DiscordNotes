chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "Send To Discord",
        id: "contextSelection",
        contexts: ["selection"],
    }); 
    chrome.contextMenus.create({
        title: "Send To Discord",
        id: "contextImage",
        contexts: ["image"],
    }); 
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "contextSelection") {
        chrome.storage.sync.get('webhookUrl', function(data) {
            const discordWebhook = data.webhookUrl;

            sendTextToDiscord(discordWebhook, info.selectionText, tab.title, info.pageUrl);

        });


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
    if(info.menuItemId === "contextImage") {
        chrome.storage.sync.get('webhookUrl', function(data) {
            const discordWebhook = data.webhookUrl;
            console.log(info);
            sendImageToDiscord(discordWebhook, tab.title, info.pageUrl, info.srcUrl);

        });

    }
});

function sendTextToDiscord(webhookUrl, message, title, pageUrl) {
    let data = {
        username: 'Note',
        avatar_url: '',
        content: "```" + message + "```",
        embeds: [
            {
                title: title,
                url: pageUrl
            }
        ]
    };

    fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

}

function sendImageToDiscord(webhookUrl, title, pageUrl, srcUrl) {
    let data = {
        username: 'Note',
        avatar_url: '',
        embeds: [
            {
                title: title,
                url: pageUrl,
                image: {
                    url: srcUrl
                }
            }
        ]
    };

    fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}