
const faturamentoDiario = [
    150.00, 200.00, 170.00, 210.00, 250.00,
    180.00, 220.00, 190.00, 260.00, 230.00,
    240.00, 270.00, 300.00, 310.00, 280.00,
    320.00, 350.00, 340.00, 330.00, 360.00,
    370.00, 380.00, 390.00, 400.00, 410.00,
    420.00, 430.00, 440.00, 450.00, 460.00,
    470.00, 480.00, 490.00, 500.00, 510.00,
    520.00, 530.00, 540.00, 550.00, 560.00
];

function calcularFaturamento(faturamentoDiario) {
    if (faturamentoDiario.length === 0) {
        return "Lista de faturamento está vazia.";
    }
    
  
    const menorValor = Math.min(...faturamentoDiario);
    const maiorValor = Math.max(...faturamentoDiario);
    
  
    const soma = faturamentoDiario.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = soma / faturamentoDiario.length;
    
  
    const diasAcimaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;
    
    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaMedia: diasAcimaMedia
    };
}

const resultado = calcularFaturamento(faturamentoDiario);

console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log("Número de dias com faturamento acima da média mensal:", resultado.diasAcimaMedia);
