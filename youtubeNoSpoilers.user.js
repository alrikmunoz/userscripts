// ==UserScript==
// @name         Avoid YT spoilers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// ==/UserScript==

window.addEventListener("keydown", function(event) {
	if (event.keyCode == 192) {
		toggleSpoilerAvoidance();
	}
});

window.addEventListener("load", function() {
	// toggleSpoilerAvoidance();
});


function toggleSpoilerAvoidance() {

	var videoTitles = document.querySelectorAll("h3.style-scope.ytd-grid-video-renderer");
	var videoThumbs = document.querySelectorAll("ytd-thumbnail img.style-scope.yt-img-shadow");
console.log(videoThumbs);
console.log(videoTitles.length);
console.log(videoThumbs.length);
	for (var i = 0; i < videoTitles.length; i++) {
		videoTitles[i].childNodes[1].style.color = "white";
		videoThumbs[i].style.display = "none";
	}

	document.getElementById("info").style.visibility = "hidden";
	document.getElementById("meta").style.visibility = "hidden";
	document.getElementById("secondary").style.visibility = "hidden";
	document.querySelector("a.ytp-title-link.yt-uix-sessionlink.ytp-title-fullerscreen-link").innerHTML = "";

	/*
	if (videoTitles[0].childNodes[1].style.color !== "white") {
		console.log("it WAS black, now to white");
		for (var i = 0; i < videoTitles.length; i++) {
			videoTitles[i].childNodes[1].style.color = "white";
			videoThumbs[i].style.display = "none";
		}
	} else {
console.log("it was NOT black, so, now make black");
		for (var j = 0; j < videoTitles.length; j++) {
			videoTitles[j].childNodes[1].style.color = "black";
			videoThumbs[j].style.display = "block";
		}
	}
	*/

}