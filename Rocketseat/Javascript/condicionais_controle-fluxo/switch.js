// Switch

// expression 'c'
// switch ('c') {
//     case 'a':
//         console.log('foi a')
//         // se esquecer o break, vai pro próximo case
//         break
//     case 'b':
//         console.log('foi b')
//         break
//     default:
//         console.log('nenhum dos dois')
//         break
// }

function calcular(value1, operator, value2) {

    let result

    switch(operator){
        case '+':
            result = value1 + value2
            break
        case '-':
            result = value1 - value2
            break
        case '*':
            result = value1 * value2
            break
        case '/':
            result = value1 / value2
            break
        default:
            console.log('Não implementado')
            break
    }
    return result
}

console.log(calcular(10, '*', 5))