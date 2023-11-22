function removerPropriedade(obj, prop){
    let novoObj = {...obj}
    delete novoObj[prop]
    console.log(novoObj)
}



removerPropriedade({a:1, b:2}, "a")