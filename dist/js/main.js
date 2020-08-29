document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header').addEventListener('click', function(evt) {
        if (evt.target.closest('.menu__btn')) {
            document.querySelector('.menu').classList.toggle('menu--active');
        }
    });
});