const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


function verificarDescontoCompra(valorCompra){
    if(valorCompra >= 100){
        return "Você recebeu um desconto.";
    }else {
        return "Você não recebeu um desconto.";
    }
}


readline.question("Digite o valor da compra: ", (input) => {
    const valorCompra = parseFloar(input);
    console.log(verificarDescontoCompra(valorCompra));
    readline.close();
})