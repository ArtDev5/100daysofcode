/* 
    ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema
    númerico para sistema de notas em caracteres tipo A, B e C

    * de 90 para cima   - A
    * entre 80 e 89     - B
    * entre 70 e 79     - C
    * entre 60 e 69     - D
    * menor que 60      - F

*/

function notas(valor){
    let resultado

    if(valor >= 90){
        resultado = 'A'

    }
    else if(valor >= 80 && valor < 90){
        resultado = 'B'

    }
    else if(valor >= 70 && valor < 80){
        resultado = 'C'

    }
    else if(valor >= 60 && valor < 70){
        resultado = 'D'

    }
    else if(valor < 60){
        resultado = 'F'


    }else{
        resultado = 'Não informada'
    }
    
    return resultado
}  
    

console.log(`Nota: ${notas(90)}`)