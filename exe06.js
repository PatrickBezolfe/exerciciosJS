function inverso(args){
    const tipo = typeof args

    if (tipo === "boolean")
        return !args
    else if (tipo === "number")
        return -args
    else 
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}.`       
}



const check = inverso(4)
console.log(check)