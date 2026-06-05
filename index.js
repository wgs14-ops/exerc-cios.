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

//exercício 4buscar
app.get('/erro', (req, res) => {
  res.status(404).send('Página não encontrada');
});

//exercício 5
app.get('/inicio/', (req, res) => {
  res.redirect('/')
});

//exercício 6
app.get('/usuarios/:id', (req, res) => {
  res.send(usuario + req.params.id); 
});

//exercício 7
app.get('/produto/:nome', (req, res) => {
  res.send(produto + req.params.nome); 
});

//exercício 8
app.get('/filme/:id/:nome', (req, res) => {
  res.send(filme + req.params.id + req.params.nome); 
});

//exercício 9
app.get('/buscar', (req, res) => {
    const nome = req.query.nome;
    res.send(`Resultado da busca por: ${nome}`);
});


app.listen(3000, () => {
  console.log('servidor em execução');
});

//exercício 10
app.get('/produtos', (req, res) => {
  res.send(`Categoria: ${req.query.categoria} | Página: ${req.query.pagina}`);
});

//exercicio 11
app.get('/usuarios', (req, res) => {
  res.send(`Filtrando usuários com idade ${req.query.idade}`);
});

//exercicio 12
app.get('/perfil', (req, res) => {
  res.render('perfil', {
    nome: 'Ana',
    idade: 17
  });
});

//exercicio 13
app.get('/perfil', (req, res) => {
  res.render('perfil', {
    nome: 'Ana',
    idade: 17
  });
});
<p>Nome: {{nome}}</p>
<p>Idade: {{idade}}</p>

//exercicio 14
res.render('filmes', {
  filmes: ['Avatar', 'Titanic', 'Barbie']
});

//exercicio 15
{{#if logado}}
<p>Usuário logado</p>
{{else}}
<p>Faça login</p>
{{/if}}

{{#unless admin}}
<p>Você não é administrador</p>
{{/unless}}

//exercicio 16
res.render('filmes', {
  filmes: [
    {nome:'Avatar', ano:2009},
    {nome:'Barbie', ano:2023}
  ]
});
{{#each filmes}}
<p>{{nome}} - {{ano}}</p>
{{/each}}

//exercicio 17

