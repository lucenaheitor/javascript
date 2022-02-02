const sequence = {
    _id: 1,
     get id () { return this._id++}    
} 

const  produtos ={}

function SalvarProdutos(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produtos.id]  = produto
    return produto
}

 function getProduto(id) {
     return produtos[id]  || {}
 }

 function getProdutos() {
      return Object.values (produtos)

 }