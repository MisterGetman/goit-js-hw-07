const boxesContainerElem = document.querySelector('#boxes');
const inputElem = document.querySelector('input');
const createButtonElem = document.querySelector('[data-create]');
const destroyButtonElem = document.querySelector('[data-destroy]');

createButtonElem.addEventListener('click', handleCreateButtonClick);
destroyButtonElem.addEventListener('click', handleDestroyButtonClick);

function handleCreateButtonClick() {
  if (inputElem.value >= 1 && inputElem.value <= 100) {
    createBoxes(inputElem.value);
  }
}

function handleDestroyButtonClick() {
  boxesContainerElem.innerHTML = '';
}

function createBoxes(amount) {
  boxesContainerElem.innerHTML = '';
  boxesContainerElem.insertAdjacentHTML('afterbegin', boxesTemplate(amount));
  inputElem.value = '';
}

function boxTemplate(size) {
  return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
}

function boxesTemplate(amount) {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(boxTemplate(30 + i * 10));
  }

  return arr.join('');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
