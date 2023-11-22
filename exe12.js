function filtrarNumeros(args){
    let check = args
    check = check.filter(item => typeof item === "number")
    console.log(check)
}
filtrarNumeros(["ola", 1988, 1, "eu", 20])