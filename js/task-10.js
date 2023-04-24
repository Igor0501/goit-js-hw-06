  // function getRandomHexColor() {
  //   return `#${Math.floor(Math.random() * 16777215)
  //     .toString(16)
  //     .padStart(6, 0)}`;
  // }

  // function createBoxes(amount) {
  //   const boxes = document.querySelector('#boxes');
  //   let size = 30;
  //   for (let i = 0; i < amount; i += 1) {
  //     const box = document.createElement('div');
  //     box.style.backgroundColor = getRandomHexColor();
  //     box.style.width = `${size}px`;
  //     box.style.height = `${size}px`;
  //     boxes.appendChild(box);
  //     size += 10;
  //   }
  // }

  // function destroyBoxes() {
  //   const boxes = document.querySelector('#boxes');
  //   boxes.innerHTML = '';
  // }

  // const createButton = document.querySelector('[data-create]');
  // const destroyButton = document.querySelector('[data-destroy]');
  // const input = document.querySelector('input');

  // createButton.addEventListener('click', () => {
  //   const amount = input.value;
  //   createBoxes(amount);
  // });

  // destroyButton.addEventListener('click', () => {
  //   destroyBoxes();
  // });



  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const refs = {
  inputElem: document.querySelector('input[type="number"]'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  divBoxesElem: document.querySelector('#boxes'),
};

refs.inputElem.addEventListener('change', (event) => {
  let amountValue = 0;

  if (Number(event.currentTarget.value) >= Number(event.currentTarget.min) && Number(event.currentTarget.value) <= Number(event.currentTarget.max)){
    amountValue = Number(event.currentTarget.value);
  refs.createButton.addEventListener('click', createBoxes(amountValue));
  }
  else {
    alert('Ввели невірне число!')
  }
});

refs.destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for(let i = 0; i < amount; i += Number(refs.inputElem.step)){
    const boxElem = document.createElement('div');
    boxElem.style.backgroundColor = getRandomHexColor(),
    boxElem.style.width = 30 + i * 10 + 'px';
    boxElem.style.height = 30 + i * 10 + 'px';
    boxElem.classList.add('box')
    refs.divBoxesElem.append(boxElem);
  }
}

function destroyBoxes() {
  refs.divBoxesElem.innerHTML = '';
  refs.inputElem.value = '';
};