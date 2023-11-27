function contarCaractere(caracter, frase){
    return [...frase].filter(buscador => buscador === caracter).length
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))