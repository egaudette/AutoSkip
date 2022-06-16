// ==UserScript==
// @name         AutoSkip.
// @namespace    http://www.ethangaudette.com/AutoSkip
// @version      0.1
// @description  Mute, and Auto Skip ads
// @author       egaudette
// @source       https://github.com/egaudette/AutoSkip.git
// @match        *://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var clickInterval = setInterval(skipAds, 500);
    var skipButton;
    function skipAds() {
        skipButton = document.querySelector('.ytp-ad-skip-button');
        if (skipButton !== null) {
            skipButton.click();
        }
    }
})();