"use strict"

/**
*textContent => Retorna o text COM formatações, mas sem os elementos 
*innerText => Retorna somente o texto, sem formatações ou elementos
*/

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Luiz Carlos";
p.innerText = "Luiz Carlos";