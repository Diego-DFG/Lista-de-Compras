class HttpService {

	_handlerErrors(res) {
		if(!res.ok) {
			console.log(res);
			throw new Error(res.statusText);
		}
		console.log(res);
		return res;
	}

	get(url) {

		return fetch(url)
				.then(res => this._handlerErrors(res))
				.then(res => res.json());
	}

	 post(url, dado) {
	 		console.log(dado);
	 		return fetch(url, {
	 			headers: {'Content-type' : 'application/json'},
	 			method: 'post',
	 			body: JSON.stringify(dado)
	 		})
	 		.then(res => this._handlerErrors(res));

    }

	delete(url, id) {
		console.log(id);
		return fetch(url, {
			headers: {'Content-type' : 'application/json'},
			method: 'delete',
			body: JSON.stringify(id)
		})
		.then(res => this._handlerErrors(res));

   }

   getById(url, id) {
	console.log(id);
	return fetch(url, {
		headers: {'Content-type' : 'application/json'},
		method: 'get',
		body: JSON.stringify(id)
	})
	.then(res => this._handlerErrors(res));

	}

	atualizaItem(id, data, semana, mercado, item, quantidade, valor) {
		console.log(id);
		return fetch(url, {
			headers: {'Content-type' : 'application/json'},
			method: 'put',
			body: JSON.stringify({
				id: id,
				data: data,
				semana: semana,
				mercado: mercado,	
				item: item,
				quantidade: quantidade,
				valor: valor
			})
		})
		.then(res => this._handlerErrors(res));
	}
}