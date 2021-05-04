function estaEntre(minimo, maximo, numero, inclusivo = false){

    if(inclusivo == false){
        if(numero > minimo && numero < maximo){
            console.log(true)
        }else{
            console.log(false)
        }
    }else{
        if(numero >= minimo && numero <= maximo){
            console.log(true)
        }else{
            console.log(false)
        }
    }
}

estaEntre(3, 150, 3)

estaEntre(3, 150, 3, true)
