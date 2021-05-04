function inverso(entrada){
    if (typeof entrada == "boolean"){
        if(entrada == true){
            console.log(false)
        }else{
            console.log(true)
        }
    }else if(typeof entrada === "number"){
        if(entrada > 0){
            entrada = entrada - 2 * entrada
            console.log(entrada)
        }else {
            entrada = entrada - 2 * entrada
            console.log(entrada)
        }
    }else{
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof entrada}`)
    }
}

inverso('1')