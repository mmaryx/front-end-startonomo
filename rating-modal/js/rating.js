const stars = document.querySelectorAll('.star-icon');

document.addEventListener('click', function(e) {
    const classStar = e.target.classList;
    
    if (!classStar.contains('active')) {
        stars.forEach(function(star) {
            star.classList.remove('active');
        }) ;

        classStar.add('active');

        console.log(e.target.getAttribute('rating-data'));
    }
});