function filtrarPorQuantidadeDeDigitos(a, b){
    return a.filter(numeros => {
        let qtdDigitos = String(numeros).length
        return qtdDigitos === b
    })
        
}



console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))