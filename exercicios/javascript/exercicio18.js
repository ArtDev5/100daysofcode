function despesasTotais(array){
    let despesas = 0
    for(let i of array){
        despesas+= i.preco

    }
    console.log(despesas)
}


// function despesasTotais(array){
//     let despesas = 0
//     for(let i of array){
//         for(let j in i){
//             if(j === "preco"){
//                 despesas+= i[j]
//             }
           
//         }

//     }
//     console.log(despesas)
// }

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]) // retornará 239.99
    despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) // retornará 34599.89