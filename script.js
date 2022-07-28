function generateBox(pixels) {

    for (let i = 0; i < pixels; i++) {
        let box = document.createElement('div');
        box.classList.add('boxes__container--children');

        boxesContainer.appendChild(box);

        //adds click event listener
        box.addEventListener('click', paint);
    }

}


function paint() {

    this.classList.add('black');
}


let boxesContainer = document.querySelector('.boxes__container');

generateBox(2);







