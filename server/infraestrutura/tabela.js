class Tabela {
    init(conexao) {
        this.conexao = conexao;

        this.criaTabela();
    }

    criaTabela() {
        const sql = `CREATE TABLE IF NOT EXISTS shop(
            _data datetime NOT NULL,
            _semana varchar(20) NOT NULL,
            _mercado varchar(20) NOT NULL,
            _item varchar(50) NOT NULL,
            _quantidade numeric NOT NULL,
            _valor numeric NOT NULL,
            _total numeric NOT NULL,
            id int NOT NULL AUTO_INCREMENT,
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