const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarMaioridade(idade){

    if (idade >= 18){
        console.log("Você é maior de idade.");
    }else {
        console.log("Você é menor de idade.");
    }
}

readline.question("Digite sua idade: ", (input) =>{
    const idade = parseInt(input);
    console.log(verificarMaioridade(idade));
    readline.close();
})