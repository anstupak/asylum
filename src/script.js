document.addEventListener('DOMContentLoaded', run);

let header;
let footer;
let menuBtnText;
let menu;
let page;

function run() {
    header = document.getElementById('header');
    footer = document.getElementById('footer');
    menu = document.getElementById('menu');
    page = document.getElementById('page');
    menuBtnText = document.getElementById('menu-button-text');

    const menuBtn = document.getElementById('menu-button');
    menuBtn.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    header.classList.toggle('Header--with-menu');
    footer.classList.toggle('Footer--with-menu');
    page.classList.toggle('Page--with-menu');
    menu.classList.toggle('Menu--closed');

    const closed = menu.classList.contains('Menu--closed');
    menuBtnText.textContent = closed ? 'Menu' : 'Close'
}