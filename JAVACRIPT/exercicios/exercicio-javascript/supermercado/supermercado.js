function calcularPreco() {
    const descricaoProduto = document.getElementById("descricaoProduto").value;
    let precoProduto = parseFloat(document.getElementById("precoProduto").value);
    const quantidadeProduto = parseInt(document.getElementById("quantidadeProduto").value);

    if(quantidadeProduto >= 3){
        precoProduto *= 0.5;
        const totalPreco = precoProduto * quantidadeProduto;
        document.getElementById("resultado").innerText = `Descrição: ${descricaoProduto}, Desconto: R$ ${precoProduto.toFixed(2)}, Quantidade: ${quantidadeProduto}, Total: R$ ${totalPreco.toFixed(2)}`;
        document.getElementById("desconto").innerHTML = "Desconto de 50% aplicado!";
    } else {
        document.getElementById("resultado").innerText = `Descrição: ${descricaoProduto}, Preço unitário: R$ ${precoProduto.toFixed(2)}, Quantidade: ${quantidadeProduto}, Total: R$ ${(precoProduto * quantidadeProduto).toFixed(2)}`;
        document.getElementById("desconto").innerHTML = "Nenhum desconto aplicado.";
    }
   
}