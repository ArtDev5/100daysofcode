// for...in

let person = {
    name: 'Artur',
    age: 19,
    weight: 67.5
}

for(let value in person){
    console.log(value + ': ' + person[value])

}