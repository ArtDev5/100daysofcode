function filtrarNumeros(array){
    let newArray = []
    for(let i of array){
        if(typeof i === "number"){
            newArray.push(i)
        }
    }
    console.log(newArray)
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])