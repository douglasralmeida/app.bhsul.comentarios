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
    res.send({"feedbacks": [{"id": "1","tipo": 1,"descricao": "Um teste"}, {"id": "2","tipo": 2,"descricao": "Outro teste"}]});
};

exports.exibir = function(req, res) {
    res.send({id:req.params.id, descricao: "comentário 1", tipo: "problema"});
};
