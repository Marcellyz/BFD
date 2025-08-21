
function calcularPromocao() {
    const nome = document.getElementById("nomeMedicamento").value;
    const descricao = document.getElementById("descricao").value;
    const preco = parseFloat(document.getElementById("preco").value);

    const total = preco * 2;
    const desconto = total - Math.floor(total);

    const valorFinal = total - desconto;

    const resultado = document.getElementById("resultado").innerText = 
    `Na promoção, ${nome} (${descricao}) custa R$ ${valorFinal.toFixed(2)}. Você economiza R$ ${desconto.toFixed(2)}!`;
    console.log(resultado);
}