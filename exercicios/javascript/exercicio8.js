function multiplicar(valor1, valor2){
    if(valor1 < 0 || valor2 < 0){
        console.log('Somente números inteiros não negativos.')
        return 0;
    }

    let total = 0
    for(let i = 0; i < valor1; i++){
        total += valor2
    }
    console.log(total)
}

multiplicar(3, 10)