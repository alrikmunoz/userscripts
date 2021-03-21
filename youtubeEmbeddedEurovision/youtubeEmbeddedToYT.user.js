// ==UserScript==
// @name         Eurovision.tv directly to youtube video
// @version      0.2
// @description  Automatically press the "Youtube"-button in embedded youtube videos to go and watch video on youtube website instead
// @author       alrikmunoz
// @match      https://www.youtube.com/embed/*
// @updateURL    https://github.com/alrikmunoz/userscripts/raw/master/youtubeEmbeddedEurovision/youtubeEmbeddedToYT.user.js
// ==/UserScript==

document.querySelector(".ytp-large-play-button").click();
//setTimeout(function(){document.querySelector("button.ytp-play-button.ytp-button").click();}, 1000); //plays embedded video, not sure why originally added, so removed it now
document.querySelector("a.ytp-youtube-button.ytp-button.yt-uix-sessionlink").click();