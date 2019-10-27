// Wait for loading of the page
document.addEventListener('DOMContentLoaded', run);

let body;
let header;
let footer;
let menuBtnText;
let menuBtnIcon;
let menu;
let page;

function run() {
    body = document.getElementsByTagName('body')[0];
    header = document.getElementById('header');
    footer = document.getElementById('footer');
    menu = document.getElementById('menu');
    page = document.getElementById('page');
    menuBtnText = document.getElementById('menu-button-text');
    menuBtnIcon = document.getElementById('menu-button-icon');

    const menuBtn = document.getElementById('menu-button');
    // Function "toggleMenu" will be called for every click on the menu button.
    menuBtn.addEventListener('click', toggleMenu);
}

/**
 * Handles clicks on the menu button: opens or hides the menu.
 */
function toggleMenu() {
    body.classList.toggle('Body--with-menu');
    // Hide the header's elements when the menu is opened
    header && header.classList.toggle('Header--with-menu');
    // Hide the footer when the menu is opened
    footer && footer.classList.toggle('Footer--with-menu');
    // Shifts the page's content to the right.
    page.classList.toggle('Page--with-menu');
    // Toggles the menu.
    menu.classList.toggle('Menu--closed');

    // Change the menu button's text.
    const closed = menu.classList.contains('Menu--closed');
    menuBtnText.textContent = closed ? 'Menu' : 'Close'
    menuBtnIcon.src = closed ? 'img/common/menu-open.svg' : 'img/common/menu-close.svg';
    menuBtnIcon.alt = closed ? 'Menu' : 'Close';

    if (closed) {
        if (onMenuClose) {
            onMenuClose();
        }
    } else {
        if (onMenuOpen) {
            onMenuOpen();
        }
    }
}

function createModal(modalId, modalBackDoorId) {
    const modal = document.getElementById(modalId);

    function open() {
        modal.classList.add('Modal--opened');
        Math.max(modal.offsetWidth, modal.scrollWidth);
        modal.classList.add('Modal--visible');
    }

    function close() {
        function closingHandler() {
            modal.classList.remove('Modal--opened');
            modal.removeEventListener("transitionend", closingHandler);
        }
        modal.addEventListener("transitionend", closingHandler, false);
        modal.classList.remove('Modal--visible');
    }

    const backDoor = document.getElementById(modalBackDoorId);
    backDoor.addEventListener('click', function closePartnershipModal() {
        close();
    });

    return {
        toggle: function() {
            const opened = modal.classList.contains('Modal--opened');
            if (opened) {
                close();
            } else {
                open();
            }
        }
    };
}
