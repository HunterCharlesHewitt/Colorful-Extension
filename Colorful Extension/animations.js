"use strict";
var cssTagOptions={id:"__colorful_extension__",href:chrome.extension.getURL("animations.css"),type:"text/css",rel:"stylesheet"},cssTag=document.getElementById(cssTagOptions.id);
if(cssTag)cssTag.remove();
else{var head=document.head||document.documentElement.insertBefore(document.createElement("head"),document.body);
head.appendChild(Object.assign(document.createElement("link"),cssTagOptions))}