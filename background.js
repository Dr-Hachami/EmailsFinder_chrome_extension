window.emailsList = {}

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
window.emailsList[request.url] = request.emails
})


chrome.browserAction.onClicked.addListener(tabs=>{
	chrome.tabs.create({url:"popup.html"})
})