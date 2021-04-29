// Separar um texto que contem espaços em um novo array, onde cada texto será uma posição do array.
// Depois trasnformar o array em texto e onde eram espaços colocar "_"

let texto = "Sorvete é muito bom"
console.log(texto)

let array = texto.split(" ")
console.log(array)

let textoWithUnderscore = array.join("_")
console.log(textoWithUnderscore)