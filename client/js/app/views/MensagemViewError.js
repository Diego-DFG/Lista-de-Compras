class MensagemViewError {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model) {
        return model.texto ? `<p class="alert alert-danger">${model.texto}</p>`: '<p></p>';
    }
}