class Tabela {
    init(conexao) {
        this.conexao = conexao;

        this.criaTabela();
    }

    criaTabela() {
        const sql = `CREATE TABLE IF NOT EXISTS shop(
            id int NOT NULL AUTO_INCREMENT,
            _data datetime NOT NULL,
            _semana varchar(20) NOT NULL,
            _item varchar(50) NOT NULL,
            _quantidade int NOT NULL,
            _valor int NOT NULL,
            _total int NOT NULL,
            PRIMARY KEY(id)
        )`;

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log('Tabela criada!');
            }
        });
    }
}
module.exports = new Tabela;