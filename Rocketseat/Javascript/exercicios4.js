// 1

let weight

// 2

console.log(typeof weight)

// 3

let name, age, stars, isSubscribed

name = 'Artur'
age = 19
weight = 66.9
isSubscribed = true

console.log(`${name} tem ${age} e pesa ${weight}. ${isSubscribed}`)

// 4

let student = {}

console.log(typeof student)

student = {
    name: 'Artur',
    age: 19,
    weight: 66.9,
    isSubscribed: true
}

console.log(student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

// 5

let students = []

// 6

students[0] = student

// 7

console.log(students[0])

// 8

const john = {
    name: 'Turan',
    age: 25,
    weight: 70.5,
    isSubscribed: true
}

students[1] = john

console.log(students[1])

// 9

console.log(a)
var a = 1

// 10 

console.log(b)
let b = 1 // vai dar erro, pois com let só vai a partir do momento em q foi criado