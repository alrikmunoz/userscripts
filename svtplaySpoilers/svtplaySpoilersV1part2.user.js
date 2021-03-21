// ==UserScript==
// @name         SVTPlay find program v1 part2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *.svtplay.*
// ==/UserScript==

// when the window fully loads, then do...
window.addEventListener("load", function() {

    // --------------------------------------------------------------
    // clicks play button
    // --------------------------------------------------------------
    document.querySelector("button.svp_js-splash--btn-play.svp_css-splash--btn-play.svp_is--splash-text-visible.svp_splash__btn-play").click();
    // --------------------------------------------------------------

    setTimeout(function() {

        // --------------------------------------------------------------
        // clicks video progress bar (automatically at time = 0)
        // --------------------------------------------------------------
        document.querySelector("div.svp_ui-controls__timeline-buffer.svp_js-controls-timeline--buffer.svp_css-timeline--progress-seek").click();
        // --------------------------------------------------------------

    }, 2500);
});