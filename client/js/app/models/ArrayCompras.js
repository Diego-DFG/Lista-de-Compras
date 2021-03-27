class ArrayCompras {
    constructor(armadilhas) {
        this._compras = [];
        this._armadilhas = armadilhas;
    }

    adiciona(compra) {
        this._compras.push(compra);
        this._armadilhas(this);
    }

    get compras() {
        return [].concat(this._compras);
    }

    esvazia() {
        this._compras = [];
        this._armadilhas(this);
    }
}