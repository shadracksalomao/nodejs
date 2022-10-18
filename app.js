import express from "express";

const app = express()

app.get('/', function(req, res){
    res.send('<h1> BEM VINDO</h1>')
})

app.post('/enviar', function(req, res){

    res.send('Usuario Registado com sucesso!')
})

app.listen(300, function(){
    console.log('Servidor Criado!');
})