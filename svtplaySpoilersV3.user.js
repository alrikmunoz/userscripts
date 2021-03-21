// ==UserScript==
// @name         SVTPlay prevent spoiler v3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Alrik
// @match        https://www.svtplay.se/*
// ==/UserScript==


var splashImage = document.querySelector("#js-play_video__fullscreen-container > div > div:nth-child(1) > div > div.VideoPlayerNew__video-player__inner___1n_6u > div.VideoPlayerNew__poster___2rlaB");
var darkLargeBackgroundImage = document.querySelector("div.play_contextual-background__container img");
var video = document.querySelector("#js-play_video__fullscreen-container video.VideoPlayerNew__video-player__video___3Of3M");
var description = document.querySelector("#titel > div.play_video-page__title-element--left > p");

var volume = document.querySelector("#js-play_video__fullscreen-container > div > div:nth-child(1) > div > div.VideoPlayerNew__video-player__inner___1n_6u > div.VideoPlayerNew__ui-container___H9Cn2 > div > div.VideoPlayerNew__ui-container__right___Pfo4t > div.VideoPlayerNew__volume-control___3tsUd > div:nth-child(1) > button");
var progressBar = document.querySelector("#js-play_video__fullscreen-container > div > div:nth-child(1) > div > div.VideoPlayerNew__video-player__inner___1n_6u > div.VideoPlayerNew__ui-container___H9Cn2 > div > div.VideoPlayerNew__ui-container__top___jv4Gn > div > div.VideoPlayerNew__slider__progress-bar___39Spk > div.VideoPlayerNew__slider__progress-bar__total___3OmAt");
var volumeOnIndication = document.querySelector("#js-play_video__fullscreen-container > div > div:nth-child(1) > div > div.VideoPlayerNew__video-player__inner___1n_6u > div.VideoPlayerNew__ui-container___H9Cn2 > div > div.VideoPlayerNew__ui-container__right___Pfo4t > div.VideoPlayerNew__volume-control___3tsUd > div.VideoPlayerNew__slider___2z_63.VideoPlayerNew__slider--vertical___6xmwr");
console.log("everything loaded fine");

document.addEventListener("keydown", (e) => {

	var splashImage = document.querySelector("#js-play_video__fullscreen-container > div > div:nth-child(1) > div > div.VideoPlayerNew__video-player__inner___1n_6u > div.VideoPlayerNew__poster___2rlaB");
	var darkLargeBackgroundImage = document.querySelector("div.play_contextual-background__container img");
	var video = document.querySelector("#js-play_video__fullscreen-container video.VideoPlayerNew__video-player__video___3Of3M");
	var description = document.querySelector("#titel > div.play_video-page__title-element--left > p");

	var volume = document.querySelector("#js-play_video__fullscreen-container > div > div:nth-child(1) > div > div.VideoPlayerNew__video-player__inner___1n_6u > div.VideoPlayerNew__ui-container___H9Cn2 > div > div.VideoPlayerNew__ui-container__right___Pfo4t > div.VideoPlayerNew__volume-control___3tsUd > div:nth-child(1) > button");
	var progressBar = document.querySelector("#js-play_video__fullscreen-container > div > div:nth-child(1) > div > div.VideoPlayerNew__video-player__inner___1n_6u > div.VideoPlayerNew__ui-container___H9Cn2 > div > div.VideoPlayerNew__ui-container__top___jv4Gn > div > div.VideoPlayerNew__slider__progress-bar___39Spk > div.VideoPlayerNew__slider__progress-bar__total___3OmAt");
	var volumeOnIndication = document.querySelector("#js-play_video__fullscreen-container > div > div:nth-child(1) > div > div.VideoPlayerNew__video-player__inner___1n_6u > div.VideoPlayerNew__ui-container___H9Cn2 > div > div.VideoPlayerNew__ui-container__right___Pfo4t > div.VideoPlayerNew__volume-control___3tsUd > div.VideoPlayerNew__slider___2z_63.VideoPlayerNew__slider--vertical___6xmwr");

	if (e.keyCode === 192) { // §-key

		splashImage.style.display = "none";
		darkLargeBackgroundImage.style.display = "none";
		video.style.display = "none";
		description.style.display = "none";

		if (volumeOnIndication.getAttribute("aria-valuenow") > 0) {
			volume.click();
		}
		progressBar.click();
	}
	else if (e.keyCode === 188) { // < > -key
		video.style.display = "block";
		if (volumeOnIndication.getAttribute("aria-valuenow") == 0) {
			volume.click();
		}
	}
});