class MensagemViewSucess {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>`: '<p></p>';
    }
}