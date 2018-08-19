// ==UserScript==
// @name           Gmail Fixed Font
// @namespace      https://www.indelible.org/
// @description    Fixed-font message bodies for Gmail
// @author         Jon Parise, James Tunnicliffe
// @version        1.4
// @include        http://mail.google.com/*
// @include        https://mail.google.com/*
// @include        http://*.mail.google.com/*
// @include        https://*.mail.google.com/*
// @grant          GM_addStyle
// ==/UserScript==

// Plain-text Message Body
var css = ".ii, .Ak { font: small monospace !important; }";
// Compose Interface
css += ".editable { font: small monospace !important; }";

if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node);
    }
}

