// Wait for loading of the page
document.addEventListener('DOMContentLoaded', run);

function run() {
    initModal('story-hospital-modal');
}

function initModal(modalName) {
    const modal = createModal(modalName, modalName + '-backdoor');

    const modalBtn = document.getElementById(modalName + '-button');
    // Function "toggleMenu" will be called for every click on the menu button.
    modalBtn.addEventListener('click', function () {
        // Hide the header's elements when the menu is opened
        modal.toggle();
    });
}

