var http = require('http')
    ,app = require('./config/express');

const conexao = require('./infraestrutura/conexao');
const tabela = require('./infraestrutura/tabela');

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {

        console.log(`Banco conectado!`);

        tabela.init(conexao);

        http.createServer(app).listen(8080, function() {
            console.log('Servidor escutando na porta: ' + this.address().port);
        });
    }
});



