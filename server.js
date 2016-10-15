'use strict';

var express = require('express');
var feedback = require('./routes/feedback');

// Constantes
var PORT = 8080;
var HOST = '127.0.0.1';

// App
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
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