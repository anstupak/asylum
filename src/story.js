// Wait for loading of the page
document.addEventListener('DOMContentLoaded', run);

function run() {
    initModal('story-hospital-modal');
    initModal('story-patient-modal');
    initModal('story-doctors-modal');


    initSlider(
        'StoryPatientSlider__card',
        'StoryPatientSlider__card--active',
        'StoryPatientSlider__card--closed',
        'slider-arrow-left',
        'slider-arrow-right'
    );
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

function initSlider(elementClass, activeElementClass, closedClassName, leftBtnId, rightBtnId) {
    const leftBtn = document.getElementById(leftBtnId)
    const rightBtn = document.getElementById(rightBtnId)

    let elements = nodeListToArr(document.querySelectorAll('.' + elementClass));

    rightBtn.addEventListener('click', function() {
        const current = elements[0];
        elements = elements.slice(1);
        elements.push(current);

        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            el.classList.remove('StoryPatientSlider__card--1')
            el.classList.remove('StoryPatientSlider__card--2')
            el.classList.remove('StoryPatientSlider__card--3')
            el.classList.remove('StoryPatientSlider__card--4')

            if (i !== elements.length - 1) {
                el.classList.add('StoryPatientSlider__card--' + (i + 1))
            } else {
                el.classList.add('StoryPatientSlider__card--closed');
                function closingHandler() {
                    el.removeEventListener("transitionend", closingHandler);
                    el.classList.remove('StoryPatientSlider__card--closed');
                    el.classList.add('StoryPatientSlider__card--4')
                }
                el.addEventListener("transitionend", closingHandler, false);
            }
        }
    });

    function nodeListToArr(list) {
        const arr = [];
        for (let i = 0; i < list.length; i++) {
            const el = list[i];
            arr.push(el);
        }
        return arr
    }
}

