function calcularMedia(array){
    let soma = 0
    for(let i of array){
        soma+=i
    }
    console.log(soma/array.length)
}

calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
