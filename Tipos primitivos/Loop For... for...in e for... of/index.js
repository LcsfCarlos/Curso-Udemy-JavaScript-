const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
    {
        nome: "Luiz",
        sobreNome: "Carlos",
    },
    {
        nome: "Nay",
        sobreNome: "Carlos",
    },
    {
        nome: "José",
        sobreNome: "Carlos",
    },
];

//For ([inicialização]; [Condição]; [Expressão final])
//for(let i = 0; i < myArrayObj.length; i++){
//console.log(myArrayObj[i].nome, myArrayObj[i].sobreNome);
//}

//For Of
//for(let item of myArray){
//    console.log(item);
//}

//For in
const obj = { nome: "Luiz", sobreNome: "Carlos"};

for (let item in obj) {
    console.log(item);
}