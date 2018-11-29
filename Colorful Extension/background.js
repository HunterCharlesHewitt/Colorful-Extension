"use strict";

chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.executeScript({file:"animations.js",matchAboutBlank:!0,runAt:"document_end"})
});
