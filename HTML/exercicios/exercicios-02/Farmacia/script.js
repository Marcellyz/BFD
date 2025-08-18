// Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total.
//elabore um programa que leia descrição e preço de um medicamento. informe o valor do produto na promoção.

function calcularPrecoPromocional() {
    const descricao = prompt("Digite a descrição do medicamento:");
    const preco = parseFloat(prompt("Digite o preço do medicamento:"));

    if (isNaN(preco) || preco < 0) {
        console.log("Preço inválido. Por favor, insira um valor numérico positivo.");
        return;
    }

    const total = preco * 2; // Preço total para duas unidades
    const centavos = total % 1; // Obtém os centavos do total
    const precoPromocional = total - centavos; // Desconto dos centavos

    console.log(`Descrição: ${descricao}`);
    console.log(`Preço promocional para duas unidades: R$ ${precoPromocional.toFixed(2)}`);
}