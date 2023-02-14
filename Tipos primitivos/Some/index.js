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

/* O some pergunta se apenas 1 dos valores do Array equivale a sua condição.
*/

const existeAlimento = pedidos.some((eLement, index) =>{ 
    return eLement.alimento === "Pizza"    
} );

console.log(existeAlimento);
