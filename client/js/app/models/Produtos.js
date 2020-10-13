class Produtos {
	constructor(data, nome='', quantidade, valor) {
		this._data = new Date(data.getTime());
		this._nome = nome;
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);
	}

	get data() {
		return new Date(this._data.getTime());
	}

	get nome() {
		return this._nome;
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}

}