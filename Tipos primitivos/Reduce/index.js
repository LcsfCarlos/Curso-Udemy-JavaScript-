const pedidos = [
    {
        id: 420,
        nome: "Luiz",
        alimento: "Sandubão de Bacon",
        bebida: "Suco de Limão",
        preco:100 
    },
    {
        id: 152,
        nome: "Naiady",
        alimento: "Sandubão de Vegano",
        bebida: "Suco de Laranja",
        preco:59,
    },
    {
        id: 33,
        nome: "Isabel",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
        preco: 33,
    },
    {
        id: 33,
        nome: "José",
        alimento: "Sandubão de Picanha",
        bebida: "Refrigerante",
        preco: 47,
    }
];

/* A ideia dele é pegar todos os valores de um array e condensa-los em um só.
*/

const balancete = pedidos.reduce((total, eLement) => {
    return total + eLement.preco;  
}, 0);

console.log(balancete);
