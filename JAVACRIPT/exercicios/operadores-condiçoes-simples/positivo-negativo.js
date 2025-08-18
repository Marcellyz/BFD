const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarPositivoNegativo(numero){
    if (numero > 0){
       return "O número é positivo.";
    }else if (numero < 0){
        return "O número é negativo.";
    }else {
        return "O número é zero.";
  }
}

readline.question("Digite um número: ", (input) => {
    const numero = parseFloat(input);
    console.log(verificarPositivoNegativo(numero));
    readline.close();
});