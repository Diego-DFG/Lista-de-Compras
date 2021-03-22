const Compra = require('../models/Compra');

module.exports = app => {
    app.get('/registros', (req, res) => {
        Compra.lista(res)
    })

    app.get('/registros/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Compra.buscaPorId(id, res)
    })

    app.post('/registros', (req, res) => {
       const compra = req.body;

        Compra.adiciona(compra, res)
    }) 

    app.patch('/registros/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body;

        Compra.altera(id, valores, res)
    })

    app.delete('/registros/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Compra.deleta(id, res);
    })
}