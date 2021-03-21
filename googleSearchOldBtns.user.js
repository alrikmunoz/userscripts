// ==UserScript==
// @name         Old Google search types buttons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reverts the new buttons (images, videos, etc) for search results to mostyly old design.
// @author       You
// @match        https://www.google.com/search?*
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