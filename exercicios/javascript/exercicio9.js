function repetir(elemento, repetir){
    let array = []
    for(let i = 0; i < repetir; i++){
        array.push(elemento)
    }
    console.log(array)
}

repetir('código', 2)