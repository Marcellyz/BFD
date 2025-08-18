const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarPositivoNegativo(numero){
    if (numero % 2 === 0){
        return "O número é positivo.";
    }else {
        return "O número é negativo.";
    }
}


readline.question("Digite um número: ", (input) => {
    const numero = parseInt(input);
    console.log(verificarPositivoNegativo(numero));
    readline.close();
});