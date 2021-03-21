// ==UserScript==
// @name         di.se top bar fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.di.se/*
// @grant        none
// ==/UserScript==

function hideTop() {
	var siteHeader = document.querySelector("div.site-header > header > div.site-header__top");

	if (siteHeader != null) {
		siteHeader.style.display = "none";
	}

	var siteHeader2 = document.querySelector("div.js_body-wrapper > header.di_header");

	if (siteHeader2 != null) {
		siteHeader2.style.display = "none";
	}
}

hideTop();

setTimeout(hideTop, 2000);
setTimeout(hideTop, 3000);
setTimeout(hideTop, 5000);
setTimeout(hideTop, 7000);
setTimeout(hideTop, 11000);