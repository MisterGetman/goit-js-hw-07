const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

const handleInput = e => {
  const text = e.target.value;

  text.trim().length === 0
    ? (outputElem.textContent = 'Anonymous')
    : (outputElem.textContent = text.trim());
};

inputElem.addEventListener('input', handleInput);
