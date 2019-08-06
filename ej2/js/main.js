'use strict';

let counter = 0;
let temp;
const time = document.querySelector('.time');


const incrementAndShowCounter = () => {
    counter++;
    time.innerHTML += '🍈';
    if (counter === 12) {
        clearInterval(temp);
        time.innerHTML = '¡Feliz año Nuevo!';
    }
};


temp = setInterval(incrementAndShowCounter, 1000);