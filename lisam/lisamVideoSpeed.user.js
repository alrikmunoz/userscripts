// ==UserScript==
// @name         Lisam video playback speed adjuster
// @version      0.1
// @description  Press D and A to speed up and slow down Lisam videos, respectively. Press W to set playback rate to default value of 1.
// @author       alrikmunoz
// @match        https://*.sharepoint.com/*
// @require      file:///Users/alrik/Desktop/Hemma/Programmering/userscripts/lisam/lisamVideoSpeed.user.js
// ==/UserScript==

window.addEventListener("keydown", keypress)

function keypress(event) {
	if (document.querySelector("video") == null) return;

	let playbackRate = document.querySelector("video").playbackRate
	switch (event.keyCode) {
		case 65: // A
			playbackRate -= 0.1
			break
		case 68: // D
			playbackRate += 0.1
			break
		case 87: // W
			playbackRate = 1.0
			break
	}
	console.log(`%cNew playback rate: ${playbackRate.toFixed(2)}`, "color: red; font-size: 16px;");
	document.querySelector("video").playbackRate = playbackRate
}
