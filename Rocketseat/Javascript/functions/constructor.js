/* 
    Function() constuctror

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const artur = new Person('Artur')
const mayk = new Person('Mayk')

console.log(artur)
console.log(mayk.walk())