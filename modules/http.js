const http = require ('http');

const port = 8080;

const server = http.createServer((req, res) =>{ // Cria o servidor HTTP com request e response
    
    if (req.url == '/home'){ //Get endpoint home
        res.writeHead(200, {'Content-Type': 'text/html'}); // Define o tipo de conteúdo da response
        res.end ('<h1>Home Page</h1>');
    }

    if (req.url == '/users'){ // Get endpoint users
        const users = [
            {name: 'Joao', email: 'joao@joao.com'},
            {name: 'Maria', email: 'maria@joao.com'},
            {name: 'Pedro', email: 'pedro@pedro.com'}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'}); // Define o tipo de conteúdo da response 
        res.end (JSON.stringify(users)); // Converte JSON para string
    }
});

server.listen(port, () =>{console.log (`rodando na porta ${port}`)});