const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularTemperatura(temp){
    if(temp >= 15) {
        return "Está aquente";
    }else {
        return "Está frio";
    }
}


readline.question("Digite a temperatura: ", (input) => {
    const temp = parseFloat(input);
    console.log(calcularTemperatura(temp));
    readline.close();
})