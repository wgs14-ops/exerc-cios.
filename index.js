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

//exercício 3
app.get('/contato', (req, res) => {
  res.json({
    email: 'contato@gmail.com',
    telefone: '(81) 99999-9999'
  });
});

//exercício 4
app.get('/erro', (req, res) => {
  res.status(404).send('Página não encontrada');
});

//exercício 5
app.get('/inicio/', (req, res) => {
  res.redirect('/')
});

//exercício 6
app.get('/usuarios/:id', (req, res) => {
  res.send('Página Sobre');
});

app.listen(3000, () => {
  console.log('servidor em execução');
});

