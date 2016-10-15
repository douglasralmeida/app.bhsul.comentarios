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
    res.send([{descricao:'comentário 1'}, {descricao:'comentário 2'}, {descricao:'comentário 3'}]);
};

exports.exibir = function(req, res) {
    res.send({id:req.params.id, descricao: "comentário 1", tipo: "problema"});
};