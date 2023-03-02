window.onload = function () {
    const element = document.querySelector('button');
    if (element !== null) {
        element.addEventListener('click', function () {
            console.log('oauth')
            chrome.identity.getAuthToken({ interactive: true }, function (token) {
                console.log(token);
            });
        });
    }
};

export { }
