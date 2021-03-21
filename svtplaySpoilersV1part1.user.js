// ==UserScript==
// @name         SVTPlay find program v1 part1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.svtplay.se/
// ==/UserScript==



// when the window fully loads, then do...
window.addEventListener("load", function() {

	var searchQuery = prompt("Vad letar du efter?");
	var links = document.querySelectorAll("article a");
    var clicked = false;

    for (var i = 0; i < links.length && !clicked; i++) {

        // if any link contains the search query, then...
    	if(links[i].innerHTML.indexOf(searchQuery) > -1) {

            // open the matching link ("a"-element)
            window.open(links[i].href, "_self");

            clicked = true;
        }
    }
});