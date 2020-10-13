/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/produtos/semana')
        .get(api.listaSemana);
        
    app.route('/produtos/anterior')
        .get(api.listaAnterior);
        
    app.route('/produtos/retrasada')
        .get(api.listaRetrasada);  
        
};