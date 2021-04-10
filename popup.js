document.addEventListener("DOMContentLoaded", ()=>{


	document.querySelector("button").addEventListener("click", onclick)
	// const container =document.querySelector(".container")
	onclick = ()=>{
		chrome.tabs.query({currentWindow: true, active:true},
			tabs =>{
			chrome.tabs.sendMessage(tabs[0].id, "sent", setEmails)
				}
			)
	}
	let clicked = false

	if (!clicked){
				clicked = true
		
	setEmails = (res)=>{
		chrome.tabs.insertCSS(null, {file : "./popup.css"})
		if (res.emails){


				uniq = [...new Set(res.emails)];

		for (var i = uniq.length - 1; i >= 0; i--) {
				let div = document.createElement("div")
				div.textContent = `Email Number ${uniq.length-i} ${uniq[i]}`
				div.classList.add("email")
				document.body.appendChild(div)
			}
	}else {
				let div = document.createElement("div")
				div.textContent = "Didn't find any email"
				div.classList.add("email")
				document.body.appendChild(div)

			}	
}}




})