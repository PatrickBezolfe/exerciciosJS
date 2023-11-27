function inverter(args){
    let check = Object.entries(args).map(reverter => reverter.reverse())
    return Object.fromEntries(check)
}



console.log(inverter({ a: 1, b: 2, c: 3}))
    
