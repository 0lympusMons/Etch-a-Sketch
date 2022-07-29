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
        box.addEventListener('click', paint);

        boxesContainer.appendChild(box);

    }

}


function paint() {

    this.classList.add('black');
}

function erase() {

    if (eraseButtonActivated === false) {
        eraseButtonActivated = true;
    } else if (eraseButtonActivated === true) {
        eraseButtonActivated = false;
    }
    
    this.classList.add('white');
    console.log(eraseButtonActivated);

}


let boxesContainer = document.querySelector('.boxes__container');

// Settings
let eraseButton = document.querySelector('.erase_button');
let eraseButtonActivated = false;
eraseButton.addEventListener('click', erase);

let clearButton = document.querySelector('.clear_button');
clearButton.addEventListener('click', generateBox);

generateBox(16);










