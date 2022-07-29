function generateBox(num) {

    pixels = num * num;

    for (let i = 0; i < pixels; i++) {
        let box = document.createElement('div');
        box.classList.add('boxes__container--children');
        

        // sets dimensions
        let boxesContainerHeight = boxesContainer.offsetHeight;
        let boxesContainerWidth = boxesContainer.offsetWidth;

        box.style.width = `${boxesContainerWidth/num}px`;
        box.style.height = `${boxesContainerHeight/num}px`;

        //adds click event listener
        box.addEventListener('click', paint);

        boxesContainer.appendChild(box);

    }

}


function paint() {

    this.classList.add('black');
}

function erase(){
    this.classList.add('white');
    console.log("Does not work");
}


let boxesContainer = document.querySelector('.boxes__container');

// Settings
let eraseButton = document.querySelector('.erase_button');
eraseButton.addEventListener('click', erase);

generateBox(16);










