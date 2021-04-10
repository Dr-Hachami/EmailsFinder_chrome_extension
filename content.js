document.querySelector("html").classList.add("color")
const list = document.querySelectorAll("div")

time = ()=>{for (var i = list.length - 1; i >= 0; i--) {
	list[i].classList.add("color")
}
}
setInterval(time, 30)
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
	const re = new RegExp('[a-zA-Z0-9\.]{4,20}@[a-zA-Z0-9]{4,10}\.[a-z]{2,3}', 'g')
	const matches = document.documentElement.innerHTML.match(re)
	const body = document.body.style.backgroundColor
	
	sendResponse({emails: matches,
		color: body
	})


	emails : matches
})