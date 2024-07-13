const submit_button = document.querySelector('#submit-button').addEventListener('click', function(){
    const password = document.getElementById('password').value; 

    if (password.length < 8) {
        alert("A senha deve conter pelo menos 8 caracteres.");
        return false;
    } else if (!/[A-Z]/.test(password)) {
        alert("A senha deve conter pelo menos uma letra maiúscula.");
        return false;
    } else if (!/[a-z]/.test(password)) {
        alert("A senha deve conter pelo menos uma letra minúscula.");
        return false;
    } else if (!/\d/.test(password)) {
        alert("A senha deve conter pelo menos um número.");
        return false;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
        alert("A senha deve conter pelo menos um caractere especial.");
        return false;
    } else{
        return true;
    }
});
