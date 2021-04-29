/* 
    ### Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        a) Contar o número de categorias e o número de livros em cada categoria
        b) Contar o número de autores
        c) Mostrar livros do autor Augusto Cury
        d) Transformar a função acima em uma função que irá recebber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: "Os segredos da mente milinária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

console.log()

// A

let categorias = 0
categorias = booksByCategory.length

console.log(`Número de categorias: ${categorias}`)

let i = 0
for(let j of booksByCategory){
    ++i
    console.log('Livros da categoria "' + j.category +'": ' + j.books.length)
}

console.log()

// B

function contarAutor(){

    let autores = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(autores.indexOf(book.author) == -1){
                autores.push(book.author)
            }
        }
    
    }
    console.log(`Número de autores: ${autores.length}`)
}

contarAutor()


console.log()

// C e D

function livrosDoAutor(nome){

    console.log('Livros do Augusto Cury: ')
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === nome){
                console.log(book.title)
            }
        }
    
    }
}
livrosDoAutor('Stephen R. Covey')