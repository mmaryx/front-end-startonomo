const btn = document.querySelector('.none');
const btnSub = document.querySelector('#search-icon');
const searchBar = document.querySelector('.search-bar input');
const navName = document.querySelector('.name');

btn.addEventListener('click', showSearchBar)

function showSearchBar(e) {
    e.preventDefault(); 
    
    searchBar.style.marginRight = '60px';
    searchBar.style.opacity = '100';
    searchBar.style.width = '300px'
    navName.style.display = 'none';
    btn.style.display = 'none'
    btnSub.style.display = 'block'
}