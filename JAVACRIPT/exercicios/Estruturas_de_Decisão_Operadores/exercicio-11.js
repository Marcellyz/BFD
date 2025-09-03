let media = 2;

if (media >= 7) {
    console.log("Você passou!");
}else if ((media >= 5) && (media <= 6.9)){
    console.log("Você está de recuperação :( !");
}else if(media < 5){
    console.log("Você está reprovado!");
}else {
    console.log("Valor não compreendido, adicione o valor corretamente!");
}