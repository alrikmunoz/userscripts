// ==UserScript==
// @name         Prevent scrollbar click in fullscreen YT
// @version      0.2
// @description  Hide scrollbar on youtube in order to prevent accidentally clicking it when scrolling down and clicking while in fullscreen
// @author       alrikmunoz
// @match        https://www.youtube.com/*
// @updateURL    https://github.com/alrikmunoz/userscripts/raw/master/youtube/youtubeHideScrollbar.user.js
// ==/UserScript==

var styleSheet = document.createElement("style");

styleSheet.type = "text/css";
styleSheet.innerText = "::-webkit-scrollbar {width: 0px;}";

document.head.appendChild(styleSheet);