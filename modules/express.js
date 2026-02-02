const express = require('express');
const UserModel = require('../src/models/userModel');

/**
 * Aqui estamos criando um servidor web simples usando o framework Express.
 * Equivalente a um controller em uma aplicação MVC.
 * para criarmos uma requisição a um endpoint, usamos:
 *  - app.get() para requisições GET
 *  - app.post() para requisições POST
 *  - app.put() para requisições PUT
 *  - app.delete() para requisições DELETE
 * Cada endpoint tem uma rota (path) e uma função callback que define o que fazer quando a rota é acessada.
 * res.status().send() define o código de status HTTP e a resposta enviada ao cliente.
 * res.status().json() envia uma resposta em formato JSON.
 * Middleware são funções que processam requisições antes de chegarem ao endpoint.
 */

const app = express();

app.use(express.json()); //middleware para interpretar que o corpo da requisição está em JSON

app.set('view engine', 'ejs'); //definindo EJS como template engine
app.set ('views', './src/views'); //definindo o diretório das views

app.use((req, res, next) => { //middleware para mostrar informações de cada requisição
    console.log(`Request type: ${req.method}`);
    console.log (`Content Type: ${req.headers['content-type']}`);
    console.log(`Date: ${new Date()}`);

    next(); //chama o próximo middleware ou endpoint
})

//
app.get('/views/users', async (req,res) => {
    const users = await UserModel.find();

    res.render('index', {users}); //renderiza a view index.ejs passando a lista de usuários

})


app.get('/home', (req, res) => {
    res.contentType('aplication/html');
    res.status(200).send('<h1> Hello world </h1>');
});


//Get para listar usuários 
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users); 
    }catch{
        res.status(500).send(error.message);
    }
})

//Get para listar usuário por ID
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id; //req.params para pegar parâmetros da rota (/:id)
        const user = await UserModel.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);  
    }
})

//Post para criar um novo usuário
app.post('/users', async (req,res)=>{
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }  
})

//Patch para atualizar parcial de um usuário (somente os campos enviados)
app.patch('/users/:id', async (res, req)=>{
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true}); //new: true retorna o documento atualizado
        res.status(200).json(user);

    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

app.put('/users/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const user = await UserModels.findByIdAndUpdate(id, req.body, {new: true, overwrite: true}); //overwrite: true substitui o documento inteiro
        req.status(200).json(user)
    } catch (error) {
        req.status(500).send(error.message);
    }
})

//Delete para remover um usuário
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);
        res.status(200).json(user);

    } catch (error) {
        res.status(500).send(error.message);
    }

})





const port = 8080

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));