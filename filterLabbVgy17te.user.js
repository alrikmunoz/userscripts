// ==UserScript==
// @author       alrikmunoz
// @name         Filter 17TE on labb.vgy.se
// @description  Toggles visibilty of all students' website links and only 17TE students' links on startpage of labb.vgy.se
// @version      2.1
// @match        http://labb.vgy.se/
// @updateURL    https://raw.githubusercontent.com/alrikmunoz/userscripts/master/filterLabbVgy17te.user.js
// ==/UserScript==

var table = document.querySelector("table");

// creates button
var button = document.createElement("button");
button.appendChild(document.createTextNode("Visa endast 17TE"));
document.querySelectorAll("p")[1].appendChild(button);

// creates 17TE-only container div
var divFor17te = document.createElement("div");
divFor17te.id = "divFor17te";
table.parentNode.insertBefore(divFor17te, table);
divFor17te.style.display = "none";

// clones all 17TE names into 17TE-only container div
document.querySelectorAll("table a").forEach((link) => {
	if (link.innerHTML.indexOf("17Te") > -1) {
		var clone = link.cloneNode(true);
		clone.innerHTML = clone.innerHTML.replace(" 17Te", "");
		divFor17te.appendChild(clone);
		divFor17te.appendChild(document.createElement("br"));
	}
});

button.addEventListener("click", showOnly17TE);

// toggle visibility on button click
function showOnly17TE() {
	if (divFor17te.style.display === "block") {
		console.log("Showing full list!");
		
		divFor17te.style.display = "none";
		table.style.display = "table";
	} else {
		console.log("Showing 17TE only!");
		
		divFor17te.style.display = "block";
		table.style.display = "none";
	}
}
