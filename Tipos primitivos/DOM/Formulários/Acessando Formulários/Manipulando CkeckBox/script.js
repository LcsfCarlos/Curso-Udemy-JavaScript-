"use strict";

const form  = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

let checkdValues = [];

form.addEventListener("submit", (event) => {
   event.preventDefault();
   submit.innerHTML = checkdValues;
});

form.checkbox.forEach((eLement) => {
    eLement.addEventListener("change", (event) => {
      hasChecked(event, eLement);
      change.innerHTML = checkdValues;
    });
});

const hasChecked = (event, eLement) => {
    const { target } = event;
    
    if(target.checked){
       return checkdValues.push(eLement.value)
    }
    if (!target.checked)
    return checkdValues.map((checkdValue, index) => {
        if(eLement.value === checkdValue){
            return checkdValues.splice(index, 1)
        }
    }); 
};
