const galleryList = document.querySelector('.gallery');
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryMarkup = images.reduce((acc, { url, alt }) => 
  acc + `<li class="gallery__item"><img src="${url}" alt="${alt}" height = 250 class="gallery__image"></li>`, '');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display: flex; gap:8px; justify-content:center;");



