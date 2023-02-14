/* 
O Stritc mode elimina alguns erros silenciosos 
que passariam batidos no JavaScript e os faz emitir erros.

Além disso, essa forma corrige erros que tornam o JavaScript 
dificil de ser otimizado, então algumas vezes os códigos no modo estrito
rodam mais otimizados e velozes do que os códigos no 'modo normal'*/


(() => {
    teste = "teste";
})();

console.log (teste);