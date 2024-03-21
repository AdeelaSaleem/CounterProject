const value = document.getElementById('value');
const btnDecrease = document.querySelector('.btn__decrease');
const btnReset = document.querySelector('.btn__reset');
const btnIncrease = document.querySelector('.btn__increase');

let count = 0;

btnDecrease.addEventListener('click', () => {
    count--;
    value.textContent = count;
});

btnReset.addEventListener('click', () => {
    count = 0;
    value.textContent = count;
});

btnIncrease.addEventListener('click', () => {
    count++;
    value.textContent = count;
});
