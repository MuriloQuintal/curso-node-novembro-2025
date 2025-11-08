

const express = require('express') //carregar a biblioteca , ou o micro framework
const app = express()
app.get('/', function (req, res){
    res.send("H1>Hello World")
})
app.get('/oi', function (req, res){
    res.send("Olá Mario")

})

app.listen(3000) // definir porta do servidor para sair com a api
