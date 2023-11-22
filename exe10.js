function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
     
    console.log([primeiroElemento, ultimoElemento])
    }

receberPrimeiroEUltimoElemento([13,23,33,43,53,63])
