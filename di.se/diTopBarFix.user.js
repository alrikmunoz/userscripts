// ==UserScript==
// @name         di.se top bar fix
// @version      0.2
// @description  Make the top bar/area of di.se more compact
// @author       alrikmunoz
// @match        https://www.di.se/*
// @updateURL    https://github.com/alrikmunoz/userscripts/raw/master/di.se/diTopBarFix.user.js
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