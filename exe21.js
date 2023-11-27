function funcaoDaSorte(args){
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * 10 + 1)
    return (args === numeroAleatorio ?
        `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
        `Que pena, o número sorteado foi o ${numeroAleatorio}`
        )
        
}



console.log(funcaoDaSorte(5))