class View {
	constructor(elemento) {
		this._elemento = elemento;
	}

	template(model) {
		throw new Error('Esta classe deve ser implementada!');
	}

	update(model) {
		this._elemento.innerHTML = this.template(model);
	}
}