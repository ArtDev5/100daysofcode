// LET E CONST SÃO LOCAIS!!


{
    //console.log(y) antes não vai funcionar, só depois
    let y = 5
    console.log(y)
}

// console.log(y)

//fora do bloco não vai funcionar, pois ele pertence somente ao scopo local

// porém, se eu criar uma variável "let" no scopo global e em um scopo local
// alterar o seu valor, esse novo valor irá permanecer no scopo global

let x = 10
console.log(x)
{
    x = 0
}

console.log(x)

//constantes não podem ser alteradas

const k = 1

console.log(k)

{
    // tentar impirir o k não dará certo pois a constante k ainda não foi
    // criada no scopo local
    // console.log(k)
    const k = 25
    console.log(25)
}
// aqui a constante "k" com o valor 1 permaneceu, pois foi criada no scopo global
// já a constate k com o valor 25, ela só existe no scopo local
console.log(k)