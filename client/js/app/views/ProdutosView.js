class ProdutosView extends View{
	constructor(elemento) {
		super(elemento);
	}

	template(model) {

		return `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>NOME</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR R$</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.produtos.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.nome}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>
                  
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.produtos.reduce((total, n) => total + n.valor, 0.0)}
                </td>
            </tfoot>
            
        </table>`;
	}
}