function removerVogais(string){
    string = string.replace(/['aeiou']/ig, '')
    console.log(string)
}

removerVogais("Cod3r") // retornarĂ¡ "Cd3r"
removerVogais("Fundamentos") // retornarĂ¡ "Fndmnts"
