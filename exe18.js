function calcularMedia(args){
    let divi = args.length
    let total = args.reduce((numeroA, numeroB) => numeroA + numeroB)
    
    
    return total / divi
    
    
}

console.log(calcularMedia([333,666,999]))