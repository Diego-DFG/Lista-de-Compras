(function() {
    function somar() {
        let resultado = $('.card_agua:checked');
        let total = 0;

        for(let i = 0; i < resultado.length; i++) {
            total += parseFloat(resultado[i].value);
        }

        $('#result').text(total);
    }
    somar();
    $(':checkbox').click(somar);

    function inputSemana() {
        let resultado = $('.input_semana:checked');
        let total = '';

        for(let i = 0; i < resultado.length; i++) {
            total += resultado[i].value;
        }

        $('#label_semana').text(total);
    }
    inputSemana();
    $(':checkbox').click(inputSemana);

    
}(jQuery));