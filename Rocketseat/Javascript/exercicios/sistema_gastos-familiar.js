/*
    ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a família está com
    saldo positivo ou negativo, seguido do valor do saldo

*/


let familia = {
    receitas: [5000, 2500, 25, 5],
    despesas: [3000, 1000, 50, 10]
}

function calcularTotal(array){
    let resultado = 0
    for(let valor of array){
        resultado+= valor
    }
    return resultado
}

function saldo(receitas, despesas){

    resultado = receitas - despesas

    if(resultado > 0){
        resultado_saldo = 'positivo: ' + resultado
    }else{
        resultado_saldo = 'negativo: ' + resultado
    }

    return resultado_saldo
}

total_receitas = calcularTotal(familia.receitas)
total_despesas = calcularTotal(familia.despesas)

console.log(saldo(total_receitas, total_despesas))