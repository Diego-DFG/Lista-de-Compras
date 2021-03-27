class CompraView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model) {
        return `
        <table class='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>MERCADO</th>
                    <th>ITEM</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR(R$)</th>
                    <th>TOTAL(R$)</th>
                </tr>
            </thead>
            <tbody>
                ${model.compras.map(compra => `
                <tr>
                    <td>${compra.data.getDate()}/
                    ${compra.data.getMonth()+1}/
                    ${compra.data.getFullYear()} - 
                    ${compra.semana}</td>
                    <td>${compra.mercado}</td>
                    <td>${compra.item}</td>
                    <td>${compra.quantidade}</td>
                    <td>${compra.valor}</td>
                    <td>${(compra.total).toFixed(2)}</td>
                </tr>
                `).join('')}
            </tbody>
            <tfoot>
                <td class="table text-uppercase table-active" colspan="5"><strong>Total Geral(R$)</strong></td>
                <td class="table-active">${model.compras.reduce((total, n) => total + n.total, 0.0)}</td>
            </tfoot>
        </table>
        `;
    }
}