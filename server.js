'use strict';

var express = require('express');
var cors = require('cors');
var feedback = require('./feedback');

// Constantes
var PORT = 8080;
var HOST = '127.0.0.1';

// App
var app = express();

var corsOptionsDelegate = function(req, callback){
  var corsOptions;
  
  corsOptions = { allowedHeaders: ['Content-Type']}; // reflect (enable) the requested origin in the CORS response
  callback(null, corsOptions); // callback expects two parameters: error and options
};


// Implementa Cross-Origin Resource Sharing 
//app.use(cors());
app.options('/', cors(corsOptionsDelegate));

app.get('/teste', function (req, res) {
  res.send('app.bhsul.comentarios esta vivo!\n');
});

//Exibir lista de itens
app.get('/', feedback.exibirtudo);

//Exibir um item especifico
app.get('/:id', feedback.exibir);

app.head('/', cors(corsOptionsDelegate), function(req, res){
  res.send(204);
});

//Adicionar um item
app.post('/', cors(), feedback.adicionar);

//Alterar um item especifico
app.put('/:id', feedback.editar);

//Excluir um item
app.delete('/:id', feedback.excluir);

app.listen(PORT);
console.log('Executando em http://localhost:'  + PORT);
module.exports = app;
