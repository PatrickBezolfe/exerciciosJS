function buscarPalavrasSemelhantes(a, b){
    return [...b].filter(buscador => buscador.includes(a))
}


console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))