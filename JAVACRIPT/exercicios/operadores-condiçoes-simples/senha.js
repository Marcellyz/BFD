const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


function verificarSenha(senha) {
    const senhaCorreta = 1234;

    if (senha === senhaCorreta){
        return "Acesso Permitido.";
    }else {
        return "Acesso Negado.Digite a senha novamente.";
    }
}


readline.question("Digite a senha: ", (input) => {
    const senha = parseInt(input);
    console.log(verificarSenha(senha));
    readline.close();
});