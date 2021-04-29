//  Operador condicional (ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// Condition ? value1 : value2

// Exemplos:
// Café da manhã top

let pao = true
let queijo = false 

const niceBreackfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreackfast)

// Maior de 18
let age = 19

const maior = age >= 18 ? 'Maior de idade' : 'Menor de idade'

console.log(maior)