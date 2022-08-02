function generateBox(num) {

    pixels = num * num;

    for (let i = 0; i < pixels; i++) {
        let box = document.createElement('div');
        box.classList.add('boxes__container--children');


        // sets dimensions
        let boxesContainerHeight = boxesContainer.offsetHeight;
        let boxesContainerWidth = boxesContainer.offsetWidth;

        box.style.width = `${boxesContainerWidth / num}px`;
        box.style.height = `${boxesContainerHeight / num}px`;

        boxesContainer.appendChild(box);

    }

}

function brush() {
    let allBoxes = document.querySelectorAll('.boxes__container--children');
    allBoxes.forEach(box => box.removeEventListener('click', removeBlack));

    allBoxes.forEach(box => box.addEventListener('click', addBlack));
}


function erase() {


    let allBoxes = document.querySelectorAll('.boxes__container--children');

    allBoxes.forEach(box => box.removeEventListener('click', addBlack));

    allBoxes.forEach(box => box.addEventListener('click', removeBlack));

}

function addBlack() {
    this.classList.remove('white');
    this.classList.add('black');

}

function removeBlack() {
    this.classList.remove('black');
    this.classList.add('white');


}

function submit(e) {

    if (e.key === 'Enter') {

        let allBoxes = document.querySelectorAll('.boxes__container--children');
        allBoxes.forEach(box => box.remove());

        pixels = e.target.value;
        generateBox(pixels);
    }

}

function clear(){
    let allBoxes = document.querySelectorAll('.boxes__container--children');
    allBoxes.forEach(box => box.classList.add('white'));
}


let boxesContainer = document.querySelector('.boxes__container');

let allBoxes = document.querySelectorAll('.boxes__container--children');


// Settings
let brushButton = document.querySelector('.brush_button');
brushButton.addEventListener('click', brush);

let eraseButton = document.querySelector('.erase_button');
let eraseButtonActivated = false;
eraseButton.addEventListener('click', erase);

let clearButton = document.querySelector('.clear_button');
clearButton.addEventListener('click', clear);

let pixels = 2;
let input = document.querySelector('.input');
input.addEventListener('keypress', submit);

// Settings ends here











