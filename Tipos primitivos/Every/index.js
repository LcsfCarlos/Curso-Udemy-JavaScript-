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

/* É bacana entender que, se você tem uma condição, ela vai tratar toda a sua Array,
* Assim podemos verificar se eles estão ok.
*/

const temRefri = pedidos.every((eLement) => {
   return eLement.bebida === "Refrigerante";
});

console.log(temRefri);