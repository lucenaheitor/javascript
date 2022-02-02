const porta =3003

const { response } = require('express')
const express =  require('express')
const app = express()

app.get('/produtos', (req, res, next) =>{
    response.send({nome: 'Notebook', preco: 123.45}) //vai converter pra JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na  porta ${porta}.`)
})