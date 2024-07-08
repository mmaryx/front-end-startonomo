const toggle1 = document.getElementById('toggle-1');
const toggle2 = document.getElementById('toggle-2');
const hide_fields = document.querySelector('.hide-fields');

toggle1.addEventListener('change', function() {
    if(toggle1.checked) {
        // Unselect toggle2 if toggle1 is selected
        toggle2.checked = false;
        // Hide fields
        hide_fields.style.display = 'none';
    } else {
        toggle2.checked = true;
        hide_fields.style.display = 'flex'; 
    }
});

toggle2.addEventListener('change', function() {
    if(toggle2.checked) {
        // Unselect toggle1 if toggle2 is selected
        toggle1.checked = false;
        // Hide fields
        hide_fields.style.display = 'flex';
    } else {
        toggle1.checked = true;
        hide_fields.style.display = 'none';
    }
});
