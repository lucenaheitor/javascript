const  pilotos = ["Vettel", "Alonso",  "Raikkonen", "Massa"]
pilotos.pop() //massa quebrou o carro
//.pop serve pra retirar o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)


pilotos.shift() // remove o primeiro indice do ARRAY
console.log(pilotos)

pilotos.unshift('Hamilton')
//subistitui o primeiro  endice do array
console.log(pilotos)

//splice: pode adcionar ou remover elementos

//Adicionar

pilotos.splice(2, 0, 'Bottas', ' Massa')
console.log(pilotos)

//removendo
pilotos.splice( 3, 1)
console.log(pilotos)

const algunsPilotos1 =  pilotos.slice(2) //  retorna um  pedaço do array
console.log(algunsPilotos1)

const  algunsPilotos2 =  pilotos.slice( 1, 4)
console.log(algunsPilotos2)