const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', () => {
    let formattedCpf = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor atual

    if (formattedCpf.length > 3) {
        formattedCpf = formattedCpf.substring(0, 3) + '.' + formattedCpf.substring(3);
    }
    if (formattedCpf.length > 7) {
        formattedCpf = formattedCpf.substring(0, 7) + '.' + formattedCpf.substring(7);
    }
    if (formattedCpf.length > 11) {
        formattedCpf = formattedCpf.substring(0, 11) + '-' + formattedCpf.substring(11);
    }

    cpfInput.value = formattedCpf;
});

//o código ta feio mas ta funcionando <3 :D ;) ;*

const submit_button = document.querySelector('#submit-button').addEventListener('click', () => {
    const cpf = document.getElementById('cpf').value;
    const cpf_digits = cpf.split('');    
    
    let first_digit_calc=(cpf_digits[0] * 1)+(cpf_digits[1] * 2)+(cpf_digits[2] * 3)+(cpf_digits[4] * 4)+(cpf_digits[5] * 5)+(cpf_digits[6] * 6)+(cpf_digits[8] * 7)+(cpf_digits[9] * 8)+(cpf_digits[10] * 9);
    
    let first_digit = first_digit_calc % 11;
    if(first_digit == 10) {
        first_digit = 0;
    } 
    
    let second_digit_calc = (cpf_digits[0] * 0) + (cpf_digits[1] * 1) + (cpf_digits[2] * 2) + (cpf_digits[4] * 3) + (cpf_digits[5] * 4) + (cpf_digits[6] * 5) + (cpf_digits[8] * 6) + (cpf_digits[9] * 7) + (cpf_digits[10] * 8) + (first_digit * 9);
    
    let second_digit = second_digit_calc % 11;
    if(second_digit == 10) {
        second_digit = 0;
    } 
    
    if(cpf_digits[0] == null) {
        alert("CPF Inválido!")
        return false;
    } else if(first_digit == cpf_digits[12] && second_digit == cpf_digits[13]) {
        return true;
    }  else if(first_digit != cpf_digits[12] && second_digit == cpf_digits[13]) {
        alert("CPF inválido.");
        return false;
    } else if(first_digit == cpf_digits[12] && second_digit != cpf_digits[13]) {
        alert("CPF inválido.");
        return false;
    } else if(first_digit != cpf_digits[12] && second_digit != cpf_digits[13]) { 
        alert("CPF inválido.");
        return false;
    } else {
        alert("CPF inválido");
        return false;
    }
});
    
    