'use strict';

var express = require('express');

// Constantes
var PORT = 8080;
var HOST = '127.0.0.1';

// App
var app = express();

app.get('/', function (req, res) {
  res.send('app.bhsul.comentarios esta vivo!\n');
});

app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
});

app.listen(PORT);
console.log('Executando em http://localhost:'  + PORT);