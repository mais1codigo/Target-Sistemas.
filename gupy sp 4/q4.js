
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentual(faturamento) {

    const totalMensal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    const percentualPorEstado = {};
    for (const [estado, valor] of Object.entries(faturamento)) {
        percentualPorEstado[estado] = ((valor / totalMensal) * 100).toFixed(2);
    }

    return percentualPorEstado;
}

const percentual = calcularPercentual(faturamentoPorEstado);

console.log("Percentual de representação por estado:");
for (const [estado, percent] of Object.entries(percentual)) {
    console.log(`${estado}: ${percent}%`);
}
