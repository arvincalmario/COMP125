/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Arvin Almario / 301225269
 *    Date:   june 7 2022

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    createEventListener();
}

/* close window */
function closeWin() { //book added code
    window.close();
}

/* create event listener for close button */
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    var favoritesDiv = document.getElementsByTagName("p")[1]; // aalmario

    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
        favoritesDiv.addEventListener("click", faveList, false); // aalmario
    }
    else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
        favoritesDiv.attachEvent("onclick", faveList); // aalmario
    }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;


function faveList() {
    var list = window.opener.document.getElementsByName("fav");

    if (list.length < 5) {
        window.opener.favoriteTable(photoOrderArray[2]);
    }
    else {
        alert("Max 5 is allowed, remove a favorite from the list");
    }
}