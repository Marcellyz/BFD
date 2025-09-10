// Arrays
let lista = ["sacola", "colher", "mesa", "geladeira"]
// adiciona no final da lista
lista.push("abacaxi");

console.log(lista);

//adiciona no inicio da lista
lista.unshift("cadeira");

// remove no final da lista
lista.pop();

console.log(lista);

//removendo no inicio da lista
lista.shift()

console.log(lista);

let ultimo = lista[lista.length - 1]
console.log(ultimo);


let numeros = [1,2,3,5];
numeros.splice(2,1);
console.log(numeros);


let palavra = ["0", "rato", "roeu", "roupa", "rei", "Roma"]

let frase = palavra.join("")
console.log(frase[0]);
