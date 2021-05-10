function segundoMaior(array){
    let maior = 0
    let segundo = 0
    
    for(let i of array){
        if(i > maior){
            maior = i
        }
    }

    array.splice(array.indexOf(maior), 1)

    for(let i of array){
        if(i > segundo){
            segundo = i
        }
    }

    console.log(segundo)
    
}

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
