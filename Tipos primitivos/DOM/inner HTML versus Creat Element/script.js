"use strict";

/* innerHtml => Retorna texto, COM formatações e COM elementos HTML 
 * creatElement => cria um elemento HTML
*/

const div = document.querySelector("div");
//console.log(1, div);

//div.innerHTML = `${div.innerHTML} "<strong>Esse é meu texto alterado<strong>"`;
//console.log(2, div);  

const elementUL = document.createElement("ul");
console.log(elementUL);

[1, 2, 3].forEach( (eLement) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = eLement;
    elementUL.appendChild(elementLi);
});

div.appendChild(elementUL);
