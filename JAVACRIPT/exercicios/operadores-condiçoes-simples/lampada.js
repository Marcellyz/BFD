
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


function verificarLamapada(estado){
    if(estado === "on"){
        return "A lâmpada está acesa";
    }else if(estado === "off"){
        return "A lâmpada está apagada";
    }else {
        return "Estado inválido. Por favor, digite 'on' ou 'off'.";
    }
}


readline.question("A lâmpada está ligada? (on/off): ", (input) => {
    const estado = input.toLowerCase();
    console.log(verificarLamapada(estado));
    readline.close();
});