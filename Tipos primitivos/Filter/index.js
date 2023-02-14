const pedidos = [
    {
        id: 420,
        nome: "Luiz",
        alimento: "Sandubão de Bacon",
        bebida: "Suco de Limão",
    },
    {
        id: 152,
        nome: "Naiady",
        alimento: "Sandubão de Vegano",
        bebida: "Suco de Laranja",
    },
    {id: 29, nome: "Marcio", alimento: "Coxinha", bebida: "Suco de Uva" },
    {
        id: 33,
        nome: "Isabel",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
    },
    {id: 55, nome: "José", alimento: "Pizza", bebida: "Refrigerante"},
];

const filterRefri = pedidos.filter((Element, index) => {
    return Element.bebida === "Refrigerante";
});

console.log(1, pedidos);
console.log(2, filterRefri);

