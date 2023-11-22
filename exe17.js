function despesasTotais(args){
    
    let preço = args.reduce((contador, valorAtual )=> contador + valorAtual.preco, 0)
    console.log(preço)
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]) 