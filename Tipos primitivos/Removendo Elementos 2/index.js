/*
Slice = pega os dados dentro de um Range sem quebrar o Array
Splice = remove os dados do Array dentro de um Range
*/

let arr = [
    { nome : "Dener", tel: "(99) 9999 9999"},
    { nome : "Mozão", tel: "(99) 9999 9999"},
    { nome : "Amigo 1", tel: "(99) 9999 9999"},
    { nome : "Amigo 2", tel: "(99) 9999 9999"},
    { nome : "Amigo 3", tel: "(99) 9999 9999"},    
];

console.table(arr);

console.log(arr.splice(4, 1));

//const newArray = arr.slice(2 ,4)
//console.table(newArray);

console.table(arr);
