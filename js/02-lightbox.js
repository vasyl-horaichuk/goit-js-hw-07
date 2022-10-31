import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListByClassName = document.querySelector('.gallery');

const itemMarkup = galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`).join('')

galleryListByClassName.insertAdjacentHTML("afterbegin", itemMarkup)

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 500,
  overlayOpacity:	0.7,
})