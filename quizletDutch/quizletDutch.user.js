// ==UserScript==
// @name         (BROKEN) Remove Duolingo Dutch on quizlet
// @version      1.3
// @description  Removes string 'Duolingo Dutch' from Quizlet sets' titles in folder
// @author       alrikmunoz
// @match        https://quizlet.com/*
// @updateURL    https://github.com/alrikmunoz/userscripts/raw/master/quizletDutch/quizletDutch.user.js
// ==/UserScript==

setTimeout(remove, 5000);


function remove() {
  console.log("Fixed titles!");
  var titles = document.querySelectorAll("#DashboardPageTarget > div > section.DashboardLayout-main > div > div.DashboardPage-inner > div.DashboardPage-main > div > div > div > div.UIDiv.FolderPageSetsView-sets > div > div > div > div > div > div.UILinkBox-inner > div > div.UIBaseCard-header > div > div > div.UIBaseCardHeader-title > h4");
  
  titles.forEach((title) => {
    title.innerHTML = title.innerHTML.replace("Duolingo Dutch", "");
  });
}
