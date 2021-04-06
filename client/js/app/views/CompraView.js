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
            <tbody class="tabelaCorpo">
                ${model.compras.map(compra => `
                <tr class="trTabela" data-id="${compra.id}">
                    <td class="tdData tdTabela">${compra.data.getDate()}/
                    ${compra.data.getMonth()+1}/
                    ${compra.data.getFullYear()} - 
                    ${compra.semana}<a href="index.html?id=${compra.id}">Editar</a></td>
                    <td class="tdMercado tdTabela">${compra.mercado}</td>
                    <td class="tdItem tdTabela">${compra.item}</td>
                    <td class="tdQuantidade tdTabela">${compra.quantidade}</td>
                    <td class="tdValor tdTabela">${compra.valor}</td>
                    <td class="tdTotal tdTabela">${(compra.total).toFixed(2)}
                    <i onclick="tarefaController.deletaRegistro(event)" class="lixeira fas fa-trash-alt">
                    </td>
                </tr>
                `).join('')}
            </tbody>
            <tfoot>
                <tr>
                <td class="table text-uppercase table-active" colspan="5"><strong>Total Geral(R$)</strong></td>
                <td class="table-active">${model.compras.reduce((total, n) => total + n.total, 0.0).toFixed(2).replace('.', ',')}</td>
                </tr>
            </tfoot>
        </table>
        <script>
            let tarefaController = new TarefaController();
        </script>
        `;
    }
}