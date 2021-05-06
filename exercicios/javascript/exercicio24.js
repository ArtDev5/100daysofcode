function contarCaractere(caractere, string){
    let quantidade = 0
    for(let i of string){
        if(i === caractere){
            quantidade += 1
        }
    }
    console.log(quantidade)
}

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1