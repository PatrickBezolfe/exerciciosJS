function anoBissexto(args) {
    if (args % 4 === 0 && args % 100 != 0 || args % 400 === 0)
    return true
    else {
        return false
    }

}

console.log(anoBissexto(2020))