

const express = require('express') //carregar a biblioteca , ou o micro framework
const app = express()
const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"]
    

app.get('/herois', function(req, res){
   res.send(herois)
})

app.get('/herois/:id', function(req, res){
    const id = req.params.id
    res.send(herois[id-1])
})
app.use(express.json())
app.post('/herois', function (req,res){
    //let novoHeroi = req.body.chuchu
    herois.push(req.body.chuchu)
    herois.push(req.body.asd)
    res.send(`ok ${req.body.chuchu}`)
})

app.listen(3000) // definir porta do servidor para sair com a api
