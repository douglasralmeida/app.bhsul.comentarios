exports.adicionar = function(req, res) {
    var feedback = req.body;
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
    res.send([{descricao:'coment�rio 1'}, {descricao:'coment�rio 2'}, {descricao:'coment�rio 3'}]);
};

exports.exibir = function(req, res) {
    res.send({id:req.params.id, descricao: "coment�rio 1", tipo: "problema"});
};