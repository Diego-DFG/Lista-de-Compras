class InputHelper {
    constructor() {
        throw new Error('Esta classe não pode ser instanciada!');
    }

    static filtroInputEstudos(input) {
        input.addEventListener('click', (e)=> {
            let inputCard = e.target;

            if(inputCard.checked == true && 
                inputCard.className === '.input__card_estudos') {
                    let td = document.createElement('td');
                    td.textContent = 'Concluído';
                    checkboxViewEstudos.innerHTML = td.textContent;
            } else {
                    let td = document.createElement('td');
                    td.textContent = '';
                    td.textContent = 'Em aberto';
                    checkboxViewEstudos.innerHTML = td.textContent;
            }
        });
    }

    static filtroInputProjetos(input) {
        input.addEventListener('click', (e)=> {
            let inputCard = e.target;

            if(inputCard.checked == true && 
                inputCard.className === '.input__card_projetos') {
                    let td = document.createElement('td');
                    td.textContent = 'Concluído';
                    checkboxViewEstudos.innerHTML = td.textContent;
            } else {
                    let td = document.createElement('td');
                    td.textContent = '';
                    td.textContent = 'Em aberto';
                    checkboxViewEstudos.innerHTML = td.textContent;
            }
        });
    }

    static filtroInputPessoal(input) {
        input.addEventListener('click', (e)=> {
            let inputCard = e.target;

            if(inputCard.checked == true && 
                inputCard.className === '.input__card_pessoal') {
                    let td = document.createElement('td');
                    td.textContent = 'Concluído';
                    checkboxViewEstudos.innerHTML = td.textContent;
            } else {
                    let td = document.createElement('td');
                    td.textContent = '';
                    td.textContent = 'Em aberto';
                    checkboxViewEstudos.innerHTML = td.textContent;
            }
        });
    }
}