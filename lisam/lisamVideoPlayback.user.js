// ==UserScript==
// @name         Lisam video playback fixer
// @version      0.1
// @description  Adds reliable keyboard-based video controls including a speed adjuster to videos hosted on Lisam
// @author       alrikmunoz
// @match        https://*.sharepoint.com/*
// @require      file:///Users/alrik/Desktop/Hemma/Programmering/userscripts/lisam/lisamVideoPlayback.user.js
// ==/UserScript==

window.addEventListener("keydown", keypress)
arrowTimeJump = 5; // seconds

function keypress(event) {
	let videoElement = document.querySelector("video")
	if (videoElement == null) return;

	let playbackRate = videoElement.playbackRate
	let currentTime = videoElement.currentTime
	switch (event.keyCode) {
		
		// speed adjusting
		case 65: // A
			playbackRate -= 0.1
			break
		case 68: // D
			playbackRate += 0.1
			break
		case 87: // W
			playbackRate = 1.0
			break

		// video controls
		case 32: // space
			videoElement.paused ? videoElement.play() : videoElement.pause()
			break;
		case 37: // left arrow
			videoElement.currentTime = currentTime - arrowTimeJump;
			break;
		case 39: // right arrow
			videoElement.currentTime = currentTime + arrowTimeJump;
			break;
	}
	console.log(`%cNew playback rate: ${playbackRate.toFixed(2)}`, "color: red; font-size: 16px;");
	videoElement.playbackRate = playbackRate
}
