const express = require('express');
const UserModel = require('./src/models/user.model');
const ContaModel = require ('./src/models/user.model');

/**
 * Aqui estamos criando um servidor web simples usando o framework Express.
 * Equivalente a um controller em uma aplicação MVC.
 * para criarmos uma requisição a um endpoint, usamos:
 *  - app.get() para requisições GET
 *  - app.post() para requisições POST
 *  - app.put() para requisições PUT
 *  - app.delete() para requisições DELETE
 * Cada endpoint tem uma rota (path) e uma função callback que define o que fazer quando a rota é acessada.
 */

const app = express();

app.get('/home', (req, res) => {
    res.contentType('aplication/html');
    res.status(200).send('<h1> Hello world </h1>');
});

app.get('/users', (req, res) => {
    const users = [
        { name: 'Joao', email: 'joao@joao.com' },
        { name: 'Maria', email: 'maria@joao.com' },
        { name: 'Pedro', email: 'pedro@pedro.com' }
    ];
    res.status(200).json(users);
})

app.get ('account', (req, res)=>{
    const accounts = [
        {id: 1, user: 'Joao', balance: 1000},
        {id: 2, user: 'Maria', balance: 2000},
        {id: 3, user: 'Pedro', balance: 3000},
    ];
})


//Post para criar um novo usuário
app.post('/users', (req,res)=>{
    const user = UserModel.create(req.body)

    res.status(201).json(user);
    
})






const port = 8080

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));