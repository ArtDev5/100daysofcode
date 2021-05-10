function removerVogais(string){
    string = string.replace(/['aeiou']/ig, '')
    console.log(string)
}

removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
