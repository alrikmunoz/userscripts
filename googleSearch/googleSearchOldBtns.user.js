// ==UserScript==
// @name         Old Google search types buttons
// @version      0.2
// @description  Reverts the new buttons (images, videos, etc) for search results to mostly old design
// @author       alrikmunoz
// @match        https://www.google.com/search?*
// @updateURL    https://github.com/alrikmunoz/userscripts/raw/master/googleSearch/googleSearchOldBtns.user.js
// ==/UserScript==

/*
Still have to remove icons from "Fler"-button (the three dots) (the "More" button)
*/


revertToOldButtons();


window.addEventListener("load", revertToOldButtons);

// stBtns = searchTypeButtons

function revertToOldButtons() {
	//var stBtns = document.querySelectorAll("div#hdtb-msb-vis span");
	var stBtnsIcons = document.querySelectorAll("div#hdtb-msb-vis span");
	console.log(stBtnsIcons);
	stBtnsIcons.forEach(function(element) {
		element.parentNode.removeChild(element);
	});
}

/*

The following CSS was added to "www.google.com" using addon Stylebot:

#hdtb .hdtb-mitem a:hover {
    color: black;
}

*/