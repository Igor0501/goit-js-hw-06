const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');
const optionsLink = (options) => {
  return options.map((item) => {
    const liItem = document.createElement('li');
    liItem.classList.add('item');
    liItem.textContent = item;
    return liItem;
  })
}

ingredientsEl.append(...optionsLink(ingredients))

console.log(ingredientsEl)