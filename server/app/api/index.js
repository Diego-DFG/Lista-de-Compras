/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var dataAtual = new Date();
var dataAnterior = new Date();
dataAnterior.setDate(dataAtual.getDate() - 7);
var dateRetrasada = new Date();
dateRetrasada.setDate(dataAtual.getDate() - 14);

var produtos = [
      {data : dataAtual, nome: 'Feijão (Carreteiro) Kg', quantidade : 1, valor : 5},
      {data : dataAtual, nome: 'Arroz (Carreteiro)10Kg', quantidade : 1, valor: 15},
      {data : dataAtual, nome: 'Queijo (s/glúten)Kg', quantidade : 1, valor : 20},
      {data : dataAnterior, nome: 'Pão de forma (Panco)', quantidade : 1, valor : 5.50},
      {data : dataAnterior, nome: 'Requeijão (VIGOR)', quantidade : 1, valor : 5.99},
      {data : dataAnterior, nome: 'Peito de frango (Sadia)', quantidade : 1, valor : 8.99},
      {data : dateRetrasada, nome: 'Leite (Itambé) 400g', quantidade : 1, valor : 750},
      {data : dateRetrasada, nome: 'Alcatra (Friboi) Kg', quantidade : 1, valor : 23.90},
      {data : dateRetrasada, nome: 'Pão de queijo (Forno de minas) Kg', quantidade : 1, valor : 21.90}
    ];


api.listaSemana = function(req, res) {
    var produtosAtuais = produtos.filter(function(produto) {
        return produto.data > dataAnterior;
    });
    res.json(produtosAtuais);
};

api.listaAnterior = function(req, res) {
   
   var produtosAnteriores = produtos.filter(function(produto) {
        return produto.data < dataAtual && produto.data > dateRetrasada;
    });
	setTimeout(function() {
		res.json(produtosAnteriores);	
	}, 500);
    
};

api.listaRetrasada = function(req, res) {

   var produtosRtrasadas = produtos.filter(function(produto) {
        return produto.data < dataAnterior;
    });
    res.json(produtosRtrasadas);
    
};

api.cadastraNegociacao = function(req, res) {

   console.log(req.body);
   req.body.data = new Date(req.body.data.replace(/-/g,'/'));
   produtos.push(req.body);
   res.status(200).json("Produto recebido");
};



module.exports = api;