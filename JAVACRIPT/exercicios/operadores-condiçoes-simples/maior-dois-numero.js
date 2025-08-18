const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


function verificarMaiorDoisNumero(num1, num2){
    if (num1 > num2){
        return `O maior número é ${num1}.`;
    }else if (num2 > num1){
        return `O maior número é ${num2}.`;
    }else {
        return "Os número são iguais.";
    }
}

readline.question("Digite o primeiro número: ", (input1) => {
    readline.question("Digite o segundo número: ", (input2) => {
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);
        console.log(verificarMaiorDoisNumero(num1, num2));
        readline.close();
    })
});