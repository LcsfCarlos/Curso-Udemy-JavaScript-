"use strict";

const btn = document.querySelector("button");
let validador = false;

const acionarAlert = ()=> {
    alert(123);
    
    validador = true;

    if(validador){
    btn.removeEventListener('click', acionarAlert);
    }
};

btn.addEventListener('click', acionarAlert);
