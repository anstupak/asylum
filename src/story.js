// Wait for loading of the page
document.addEventListener('DOMContentLoaded', run);

function run() {
    initModal('story-hospital-modal');
    initModal('story-patient-modal');
    initModal('story-doctors-modal');
    initModal('story-floor-modal');

    initSlider('patient-slider');
    initSlider('evac-slider');
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

function initSlider(sliderId) {
    const slider = document.getElementById(sliderId)
    const nextBtn = slider.querySelector('.Slider__next')

    let cards = nodeListToArr(slider.querySelectorAll('.Slider__card'));

    function showNextCard() {
        const current = cards[0];
        cards = cards.slice(1);
        cards.push(current);

        for (let i = 0; i < cards.length; i++) {
            const el = cards[i];
            el.classList.remove('Slider__card--1')
            el.classList.remove('Slider__card--2')
            el.classList.remove('Slider__card--3')
            el.classList.remove('Slider__card--4')

            if (i !== cards.length - 1) {
                el.classList.add('Slider__card--' + (i + 1))
            } else {
                el.classList.add('Slider__card--closed');
                function closingHandler() {
                    el.removeEventListener("transitionend", closingHandler);
                    el.classList.remove('Slider__card--closed');
                    el.classList.add('Slider__card--' + ( i + 1))
                }
                el.addEventListener("transitionend", closingHandler, false);
            }
        }
    }

    function clickHandler(event) {
        event.stopPropagation();
        event.preventDefault();
        showNextCard();
    }

    nextBtn.addEventListener('click', clickHandler);
    for (let i = 0; i < cards.length; i++) {
        const el = cards[i];
        el.addEventListener('click', clickHandler);
    }

    function nodeListToArr(list) {
        const arr = [];
        for (let i = 0; i < list.length; i++) {
            const el = list[i];
            arr.push(el);
        }
        return arr
    }
}

