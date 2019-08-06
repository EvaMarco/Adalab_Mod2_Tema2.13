'use strict';

let counter = 0;
const time = document.querySelector('.time');
let stop;

function showText() {
    counter++;
    console.log(counter);
    if (counter === 15) {
        time.innerHTML = 'Su sesión ha expirado';
        time.classList.toggle('hidden');
        clearInterval(stop);

    }
};
stop = setInterval(showText, 1000);