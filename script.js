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

        //adds click event listener
        box.addEventListener('click', brush);

        boxesContainer.appendChild(box);

    }

}


function paint() {
    

}

function brush(){
    let allBoxes = document.querySelectorAll('.boxes__container--children');
    allBoxes.forEach(box => box.addEventListener('click', () => box.classList.add('black')));
}


function erase() {

    if (eraseButtonActivated === true) {
        let allBoxes = document.querySelectorAll('.boxes__container--children');
        allBoxes.forEach(box => box.addEventListener('click', () => box.classList.add('white')));
    }

    if (eraseButtonActivated === false) {
        eraseButtonActivated = true;
    } else if (eraseButtonActivated === true) {
        eraseButtonActivated = false;
    }



    return eraseButtonActivated;


}


let boxesContainer = document.querySelector('.boxes__container');

// Settings
let brushButton = document.querySelector('.brush_button');
brushButton.addEventListener('click', brush);

let eraseButton = document.querySelector('.erase_button');
let eraseButtonActivated = false;
eraseButton.addEventListener('click', erase);

let clearButton = document.querySelector('.clear_button');
clearButton.addEventListener('click', generateBox);

generateBox(16);










