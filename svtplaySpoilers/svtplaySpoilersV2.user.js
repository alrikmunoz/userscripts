// ==UserScript==
// @name         SVTPlay find program v2 full
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *.svtplay.*
// ==/UserScript==

var buttonClicked = false;

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 192 && !buttonClicked) {
        buttonClicked = true;
        var newItem = document.createElement("div");
        newItem.style.width = "100%";
        newItem.style.height = "calc(100% - 52px)";
        newItem.style.backgroundColor = "black";
        newItem.style.color = "white";
        newItem.style.fontSize = "40px";
        newItem.style.textAlign = "center";
        newItem.style.boxSizing = "border-box";
        newItem.style.paddingTop = "20%";
        document.body.insertBefore(newItem, document.body.childNodes[0]);
        document.querySelector("div").innerHTML = "Skriv i sökrutan det du vill ha och sen tryck på gröna knappen<br><br>TRYCK INTE RETURN";

        var newLi = document.createElement("li");
        newLi.style.width = "30px";
        newLi.style.height = "30px";
        newLi.style.backgroundColor = "#00cd00";
        newLi.style.color = "white";
        newLi.style.fontSize = "16px";
        newLi.style.textAlign = "center";
        newLi.style.boxSizing = "border-box";
        newLi.style.display = "block";
        newLi.style.position = "absolute";
        newLi.style.right = "-44px";
        newLi.style.cursor = "pointer";
        newLi.style.borderRadius = "8px";
        newLi.style.fontWeight = "bold";
        newLi.style.lineHeight = "31px";
        newLi.addEventListener("click", function() {
            console.log(document.getElementById("q").value);
            var searchQuery = document.getElementById("q").value;
            var links = document.querySelectorAll("article a");
            var searchResultLinks = document.querySelectorAll("a.play_search-suggestions__link");
            var clicked = false;

            for (var i = 0; i < links.length && !clicked; i++) {

                // if any link contains the search query, then...
                if(links[i].innerHTML.indexOf(searchQuery) > -1) {

                    // open the matching link ("a"-element)
                    window.open(links[i].href, "_self");

                    clicked = true;
                }
            }
            for (var j = 0; j < searchResultLinks.length && !clicked; j++) {

                // if any link contains the search query, then...
                if(searchResultLinks[j].innerHTML.indexOf(searchQuery) > -1) {

                    // open the matching link ("a"-element)
                    window.open(searchResultLinks[j].href, "_self");

                    clicked = true;
                }
            }
        });
        newLi.appendChild(document.createTextNode(">>"));
        document.querySelector("ul.play_navigation__list.lp_nav").appendChild(newLi);
        document.getElementById("q").focus();
        setTimeout(function(){document.getElementById("q").value = "";}, 1);

    }
});

//on load
// if button exists
// press button
// press progress bar

// when the window fully loads, then do...
window.addEventListener("load", function() {

    if (document.querySelector("button.svp_js-splash--btn-play.svp_css-splash--btn-play.svp_is--splash-text-visible.svp_splash__btn-play") != null) {
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
    }
});