"use strict";

const h1 = document.querySelector("h1");

h1.style.fontFamily = "Arial";
h1.style.color = "red";

const p = document.querySelectorAll("p");

p.forEach((eLement)=> {
eLement.style.fontFamily = "Arial";
eLement.style.fontSize = "12px";
})