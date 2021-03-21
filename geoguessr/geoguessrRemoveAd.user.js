// ==UserScript==
// @name         Geoguessr remove bottom ad
// @version      0.2
// @description  Script to remove the ad area at the bottom of the Geoguessr viewport when playing, updates on resize too
// @author       alrikmunoz
// @match        https://www.geoguessr.com/*
// @require      file:///Users/alrik/Desktop/Hemma/Programmering/userscripts/geoguessr/geoguessrRemoveAd.user.js
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