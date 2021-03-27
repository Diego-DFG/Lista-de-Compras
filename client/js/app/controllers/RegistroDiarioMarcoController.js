class RegistroDiarioMarcoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputDiaMarco = $('#periodo_dia_marco');

        this._compras = new ArrayCompras(model => 
			this._compraView.update(model));

        this._compraView = new CompraView($('#tarefaView'));
        this._compraView.update(this._compras);

        this._mensagem = new Mensagem();
        this._mensagemViewSuccess = new MensagemViewSucess($('#mensagemView'));
        this._mensagemViewError = new MensagemViewError($('#mensagemView'));
        this._mensagemViewSuccess.update(this._mensagem);
        this._mensagemViewError.update(this._mensagem);
    }

	importaRegistros() {

		event.preventDefault();

		const dia = this._inputDiaMarco.value;

		let listAll = dia => registros => {
						console.log(registros);
						registros
							.filter(registro => registro._data.getDate() == dia)
							.forEach(registro => {
								console.log(registro)
								this._compras.adiciona(registro);
								this._mensagem.texto = 'Tarefas importadas com sucesso!';
								this._mensagemViewSuccess.update(this._mensagem);});}
		let catchError = erro => {
						console.log(erro);
						this._mensagem.texto = 'Não foi possível importar as tarefas!';
						this._mensagemViewError.update(this._mensagem);}


		let registros = new RegistrosDiarioService();

		if(dia == 1) {
			registros
				.obterRegistrosDiaPrimeiro(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 2) {
			registros
				.obterRegistrosDiaDois(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 3) {
			registros
				.obterRegistrosDiaTres(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 4) {
			registros
				.obterRegistrosDiaQuatro(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 5) {
			registros
				.obterRegistrosDiaCinco(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 6) {
			registros
				.obterRegistrosDiaSeis(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 7) {
			registros
				.obterRegistrosDiaSete(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 8) {
			registros
				.obterRegistrosDiaOito(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 9) {
			registros
				.obterRegistrosDiaNove(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 10) {
			registros
				.obterRegistrosDiaDez(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 11) {
			registros
				.obterRegistrosDiaOnze(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 12) {
			registros
				.obterRegistrosDiaDoze(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 13) {
			registros
				.obterRegistrosDiaTreze(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 14) {
			registros
				.obterRegistrosDiaQuatorze(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 15) {
			registros
				.obterRegistrosDiaQuinze(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 16) {
			registros
				.obterRegistrosDiaDezesseis(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 17) {
			registros
				.obterRegistrosDiaDezessete(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 18) {
			registros
				.obterRegistrosDiaDezoito(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 19) {
			registros
				.obterRegistrosDiaDezenove(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 20) {
			registros
				.obterRegistrosDiaVinte(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 21) {
			registros
				.obterRegistrosDiaVinteUm(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 22) {
			registros
				.obterRegistrosDiaVinteDois(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 23) {
			registros
				.obterRegistrosDiaVinteTres(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 24) {
			registros
				.obterRegistrosDiaVinteQuatro(dia)
				.then(listAll(dia))
				.catch(catchError);
				return;
		} else 
		if(dia == 25) {
			registros
				.obterRegistrosDiaVinteCinco(dia)
				.then(listAll(dia))
				.catch(catchError);
				return;
		} else 
		if(dia == 26) {
			registros
				.obterRegistrosDiaVinteSeis(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 27) {
			registros
				.obterRegistrosDiaVinteSete(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 28) {
			registros
				.obterRegistrosDiaVinteOito(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 29) {
			registros
				.obterRegistrosDiaVinteNove(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 30) {
			registros
				.obterRegistrosDiaTrinta(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else 
		if(dia == 31) {
			registros
				.obterRegistrosDiaTrinta_e_um(dia)
				.then(listAll(dia))
				.catch(catchError);
		} else {
			this._mensagem.texto = 'Não há registros para a data informada!';
			this._mensagemViewError.update(this._mensagem);
		}
	}

	apaga() {
		this._compras.esvazia();
	}
}