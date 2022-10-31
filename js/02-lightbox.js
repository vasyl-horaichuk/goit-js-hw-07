import { galleryItems } from './gallery-items.js';

/*
  |==============================
  | Solution - 1
  |==============================
*/

// const galleryListByClassName = document.querySelector('.gallery');

// const itemMarkup = galleryItems.map(({ preview, original, description }) => 
// `<a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}"/>
// </a>`).join('')

// galleryListByClassName.insertAdjacentHTML("afterbegin", itemMarkup)

// new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: "alt",
//   captionDelay: 250,
//   animationSpeed: 500,
//   overlayOpacity:	0.7,
// })

/*
  |==============================
  | Solution - 2
  |==============================
*/

const galleryListByClassName = document.querySelector('.gallery');

const items = [];
galleryItems.forEach(({ preview, original, description }) => {

  const linkElement = document.createElement('a');
  linkElement.classList.add('gallery__item'); 
  linkElement.setAttribute('href', original);

  const ImageElement = document.createElement('img');
  ImageElement.classList.add('gallery__image');
  ImageElement.src = preview;
  ImageElement.alt = description

  linkElement.appendChild(ImageElement);
  items.push(linkElement);
});

galleryListByClassName.append(...items);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 500,
  overlayOpacity:	0.7,
})