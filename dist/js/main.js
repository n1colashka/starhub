document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header').addEventListener('click', function(evt) {
        if (evt.target.closest('.menu__btn')) {
            document.querySelector('.menu').classList.add('menu--active');
        }

        if (evt.target.closest('.menu__services-close')) {
            document.querySelector('.menu').classList.remove('menu--active');
        }
        
    });
});