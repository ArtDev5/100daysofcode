function receberPrimeiroEUltimoElemento(array){
    let newArray = []
    newArray.push(array[0])
    let ultimo = array[array.length - 1]
    newArray.push(ultimo)
    console.log(newArray)
}

receberPrimeiroEUltimoElemento([7, 14, 'olá'])