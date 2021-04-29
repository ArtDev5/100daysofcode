/* 
    ### Celcius em fahrenheit

    Crie uma função que receba uma string em Celcius ou
    Fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5 / 9
    F = C * 9/5 + 32
*/

function grau(qual, valor){
    if (qual === 'C' || qual === 'c'){
        resultado = valor * 9/5 + 32
        resultado = 'Fahrenheit: ' + resultado
    }else if (qual === 'F' || qual === 'f'){
        resultado = (valor - 32) * 5 / 9
        resultado = 'Celsius: ' + resultado
    }else {
        resultado = 'grau ou valor digitado incorretamente.'
    }

    return resultado
}

console.log(grau('c', 10))