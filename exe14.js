function receberNumerosPares(args){
    return args.filter((numero, indice) => {
        let numeroPar = numero % 2 === 0
        let indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
    

}



const resultado = receberNumerosPares([1, 2, 7, 13, 22,])
console.log(resultado)