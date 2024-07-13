const submit_button = document.querySelector('#submit-button').addEventListener('click', function(){
    const password = document.getElementById('password').value; 
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validar a senha
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
        alert("A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
        return false;
    }

    // Validar a confirmação da senha
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }

    // Se todas as validações forem bem-sucedidas, permitir o envio do formulário
    return true;
});
