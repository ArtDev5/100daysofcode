function funcaoDaSorte(valor){
    let sorteio = Math.floor(Math.random() * 10)
    if(valor == sorteio){
        console.log(`Parabéns! O número sorteado foi o ${sorteio}`)
    }else{
        console.log(`Que pena! O número sorteado foi o ${sorteio}`)
    }
}

funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"