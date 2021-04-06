class TarefaController {
    constructor() {
        
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputSemana = $('#label_semana');
        this._inputMercado = $('#input__Text_mercado');
        this._inputItem = $('#input__Text_item');
        this._inputQuantidade = $('#input__Text_quantidade');
        this._inputValor = $('#input__Text_valor');

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

    adiciona(event) {

        event.preventDefault();
      
		let registros = new RegistrosService();
		registros
			.incluiRegistros(this._criaRegistro())
			.then(mensagem => {
				console.log(mensagem);
				
			})
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível adicionar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
		
			this._compras.adiciona(this._criaRegistro());

		this._compraView.update(this._compras);
		
		this._mensagem.texto = 'Tarefa adicionada com sucesso!';

		this._mensagemViewSuccess.update(this._mensagem);

		this._limpaFormulario();

    }

	deletaRegistro(event) {

		event.preventDefault();

		let botaoDeletar = event.target;

		if(botaoDeletar) {
			if(confirm("Tem certeza que deseja excluir esta tarefa?")) {
				const linhaTarefa = event.target.closest('[data-id]');
				let id = linhaTarefa.dataset.id;

				let registros = new RegistrosService();

				registros
					.excluiRegistros(id)
					.then(()=> 
						linhaTarefa.remove())
					.then(mensagem => {
						console.log(mensagem);
						this._mensagem.texto = 'Tarefa deletada do banco com sucesso!';
						this._mensagemViewSuccess.update(this._mensagem);
					})
					.catch(erro => {
						console.log(erro);
						this._mensagem.texto = 'Não foi possível deletar a tarefa!';
						this._mensagemViewError.update(this._mensagem);
					});

					this._limpaFormulario();	
			}
		}
	}

	

    importaRegistrosJaneiro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosJan()
			.then(registros => {
				console.log(registros);
				!this._compras.compras.some(compraExistente =>
                    JSON.stringify(registros) == JSON.stringify(compraExistente))})
			.then(registros => {
				registros
				.forEach(registro => {
					this._compras.adiciona(registro);
					this._mensagem.texto = 'Tarefas importadas com sucesso!';
					 this._mensagemViewSuccess.update(this._mensagem);})
			})
	        .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosFevereiro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosFev()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro);
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
		
	}

	importaRegistrosMarco() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosMarco()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro);
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
		
	}

	importaRegistrosAbril() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosAbril()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
						this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosMaio() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosMaio()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosJunho() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosJunho()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosJulho() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosJulho()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			 .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosAgosto() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosAgosto()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosSetembro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosSetembro()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosOutubro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosOutubro()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
            .catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosNovembro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosNovembro()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => {
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
			 			this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

	importaRegistrosDezembro() {

		event.preventDefault();

		let registros = new RegistrosService();

		registros
			.obterRegistrosDezembro()
			.then(registros => {
				console.log(registros);
	            registros
	                .forEach(registro => { 
						this._compras.adiciona(registro)
						this._mensagem.texto = 'Tarefas importadas com sucesso!';
						this._mensagemViewSuccess.update(this._mensagem);
					})
	        })
			.catch(erro => {
                console.log(erro);
				this._mensagem.texto = 'Não foi possível importar as tarefas de dezembro!';
				this._mensagemViewError.update(this._mensagem);
             });
	}

    apaga() {

        this._compras.esvazia();

        this._mensagem.texto = 'Tarefas apagadas com sucesso!';

        this._mensagemViewSuccess.update(this._mensagem);

    }

	_criaRegistro() {

		return new Compra(
            DateHelper.textoParaData(this._inputData.value),
            this._inputSemana.textContent,
			this._inputMercado.value,
            this._inputItem.value,
            parseFloat(this._inputQuantidade.value).toFixed(2),
            parseFloat(this._inputValor.value).toFixed(2)
        );
	}

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputItem.value = '';
        this._inputQuantidade.value = 0.0;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}