//  throw = disparar/lançar

function sayMyName(name = ''){
    if (name === ''){
        throw "O nome é necessário!"
    }

    console.log(name)
}


// try = tentar
// catch = pegar

try {
    sayMyName('Artur')
} catch (e) {
    console.log(e)
}

console.log('após o try/catch')