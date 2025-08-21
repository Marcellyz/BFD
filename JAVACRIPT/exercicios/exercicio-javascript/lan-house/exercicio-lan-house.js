function calcularPreco() {
    const precoPor15Min = parseFloat(document.getElementById("precoPor15Min").value);
    const tempoServico = document.getElementById("tempoMinutos").value;

    const blocosDe15Min = Math.ceil(tempoServico / 15);

    const precoTotal = blocosDe15Min * precoPor15Min;

    document.getElementById("resultado").innerText = `Preço total: R$ ${precoTotal.toFixed(2)}`;
}