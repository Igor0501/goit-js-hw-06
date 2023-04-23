  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    const boxes = document.querySelector('#boxes');
    let size = 30;
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      boxes.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    const boxes = document.querySelector('#boxes');
    boxes.innerHTML = '';
  }

  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const input = document.querySelector('input');

  createButton.addEventListener('click', () => {
    const amount = input.value;
    createBoxes(amount);
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });