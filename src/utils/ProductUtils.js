export const formatPrice = (value) => {
    // Garante que o valor seja convertido para número
    const number = Number(value);

    // Verifica se o valor é válido
    if (isNaN(number)) {
        throw new Error("Valor inválido para formatação de preço.");
    }

    // Formata o valor como moeda brasileira (BRL)
    return number.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}