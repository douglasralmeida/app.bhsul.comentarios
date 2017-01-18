var db = require('./db');

exports.adicionar = function(req, res) {
    var novofeedback = req.body;
	var sql = 'INSERT INTO feedback VALUES ;';
	
	
	res.send('ok');
}

exports.editar = function(req, res) {
    var id = req.params.id;
    var feedback = req.body;
    res.send('ok');
}

exports.excluir = function(req, res) {
    var id = req.params.id;
	res.send('ok');
}

exports.exibirtudo = function(req, res) {
	var feedbacks = new Array();
	feedbacks[0].id = 1;
    feedbacks[0].tipo = 1;
    feedbacks[0].descricao = "Um teste";
	feedbacks[1].id = 2;
    feedbacks[1].tipo = 2;
    feedbacks[1].descricao = "Outro teste";
    res.send(feedbacks);
};

exports.exibir = function(req, res) {
    res.send({id:req.params.id, descricao: "comentário 1", tipo: "problema"});
};
