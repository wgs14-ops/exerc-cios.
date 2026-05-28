const express = require('express');
const app = express();

//exercício 1
app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema');
});

//exercício 2
app.get('/sobre', (req, res) => {
  res.send('Página Sobre');
});

app.listen(3000, () => {
  console.log('servidor em execução');
});

//exercício 2
app.get('/contato', (req, res) => {
  res.send('email: contato@gmail.com  \ntelefone: (81) 99999-9999');
});

app.get('/erro', (req, res) => {
  res.send('status HTTP 404 mensagem Página não encontrada');
});

