// 1 -  Qual será a saída do código abaixo? 

let num = 42.6789
console.log(num.toFixed(2));

// log: 42.68
// Esse método é responsável por transformar o número em uma string modificando as suas casas decimais.

// 2 - Crie um objeto chamado Livro com as seguintes propriedades:

let livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899
}

console.log(livro.autor);

// log: Machado de Assis


// 3 - O que o método toUpperCase() faz em uma string? Escreva um exemplo usando a string "JavaScript é divertido" para demostrar:

let frase = "JavaScript é divertido"

console.log(frase.toUpperCase());

//log: JAVASCRIPT É DIVERTIDO


// 4 - Complete o código para que ele exiba o maior número entre os três valores abaixo usando o Math.max():

let a = 10
let b = 25
let c = 7

function mostrarValorMaior(){

    if(a > b){
        console.log(`O maior número é A: ${a}`);
    } else if (b > a){
         console.log(`O maior número é B: ${b}`);
    }else if (b > c) {
         console.log(`O maior número é C: ${c}`);
    }
}

console.log(mostrarValorMaior());

// log: O maior número é B: 25


// 5 - Escreva um código que verifique se a string "banana" começa com a letra "b" usando o método startsWith() e exiba o resultado.

let fruta = "banana"

console.log(fruta.startsWith("b"));

// log: true

// 6 - O que o método parseInt() faz? Dê exemplo em que ele seja necessário.

let num = "123"

console.log(parseInt(num));


// Ele transforma a variavel em um número inteiro

// 7 - Dado o objeto abaixo, adicione uma nova propriedade chamada disponível com o valor TRUE

let filme = {
    nome: "Matrix",
    ano: 1999,
    disponivel: true
}


// 8 - Crie um código que arredonde o número 9.7 para baixo usando um método da classe MATH

let num = 9.7

console.log(Math.floor(num));

// log: 9

// 9 - Usando métodos de string transforme a string "Olá, Mundo!" para que não haja em branco no ínicio e no fim. Qual método foi utilizado? 


let frase = " Olá, mundo";

console.log(frase.replace(" ", ""));


// 10 - Complete o código abaixo para que ele retorne a quantidade de caracteres da string:

let msg = "Aprendendo JavaScript"
let tam = 22 - msg.length

console.log(msg.length + tam);

// log: 22