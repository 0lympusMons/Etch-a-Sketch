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

        box.setAttribute('draggable', 'false');



        boxesContainer.appendChild(box);


    }

}


// STARTS brush and erase

function brush() {

    let allBoxes = document.querySelectorAll('.boxes__container--children');

    allBoxes.forEach(box => box.removeEventListener('mouseover', removeBlack));
    allBoxes.forEach(box => box.addEventListener('mouseover', addBlack));

    allBoxes.forEach(box => box.removeEventListener('mousedown', removeBlack));
    allBoxes.forEach(box => box.addEventListener('mousedown', addBlackClick));
}



function erase() {


    let allBoxes = document.querySelectorAll('.boxes__container--children');

    allBoxes.forEach(box => box.removeEventListener('mouseover', addBlack));
    allBoxes.forEach(box => box.addEventListener('mouseover', removeBlack));

    allBoxes.forEach(box => box.removeEventListener('mousedown', addBlackClick));
    allBoxes.forEach(box => box.addEventListener('mousedown', removeBlackClick));

}

// ENDS brush and erase



// STARTS addBlack, removeBlack, and their click variants
function addBlack() {

    console.log('mouseIsDown is ' + mouseIsDown);

    if (mouseIsDown) {
        this.classList.remove('white');
        this.classList.add('black');
    }

}

function addBlackClick() {
    this.classList.remove('white');
    this.classList.add('black');
}


function removeBlack() {
    console.log('mouseIsDown is ' + mouseIsDown);

    if (mouseIsDown) {
        this.classList.remove('black');
        this.classList.add('white');
    }

}

function removeBlackClick() {
    this.classList.remove('black');
    this.classList.add('white');
}

// ENDS addBlack, removeBlack, and their click variants


function submit(e) {

    if (e.key === 'Enter') {

        let allBoxes = document.querySelectorAll('.boxes__container--children');
        allBoxes.forEach(box => box.remove());

        pixels = e.target.value;
        generateBox(pixels);
    }

}

function clear() {
    let allBoxes = document.querySelectorAll('.boxes__container--children');
    allBoxes.forEach(box => box.classList.remove('black'));

    allBoxes.forEach(box => box.classList.add('white'));
}



//STARTS mouse event listener(s)

document.addEventListener('mousedown', truthify);
document.addEventListener('mouseup', falsify);

let mouseIsDown = false;

function truthify() {
    mouseIsDown = true;
    console.log(mouseIsDown);
}

function falsify() {
    mouseIsDown = false;
    console.log(mouseIsDown);

}



// ENDS mouse event listener(s) 


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











