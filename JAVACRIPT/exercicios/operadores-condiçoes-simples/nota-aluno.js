const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarMediaAluno(num1, num2) {
  const media = (num1 + num2) / 2;

  if (media >= 7 && media <= 10) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "Recuperação";
  } else if (media >= 0 && media < 5) {
    return "Reprovado";
  } else {
    return "Você digitou uma nota inválida.";
  }
}

readline.question("Digite primeira nota 0 a 10: ", (input) => {
  readline.question("Digite segunda nota de 0 a 10: ", (input2) => {
    const num1 = parseFloat(input);
    const num2 = parseFloat(input2);
    console.log(verificarMediaAluno(num1, num2));

    readline.close();
  });
});
