function buscarPalavrasSemelhantes(palavra, array){
    newArray = []
    for(let i of array){
        if(i.includes(palavra)){
            newArray.push(i)
        }
    }

    console.log(newArray)
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []