class ProdutosController {
	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputNome = $('#nome');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

		this._listaProdutos = new Bind(
			new ListaProdutos(),
			new ProdutosView($('#produtosView')),
			'adiciona', 'esvazia');

		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView($('#mensagemView')),
			'texto');
	}

	adiciona(event) {

		event.preventDefault();

		this._listaProdutos.adiciona(this._cadastraProduto());

		this._mensagem.texto = 'Produto adicionado com sucesso!';

		this._limpaFormulario();

	}

	importaProdutos() {

		let service = new ProdutosService();

		service
			.obterProdutos()
			.then(produtos => 
				produtos.forEach(produto => {
					this._listaProdutos.adiciona(produto);
					this._mensagem.texto = 'Produtos importados com sucesso!';
				}))
			.catch(erro => {
				console.log(erro);
				this._mensagem.texto = erro
			});
	}

	remove() {

		this._listaProdutos.esvazia();

		this._mensagem.texto = 'Produto removido com sucesso!';
	}

	_cadastraProduto() {

		return new Produtos(
			DateHelper.textoParaData(this._inputData.value),
			this._inputNome.value,
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
			);
	}

	_limpaFormulario() {

		this._inputData.value = '';
		this._inputNome.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;
		this._inputData.focus();
	}
}