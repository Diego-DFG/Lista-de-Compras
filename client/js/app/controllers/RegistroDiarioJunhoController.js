class RegistroDiarioJunhoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputDiaJunho = $('#periodo_dia_junho');

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

        this._compras.esvazia();

        const dia = this._inputDiaJunho.value;

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


        let registros = new RegistrosService();

        if(dia == 1) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 2) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 3) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 4) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 5) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 6) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 7) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 8) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 9) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 10) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 11) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 12) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 13) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 14) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 15) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 16) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 17) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 18) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 19) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 20) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 21) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 22) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 23) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 24) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
                return;
        } else 
        if(dia == 25) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
                return;
        } else 
        if(dia == 26) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 27) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 28) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 29) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 30) {
            registros
            .obterRegistrosJunho()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 31) {
            registros
            .obterRegistrosJunho()
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