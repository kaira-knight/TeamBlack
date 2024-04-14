const element_menu = document.querySelector('.element-main');

const element_click = document.querySelector('.feature-card');

const element_exit = document.querySelector('#menu-exit');


element_click.addEventListener('click', () => {
    element_menu.classList.add('show');
})

element_exit.addEventListener('click', () => {
    element_menu.classList.remove('show');
})