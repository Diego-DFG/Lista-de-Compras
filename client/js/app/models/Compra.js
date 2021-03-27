class Compra {
    constructor(data, semana, mercado, item, quantidade, valor, total) 
    {
        this._data = new Date(data.getTime());
        this._semana = semana;
        this._mercado = mercado;
        this._item = item;
        this._quantidade = quantidade;
        this._valor = valor;
        this._total = total;
        Object.freeze(this);
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get semana() {
        return this._semana;
    }

    get mercado() {
        return this._mercado;
    }

    get item() {
        return this._item;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get total() {
        return this._valor * this._quantidade;
    }

}

