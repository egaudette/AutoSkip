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
    var clickInterval = setInterval(skipAds, 5);
    var ytpAdModule;
    var miniAdd;
    var skipButton;
    var currentVideo;

    function skipAds() {
        ytpAdModule = document.querySelector('.ytp-ad-module');
        skipButton = document.querySelector('button[class*="ad-skip"]');
        miniAdd = document.querySelector('.ytp-ad-overlay-container');

        if (ytpAdModule !== null && ytpAdModule.innerHTML !== '') {
            ytpAdModule.style.display = 'none';
        }

        if (skipButton !== null) {
            skipButton.click();
            return;
        }

        currentVideo = document.querySelector('video[class*="main-video"]')
        if (currentVideo !== null && currentVideo.duration <= 30) {
            currentVideo.muted = true;
            currentVideo.play();
            currentVideo.currentTime = currentVideo.duration;
        }
    }
})();
