function somarNumeros(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }

    console.log(total)
}

somarNumeros([10, 10, 10]) // retornarĂ¡ 30
somarNumeros([15, 15, 15, 15]) // retornarĂ¡ 60