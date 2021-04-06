const service = new RegistrosService();

const pegarURL = new URL(window.location);

const id = pegarURL.searchParams.get('id');

let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputSemana = $('#label_semana');
        this._inputMercado = $('#input__Text_mercado');
        this._inputItem = $('#input__Text_item');
        this._inputQuantidade = $('#input__Text_quantidade');
        this._inputValor = $('#input__Text_valor');

console.log(pegarURL);
console.log(id);

service
    .editaRegistros(id)
    .then(dados => {

        console.log(dados._data);

        function adicionaZero(numero) {
            if(numero <= 9) {
                return "0"+numero;
            } else {
                return numero;
            }
        }

        let data = new Date(dados._data);

        let dataFormatada = (adicionaZero(data.getFullYear()))+"-"+
                            adicionaZero((data.getMonth()+1))+"-"+
                            adicionaZero((data.getDate()));

        this._inputData.value = dataFormatada;
        this._inputSemana.value = dados._semana
        this._inputMercado.value = dados._mercado;
        this._inputItem.value = dados._item;
        this._inputQuantidade.value = dados._quantidade;
        this._inputValor.value = dados._valor;


    });

    document
        .querySelector('#tabela__formulario')
        .addEventListener('submit', function(event) {

            event.preventDefault();

            service
                .atualizaRegistros(id,  inputData.value, inputSemana, 
                    inputMercado, inputItem, inputQuantidade, inputValor
                )
                .then(()=> {
                    window.location.href = 'index.html';
                })

    });