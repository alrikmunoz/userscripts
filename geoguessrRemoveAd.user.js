// ==UserScript==
// @name         Geoguessr remove ad thing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://geoguessr.com/*
// @grant        none
// ==/UserScript==

var canvas;

window.addEventListener("load", function(){
	console.log("loaded");
	canvas = document.querySelector('body > section.page > section.game section.panorama div canvas');
	console.log(canvas);
	styleCanvas();
});

window.addEventListener("resize", styleCanvas);

function styleCanvas() {
	canvas.style.height = "821px";
	console.log("resized?");
}