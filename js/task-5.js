const bodyElem = document.querySelector('body');
const buttonElem = document.querySelector('.change-color');
const spanElem = document.querySelector('.color');

buttonElem.addEventListener('click', handleButtonElemClick);

function handleButtonElemClick() {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  spanElem.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
