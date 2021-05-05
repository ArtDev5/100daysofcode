function objetoParaArray(objeto){
    let array = []
    for(let i in objeto){
        const arrayAux = []
        arrayAux.push(i, objeto[i])
        array.push(arrayAux)
    }
    console.log(array)
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})

objetoParaArray({
    codigo: 11111,
    preco: 12000
})