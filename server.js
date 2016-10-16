'use strict';

var express = require('express');
var feedback = require('./routes/feedback');

// Constantes
var PORT = 8080;
var HOST = '127.0.0.1';

// App
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:80');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/teste', function (req, res) {
  res.send('app.bhsul.comentarios esta vivo!\n');
});

app.get('/', feedback.exibirtudo);

app.get('/:id', feedback.exibir);

app.post('/', feedback.adicionar);

app.put('/:id', feedback.editar);

app.delete('/:id', feedback.excluir);

app.listen(PORT);
console.log('Executando em http://localhost:'  + PORT);