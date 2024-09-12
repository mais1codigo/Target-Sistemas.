function isFibonacci(num) {
    let a = 0, b = 1, next = 0;

    if (num === 0 || num === 1) {
        return true;
    }

    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }

    return next === num;
}

let numero = parseInt(prompt("Informe um número:"));
if (isFibonacci(numero)) {
    alert(`${numero} pertence à sequência de Fibonacci.`);
} else {
    alert(`${numero} não pertence à sequência de Fibonacci.`);
}
