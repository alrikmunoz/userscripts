// ==UserScript==
// @name         Avoid YT spoilers
// @version      0.2
// @description  Hide everything except actual video viewport on youtube when clicking the §-button
// @author       alrikmunoz
// @match        https://www.youtube.com/*
// @updateURL    https://github.com/alrikmunoz/userscripts/raw/master/youtube/youtubeNoSpoilers.user.js
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