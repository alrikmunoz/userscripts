// ==UserScript==
// @name         Eurovision.tv directly to youtube video
// @version      0.2
// @description  Partial credit to jcunews. Automatically play and press the "Youtube"-button in embedded youtube videos to go and watch video on youtube website instead
// @author       alrikmunoz
// @match        https://www.youtube.com/embed?*
// @match        https://www.youtube.com/embed/*
// @match        https://www.youtube-nocookie.com/embed?*
// @match        https://www.youtube-nocookie.com/embed/*
// @require      file:///Users/alrik/Desktop/Hemma/Programmering/userscripts/youtubeEmbeddedEurovision/youtubeEmbeddedToYT.user.js
// ==/UserScript==


// triggers only once document is visible
var timer = setInterval(() => {
	if (!document.hidden) {
		console.log("Opening video!")
		play();
		clearInterval(timer);
	} else {
		console.log("Tab not in focus!");
	}
}, 100);


// opens embedded youtube videos in another tab
function play() {
	// if embedded youtube url does NOT contain query parameter "autoplay=1"
	if (!(/[?&]autoplay=1/).test(location.search)) {
		var playButton = document.querySelector(".ytp-large-play-button");
		var youtubeButton = document.querySelector("a.ytp-youtube-button.ytp-button.yt-uix-sessionlink")

		playButton.click();  // click on play button
		youtubeButton.click();  // click on "Youtube"-button in video player
	}
}