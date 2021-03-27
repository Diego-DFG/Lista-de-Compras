class RegistrosDiarioService {
    constructor() {
        this._http = new HttpService();
    }

    obterRegistrosDiaPrimeiro(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDois(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaTres(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaQuatro(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaCinco(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaSeis(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaSete(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaOito(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaNove(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDez(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaOnze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDoze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaTreze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaQuatorze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}
    obterRegistrosDiaQuinze(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDezesseis(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDezessete(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDezoito(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaDezenove(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinte(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteUm(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteDois(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto =>
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getMonth() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteTres(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteQuatro(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteCinco(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteSeis(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteSete(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteOito(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaVinteNove(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaTrinta(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

    obterRegistrosDiaTrinta_e_um(dia) {

		return this._http
				.get('/registros')
				.then(registros => 
         			registros.map(objeto => 
						new Compra( 
							new Date(objeto._data), 
							objeto._semana, objeto._mercado, objeto._item, objeto._quantidade, 
								objeto._valor,objeto._total)))
				.then(registros => {
	                return registros.filter(registro => 
	                   		 registro._data.getUTCDate() == dia);
				})
	            .catch(erro => {
	                console.log(erro);
	                throw new Error('Não foi possível obter os registros!');
	            }); 
	}

}