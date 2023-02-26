chrome.tabs.onActivated.addListener(function () {
    // console.log("service")
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log(url);

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

export { }
