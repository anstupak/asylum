// Wait for loading of the page
document.addEventListener('DOMContentLoaded', run);

let partnershipModal

function run() {
    partnershipModal = createModal('partnership-modal', 'partnership-modal-backdoor');

    const becomePartnerBtn = document.getElementById('become-partner-button');
    // Function "toggleMenu" will be called for every click on the menu button.
    becomePartnerBtn.addEventListener('click', togglePartnershipModal);
}

/**
 * Handles clicks on the menu button: opens or hides the menu.
 */
function togglePartnershipModal() {
    // Hide the header's elements when the menu is opened
    partnershipModal.toggle();
}
