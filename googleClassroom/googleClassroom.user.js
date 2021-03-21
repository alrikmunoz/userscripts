// ==UserScript==
// @name         Google Classroom classroom names clean up
// @version      1.5
// @description  Cleans upp classroom names in Google Classroom home screen
// @author       alrikmunoz
// @match        https://classroom.google.com/u/1/h
// @match        https://classroom.google.com/u/0/h
// @require      file:///Users/alrik/Desktop/Hemma/Programmering/userscripts/googleClassroom/googleClassroom.user.js
// ==/UserScript==

setInterval(doList, 600);

check();

function check() {
	if (document.querySelectorAll("div.YVvGBb.csjh4b").length < 1) {
		setTimeout(check, 200);
	} else {
		doList();
	}
}

function doList() {
	console.log("do list function run!");
	var list = document.querySelectorAll("div.YVvGBb.csjh4b");
	
	if (list[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display === "none") {
		console.log("we're not in the correct mode!");
		return false;
	}

	console.log(list);

	list.forEach((el) => {
		replaceIfExists(el, "17te-En7", "Engelska");
		replaceIfExists(el, "17TE Svenska 3", "Svenska");
		replaceIfExists(el, "17TE Religion", "Religion");
		replaceIfExists(el, "17Te Teknik1", "Teknik");
		replaceIfExists(el, "17Te Gya", "Gymnasiearbete");
		replaceIfExists(el, "17TE Webbserverprog1", "Webbserverprog");
		replaceIfExists(el, "Mentorsklass 17Te", "Mentorsklass");
		replaceIfExists(el, "17TE Webbutveckling 2", "Webbutveckling 2");
	});

	setTimeout(() => {
		if (list[1].innerHTML !== "Engelska") {
			doList();
		}
	}, 100);
}

function replaceIfExists(el, current, replacedWith) {
	if (el.innerHTML.indexOf(current) > -1) el.innerHTML = el.innerHTML.replace(current, replacedWith);
}
