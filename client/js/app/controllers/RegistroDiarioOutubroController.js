class RegistroDiarioOutubroController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputDiaOutubro = $('#periodo_dia_outubro');

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

        const dia = this._inputDiaOutubro.value;

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
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 2) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 3) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 4) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 5) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 6) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 7) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 8) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 9) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 10) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 11) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 12) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 13) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 14) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 15) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 16) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 17) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 18) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 19) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 20) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 21) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 22) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 23) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 24) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
                return;
        } else 
        if(dia == 25) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
                return;
        } else 
        if(dia == 26) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 27) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 28) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 29) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 30) {
            registros
            .obterRegistrosOutubro()
                .then(listAll(dia))
                .catch(catchError);
        } else 
        if(dia == 31) {
            registros
            .obterRegistrosOutubro()
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