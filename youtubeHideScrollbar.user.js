// ==UserScript==
// @name         Prevent scrollbar click in fullscreen YT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.youtube.com/*
// ==/UserScript==

var styleSheet = document.createElement("style");

styleSheet.type = "text/css";
styleSheet.innerText = "::-webkit-scrollbar {width: 0px;}";

document.head.appendChild(styleSheet);