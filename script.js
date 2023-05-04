const myLink = document.getElementById('linkToGoogle');
myLink.addEventListener("click", getProtocol)
function getProtocol(event) {
    if ((event.target.href.indexOf('https:') === -1)){
        event.preventDefault();
        event.target.href = 'https:\\www.google.com/'
        this.click();
        console.log(event.target.href);
    }
}

const myLink1 = document.getElementById('linkToYoutube');
myLink1.addEventListener("click", getProtocol1)
function getProtocol1(event) {
    if ((event.target.href.indexOf('https:') === -1)){
        event.preventDefault();
        event.target.href = 'https:\\www.youtube.com/'
        this.click();
        console.log(event.target.href);
    }
}