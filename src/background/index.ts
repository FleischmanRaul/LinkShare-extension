chrome.tabs.onActivated.addListener(function () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log(url);

        // don't share tab if in incognito mode
        if (tabs[0].incognito) {
            return;
        } else {
            fetch('http://127.0.0.1:8000/link/?q=' + url, {
                method: 'put',
            }).then(r => r.text()).then(result => {
                console.log(result);
            })
        }
    });
});

chrome.action.onClicked.addListener(function () {
    chrome.tabs.create({ url: 'popup.html' });
});

export { }
