/*
1- nome da função 
2- retorno 
3- não tem hoinsting
4- arguments 
*/
function nomeFunc(){
return "Luiz Carlos";
}
console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Luiz Carlos"
}
console.log(nomeFuncArrow ());

const nomeFuncArrowReturn = () => "Luiz Carlos";
console.log(nomeFuncArrowReturn());

/*Não pode ser invocado como New
*/ 

class newFunc{
    constructor(nome){
    this.nome = nome 
    }
}
const a = new newFunc ("Luiz Carlos");
console.log(a.nome);

