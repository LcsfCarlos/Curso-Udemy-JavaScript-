const myArrayObj = [
    {
        nome: "Luiz",
        sobreNome: "Carlos"
    },
    {
        nome: "Nay",
        sobreNome: "Carlos"
    },
    {
        nome: "José",
        sobreNome: "Carlos"
    },
];

myArrayObj.forEach((item, index) => {
    if (item.nome === "Nay") {
        return console.log("O mozão está te esperando");
        
    }
    console.log(index, item.nome);
});