const btnSub = document.querySelector('#search-icon');
const searchBar = document.querySelector('.search-bar input');
const navName = document.querySelector('.name');
const dropdown = document.querySelector('.dropdown');

const dropdownBtn = document.querySelector('#dropdown').addEventListener('click', function() {
    if (dropdown.style.display === 'block') {
        dropdown.style.maxHeight = '0'; 
        setTimeout(() => {
            dropdown.style.display = 'none'; 
        }, 300); 
    } else {
        dropdown.style.display = 'block'; 
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px'; 
    }
});

const btn = document.querySelector('.none').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    searchBar.style.marginRight = '60px';
    searchBar.style.opacity = '100';
    searchBar.style.width = '300px'
    navName.style.display = 'none';
    btn.style.display = 'none'
    btnSub.style.display = 'block'
});