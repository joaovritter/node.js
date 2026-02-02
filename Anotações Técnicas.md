# Anotações de Estudo – Node.js

Este documento reúne os **novos conceitos aprendidos em uma videoaula de Node.js**. O objetivo dessas anotações é **fixar o conhecimento**, organizar as ideias e consolidar a compreensão de uma tecnologia nova, mas que se mostrou intuitiva e poderosa ao longo do aprendizado.

---

## 📦 Módulos no Node.js

- O Node.js utiliza um sistema de **módulos** para organizar o código.
- Cada arquivo pode ser considerado um módulo independente.
- É possível **exportar** funções, objetos ou classes para que sejam reutilizados em outros arquivos.
- As exportações permitem melhor separação de responsabilidades e código mais limpo e manutenível.

### Exemplo

```js
// soma.js
function soma(a, b) {
  return a + b;
}

module.exports = soma;
```

```js
// app.js
const soma = require('./soma');
console.log(soma(2, 3));
```

---

## 📁 Módulo `path`

- O módulo `path` é utilizado para **trabalhar com caminhos de arquivos e diretórios**.
- Ele ajuda a construir caminhos de forma segura e compatível com diferentes sistemas operacionais.
- Evita erros comuns ao concatenar strings para formar caminhos manualmente.

### Exemplo

```js
const path = require('path');

const caminho = path.join(__dirname, 'arquivos', 'dados.txt');
console.log(caminho);
```

---

## 📄 Módulo `fs` (File System)

- O módulo `fs` permite a **manipulação de arquivos e diretórios**.
- Possibilita ler, criar, editar e remover arquivos.
- Pode ser usado de forma síncrona ou assíncrona.
- É muito utilizado em aplicações que lidam com dados, logs ou arquivos de configuração.

### Exemplo

```js
const fs = require('fs');

fs.writeFileSync('exemplo.txt', 'Olá, Node.js!');
const conteudo = fs.readFileSync('exemplo.txt', 'utf-8');
console.log(conteudo);
```

---

## 🧩 Schema no Mongoose

- O **schema** define a estrutura dos documentos que serão armazenados no MongoDB.
- Permite especificar tipos de dados, validações e regras.
- Garante maior organização e consistência dos dados salvos no banco.
- Facilita o entendimento do formato esperado das informações.

### Exemplo

```js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  idade: Number
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
```

---

## ⏳ Async / Await

- `async` e `await` são utilizados para trabalhar com **operações assíncronas** de forma mais legível.
- Tornam o código parecido com um fluxo síncrono, facilitando a leitura.
- Evitam o encadeamento excessivo de callbacks.
- Melhoram a organização e o tratamento de erros.

### Exemplo

```js
async function buscarDados() {
  const resposta = await fetch('https://api.exemplo.com/dados');
  const dados = await resposta.json();
  console.log(dados);
}
```

---

## 🔗 Promise

- Uma **Promise** representa um valor que pode estar disponível agora, no futuro ou nunca.
- Possui três estados: *pending*, *fulfilled* e *rejected*.
- É a base para o funcionamento do `async/await`.
- Muito usada em operações que dependem de tempo, como acesso a banco de dados ou APIs.

### Exemplo

```js
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!');
  }, 1000);
});

promessa.then(resultado => console.log(resultado));
```

---

## 🌐 HTTP x Express

- O módulo `http` é nativo do Node.js e permite criar servidores web.
- O **Express** é um framework que abstrai e simplifica o uso do `http`.
- Com Express, o desenvolvimento de APIs se torna mais rápido e organizado.
- Ele facilita o roteamento, o tratamento de requisições e respostas.

### Exemplo com Express

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor rodando');
});

app.listen(3000);
```

---

## 🚀 Express – Conceitos Principais

### Operações HTTP

- **GET**: buscar informações
- **POST**: criar novos dados
- **PUT / PATCH**: atualizar dados existentes
- **DELETE**: remover dados

### Exemplo

```js
app.post('/usuarios', (req, res) => {
  res.json({ mensagem: 'Usuário criado' });
});
```

---

### Content-Type

- Define o **tipo de conteúdo** enviado ou recebido na requisição.
- Muito comum em APIs que trabalham com JSON.
- Garante que o servidor saiba como interpretar os dados.

---

### `res.json()`

- Utilizado para **enviar respostas em formato JSON**.
- Facilita a comunicação com o frontend ou outras aplicações.
- Já converte automaticamente o objeto para JSON.

### Exemplo

```js
res.json({ status: 'ok', dados: [] });
```

---

### `req.params`

- Permite acessar **parâmetros da rota**.
- Muito útil para identificar recursos específicos, como IDs.
- Torna as rotas mais dinâmicas e reutilizáveis.

### Exemplo

```js
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id });
});
```

---

### `{ new: true }` e `{ overwrite: true }`

- `{ new: true }`: retorna o documento **atualizado**, e não o antigo.
- `{ overwrite: true }`: sobrescreve completamente o documento existente.
- São opções comuns em operações de atualização com o Mongoose.

### Exemplo

```js
Usuario.findByIdAndUpdate(id, dados, { new: true });
```

---

## 🧱 Middleware

- Middlewares são funções que **interceptam requisições** antes de chegarem à rota final.
- Podem ser usados para validações, autenticação, logs e tratamento de erros.
- Ajudam a manter o código organizado e reutilizável.

### Exemplo

```js
function logMiddleware(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(logMiddleware);
```

---

## 📌 Conclusão

Mesmo sendo um ambiente novo, os conceitos apresentados em Node.js mostraram-se bem estruturados e intuitivos. Essas anotações servem como base para reforçar o aprendizado e facilitar futuras revisões, contribuindo para a evolução no desenvolvimento backend.

