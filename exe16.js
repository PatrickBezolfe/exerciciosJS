function somarNumeros(args){
    let soma = 0
    args.forEach(numero => soma += numero)
    return soma
    


}

console.log(somarNumeros([33,66,99]))