// ==UserScript==
// @name         Twitch autocollect points
// @version      1.2
// @description  Clicks button to collect channel points automatically while watching a stream on Twitch
// @author       alrikmunoz
// @match        https://www.twitch.tv/*
// @require      file:///Users/alrik/Desktop/Hemma/Programmering/userscripts/twitchChannelPoints/twitchChannelPoints.user.js
// ==/UserScript==

setInterval(() => {
  var btn = document.querySelector("div.chat-input.tw-block.tw-pd-b-1.tw-pd-x-1 > div:nth-child(2) > div.chat-input__buttons-container.tw-flex.tw-justify-content-between.tw-mg-t-1 > div:nth-child(1) > div > div > div > div.tw-full-height.tw-relative.tw-z-above > div > div > div > button");
  if (btn) {
    btn.click();
  } 
}, 5000);
