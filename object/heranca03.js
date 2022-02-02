const pai = { nome: ' Pedro', corCanbelo: ' preto'}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCanbelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)