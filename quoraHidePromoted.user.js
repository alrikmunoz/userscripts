// ==UserScript==
// @name         Hide promoted answers in Quora
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.quora.com/*
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