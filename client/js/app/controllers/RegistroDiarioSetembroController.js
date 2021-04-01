class RegistroDiarioSetembroController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputDiaSetembro = $('#periodo_dia_setembro');

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

        const dia = this._inputDiaSetembro.value;

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
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 2) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 3) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 4) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 5) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 6) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 7) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 8) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 9) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 10) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 11) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 12) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 13) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 14) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 15) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 16) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 17) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 18) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 19) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 20) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 21) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 22) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 23) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 24) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
                return;
        } else 
        if(dia == 25) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
                return;
        } else 
        if(dia == 26) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 27) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 28) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 29) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 30) {
            registros
            .obterRegistrosSetembro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 31) {
            registros
            .obterRegistrosSetembro()
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