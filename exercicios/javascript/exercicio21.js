function menorNumero(array){
    let menor = 99999999
    for(let i of array){
        if(i < menor){
            menor = i
        }
    }
    console.log(menor)
}

menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15