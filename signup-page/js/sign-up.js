const toggle1 = document.getElementById('toggle-1');
const toggle2 = document.getElementById('toggle-2');
const hide_fields = document.querySelector('.hide-fields');

toggle1.addEventListener('change', function() {
    if(toggle1.checked) {
        // Unselect toggle2 if toggle1 is selected
        toggle2.checked = false;
        // Hide fields
        hide_fields.style.display = 'none';

        document.getElementById("hide-fields").removeAttribute('required');
    } else {
        toggle2.checked = true;
        hide_fields.style.display = 'flex'; 
        
        document.getElementById("hide-fields").setAttribute('required', 'true');
    }
});

toggle2.addEventListener('change', function() {
    if(toggle2.checked) {
        // Unselect toggle1 if toggle2 is selected
        toggle1.checked = false;
        // Hide fields
        hide_fields.style.display = 'flex';

        document.getElementById("hide-fields").setAttribute('required', 'true');
    } else {
        toggle1.checked = true;
        hide_fields.style.display = 'none';

        document.getElementById("hide-fields").removeAttribute('required');
    }
});

const tel_input = document.getElementById('tel'); 
tel_input.addEventListener('input', () => { // Formata o número de telefone
    let formatted_tel = tel_input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (formatted_tel.length > 0) {
        formatted_tel = formatted_tel.substring(0, 0) + '(' + formatted_tel.substring(0);
    }
    if (formatted_tel.length > 3) {
        formatted_tel = formatted_tel.substring(0, 3) + ' ' + formatted_tel.substring(3);
    }
    if (formatted_tel.length > 3) {
        formatted_tel = formatted_tel.substring(0, 3) + ')' + formatted_tel.substring(3);
    }
    if (formatted_tel.length > 10) {
        formatted_tel = formatted_tel.substring(0, 10) + '-' + formatted_tel.substring(10);
    }

    tel_input.value = formatted_tel;
});

function capitalizeName() { // Salva os nomes já com a primeira letra maiúscula
    let firstname_input = document.getElementById('firstname');
    let lastname_input = document.getElementById('lastname');

    let firstname = firstname_input.value.toLowerCase();
    firstname_input.value = firstname.charAt(0).toUpperCase() + firstname.slice(1);

    let lastname = lastname_input.value.toLowerCase();
    lastname_input.value = lastname.charAt(0).toUpperCase() + lastname.slice(1);
}

const cep_input = document.getElementById('cep'); 
cep_input.addEventListener('input', () => { // Formata o cep
    let formatted_cep = cep_input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (formatted_cep.length > 5) {
        formatted_cep = formatted_cep.substring(0, 5) + '-' + formatted_cep.substring(5);
    }

    cep_input.value = formatted_cep;
});