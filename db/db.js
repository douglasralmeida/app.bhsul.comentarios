var mysql      = require('mysql');

var sqlpool   =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'usuario_simples',
    password : process.env.SQL_PASSWORD,
    database : 'bhsul.gestaosite',
    debug    :  false
});

function handle_database(sql, resultado) {
    pool.getConnection(function(err,connection) {
        if (err) {
            console.log('Erro ao conectar ao banco de dados');
            resultado.json({"code" : 100, "status" : "Erro ao conectar ao banco de dados."});
            return;
        }
        connection.query(sql, function(err,rows) {
            connection.release();
            if (!err) {
                resultado.json(rows);
            }           
        });
        connection.on('error', function(err) {
	        console.log('Erro ao conectar ao banco de dados');
            resultado.json({"code" : 100, "status" : "Erro ao conectar ao banco de dados."});
            return;
        });
    });
}