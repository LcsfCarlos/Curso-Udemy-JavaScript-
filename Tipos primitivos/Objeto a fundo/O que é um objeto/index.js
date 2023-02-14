let Tenis = {
    Tipo: "Tenius de corrida",
    cardaco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 35,
            altura: 40,
            profundidade: 10,

        },
    },
    marcaArrayValores: ["Nike", "Adidas", "etc"],
    marcaArrayObj: [
    {
        nome: "Nike"
    },
    {
        nome: "Adidas" 
    },
    {
        nome: "etc"
    },
    ],
        getMarcaValores: function (param) {
        return this.marcaArrayObj[param];
    },
    getMarcaArrayObj: function(param) {
            return this.marcaArrayObj[param].nome;
    },
};
console.log(Tenis)
console.log(Tenis.Tipo)
console.log(Tamanho);