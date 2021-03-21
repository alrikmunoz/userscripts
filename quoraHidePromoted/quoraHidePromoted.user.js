// ==UserScript==
// @name         Hide promoted answers in Quora
// @version      0.2
// @description  Hide promoted answers in Quora
// @author       alrikmunoz
// @match      https://www.quora.com/*
// @updateURL    https://github.com/alrikmunoz/userscripts/raw/master/quoraHidePromoted/quoraHidePromoted.user.js
// ==/UserScript==

var promotedAnswers = document.querySelectorAll(".promoted_answer_wrapper");

var distantParents = [];

for (var i = 0; i < promotedAnswers.length; i++) {
	distantParents[i] = promotedAnswers[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
}

console.log(promotedAnswers);
console.log(distantParents);

for (var j = 0; j < distantParents.length; j++) {
	distantParents[j].parentNode.removeChild(distantParents[j]);
}