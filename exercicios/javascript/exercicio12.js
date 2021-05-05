function removerPropriedade (objeto, nomePropriedade){
    delete objeto[nomePropriedade]

    console.log(objeto)
}

removerPropriedade({a: 1, b: 2}, "a")
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao") 