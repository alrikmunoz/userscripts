// ==UserScript==
// @name         Eurovision.tv directly to youtube video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.youtube.com/embed/*
// ==/UserScript==

document.querySelector(".ytp-large-play-button").click();
//setTimeout(function(){document.querySelector("button.ytp-play-button.ytp-button").click();}, 1000); //plays embedded video, not sure why originally added, so removed it now
document.querySelector("a.ytp-youtube-button.ytp-button.yt-uix-sessionlink").click();