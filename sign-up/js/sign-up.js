const toggle1 = document.getElementById('toggle-1');
const toggle2 = document.getElementById('toggle-2');
const hide_fields = document.querySelector('.hide-fields')


toggle1.addEventListener('change', function() {
    if(toggle1.checked) {
        toggle2.checked = false; // Desmarca o toggle2 se toggle1 for marcado
        hide_fields.style.display = 'none'; // Esconde os campos
    } else if(toggle1.checked == false) {
        toggle2.checked = true;
        hide_fields.style.display='flex'; 
    }
});

toggle2.addEventListener('change', function() {
    if(toggle2.checked) {
        toggle1.checked = false; // Desmarca o toggle1 se toggle2 for marcado
        hide_fields.style.display='flex'; // Mostra os campos
    } else if(toggle2.checked == false) {
        toggle1.checked = true;
        hide_fields.style.display = 'none';
    }
});
