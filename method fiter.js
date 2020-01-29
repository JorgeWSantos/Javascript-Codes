let produtos = [
    {qtd:0, descricao:"chave"},
    {qtd:0, descricao:"caneca"},
    {qtd:0, descricao:"maçaneta"},
]

//verify if product exist
//if exist the product is returned
//else a array empty is returned
let exist = produtos.filter((p)=>{

    return p.descricao == "caneca"
})

console.log(exist);
//---output:
[ { qtd: 0, descricao: 'caneca' } ]
//----

//return all different values
let dif = produtos.filter((p)=>{

    return p.descricao != "garfo"
})

console.log(dif);
//---output:
[
  { qtd: 0, descricao: 'chave' },
  { qtd: 0, descricao: 'caneca' },
  { qtd: 0, descricao: 'maçaneta' }
]
//----
