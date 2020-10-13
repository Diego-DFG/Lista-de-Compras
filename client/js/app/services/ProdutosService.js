class ProdutosService {
    
    constructor() {
        
        this._http = new HttpService();
    }
    
    obterProdutosDaSemana() {
               
        return this._http
            .get('produtos/semana')
            .then(produtos => {
                console.log(produtos);
                return produtos.map(objeto => new Produtos(new Date(objeto.data), objeto.nome, objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana');
            });  
    }
    
    obterProdutosDaSemanaAnterior() {
               
        return this._http
            .get('produtos/anterior')
            .then(produtos => {
                console.log(produtos);
                return produtos.map(objeto => new Produtos(new Date(objeto.data), objeto.nome, objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana anterior');
            });   
    }
    
    obterProdutosDaSemanaRetrasada() {
               
        return this._http
            .get('produtos/retrasada')
            .then(produtos => {
                console.log(produtos);
                return produtos.map(objeto => new Produtos(new Date(objeto.data), objeto.nome, objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana retrasada');
            });  
        
    }
    
    obterProdutos() {
        
        return Promise.all([
            this.obterProdutosDaSemana(),
            this.obterProdutosDaSemanaAnterior(),
            this.obterProdutosDaSemanaRetrasada()
        ]).then(periodos => {

            let produtos = periodos
                .reduce((dados, periodo) => dados.concat(periodo), [])
                .map(dado => new Produtos(new Date(dado.data), dado.nome, dado.quantidade, dado.valor ));

            return produtos;
        }).catch(erro => {
            throw new Error(erro);
        });
	} 
}

