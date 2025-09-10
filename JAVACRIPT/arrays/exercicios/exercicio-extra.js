let fila = ["João","Maria","Carlos","Ana"];
let i = 0;

while (i <= fila.length) {
   let removido = fila.shift();
   console.log(`${removido} saiu da fila!`);
    i++;
}