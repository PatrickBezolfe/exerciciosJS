/*function repetir(repetido, vezes){
    let check = []
    for (let i = 0; i < vezes; i++)
    check.push(repetido)
    console.log(check)
}*/



function repetir(repetido, vezes){
    let check = Array(vezes).fill(repetido)
    
    
    console.log(check)
}

repetir(2,3)