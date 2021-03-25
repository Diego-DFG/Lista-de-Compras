const conexao = require('../../infraestrutura/conexao');

class Nota {
    adiciona(compra, res) {
        const sql = 'INSERT INTO shop SET ?'

        conexao.query(sql, compra, (erro, resultados) => {
            if(erro) {
                res.status(500).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM shop'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM shop WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const shop = resultados[0];
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(shop)
            }
        })
    }

    altera(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }      
        const sql = 'UPDATE shop SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM shop WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}
module.exports = new Nota;