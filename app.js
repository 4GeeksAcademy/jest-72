const sum = (a, b) => {
    return a + b;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function (valueInDollar) {
    // Convertimos el valor de dolares a euros
    let valueInEuro = valueInDollar / 1.07;
    // Convertimos el valor de euros a yenes
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function (valueInYen) {
    // Convertimos el valor de yenes a euros
    let valueInEuro = valueInYen / 156.5;
    // Convertimos el valor de esos euros a libras
    let valueInPounds = valueInEuro * 0.87 
    // Retornamos el valor en pounds
    return valueInPounds;
}

console.log(sum(7, 3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

