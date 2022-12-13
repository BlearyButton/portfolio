import './style.css'

const toggleMenu = () => {
    const $menu = document.querySelector('.js-menu');
    $menu.classList.toggle('hidden');

    const isMenuOpen = !$menu.classList.contains('hidden');
    const $svgs = document.querySelectorAll('.js-ham');
    $svgs.forEach(($svg) => {
        $svg.classList.toggle('active', isMenuOpen);
    })
}

const initMenuButtonHandler = () => {
    const $buttons = document.querySelectorAll('.js-menu-button');
    $buttons.forEach(($button) => {
        $button.addEventListener('click', toggleMenu);
    })
}

window.addEventListener('DOMContentLoaded', initMenuButtonHandler);