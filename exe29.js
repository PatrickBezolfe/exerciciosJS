function segundoMaior(args){
    let numeroOrdenado = args.sort((a, b) => b - a)
    return numeroOrdenado[1]
}




console.log(segundoMaior([12, 16, 1, 5]))