const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o valor da conta:', (valorConta)=> {
    const taxaGarcom = 0.1;
    const valorTotal = parseFloat(valorConta) + (parseFloat(valorConta) * taxaGarcom);
    console.log('Valor total com a taxa do garçom (10%):', valorTotal.toFixed(2));
    readline.close();
})