// ==UserScript==
// @author       alrikmunoz
// @name         Remove Duolingo Dutch on quizlet
// @description  Removes 'Duolingo Dutch' from Quizlet sets' titles in folder
// @version      1.2
// @match        https://quizlet.com/*
// @updateURL    https://raw.githubusercontent.com/alrikmunoz/userscripts/master/quizletDutch.user.js
// ==/UserScript==

setTimeout(remove, 5000);


function remove() {
  console.log("Fixed titles!");
  var titles = document.querySelectorAll("#DashboardPageTarget > div > section.DashboardLayout-main > div > div.DashboardPage-inner > div.DashboardPage-main > div > div > div > div.UIDiv.FolderPageSetsView-sets > div > div > div > div > div > div.UILinkBox-inner > div > div.UIBaseCard-header > div > div > div.UIBaseCardHeader-title > h4");
  
  titles.forEach((title) => {
    title.innerHTML = title.innerHTML.replace("Duolingo Dutch", "");
  });
}
